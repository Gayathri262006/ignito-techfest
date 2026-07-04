import { useEffect, useRef } from "react";

/**
 * Lightweight canvas starfield with slow parallax drift, gentle mouse
 * parallax (depth), and occasional shooting stars.
 * Respects prefers-reduced-motion by freezing motion.
 */
export default function StarField({ density = 0.00012, className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const STAR_HUES = ["#f5f4fa", "#a78bfa", "#38bdf8", "#ff8a5c"];

    let stars = [];
    let shootingStars = [];
    let animationId;
    let width, height;
    // Target + smoothed pointer offset for parallax depth.
    const pointer = { tx: 0, ty: 0, x: 0, y: 0 };

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      const count = Math.floor(width * height * density);
      stars = Array.from({ length: count }, () => {
        const depth = Math.random(); // 0 = far, 1 = near
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: depth * 1.3 + 0.2,
          depth,
          speed: depth * 0.06 + 0.01,
          twinkleOffset: Math.random() * Math.PI * 2,
          hue: Math.random() > 0.8 ? STAR_HUES[Math.floor(Math.random() * STAR_HUES.length)] : "#f5f4fa",
        };
      });
    }

    function spawnShootingStar() {
      // Enter from the top edge, streak down-left at a shallow angle.
      const startX = width * (0.3 + Math.random() * 0.7);
      const angle = (Math.PI / 180) * (110 + Math.random() * 30);
      const speed = 9 + Math.random() * 6;
      shootingStars.push({
        x: startX,
        y: -20,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 60 + Math.random() * 30,
        len: 90 + Math.random() * 80,
      });
    }

    function draw(time) {
      ctx.clearRect(0, 0, width, height);

      // Ease the smoothed pointer toward its target.
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;

      for (const star of stars) {
        const twinkle = prefersReduced
          ? 0.8
          : 0.5 + 0.5 * Math.sin(time / 900 + star.twinkleOffset);
        ctx.globalAlpha = 0.25 + twinkle * 0.75;
        ctx.fillStyle = star.hue;
        const px = star.x + pointer.x * star.depth;
        const py = star.y + pointer.y * star.depth;
        ctx.beginPath();
        ctx.arc(px, py, star.r, 0, Math.PI * 2);
        ctx.fill();

        if (!prefersReduced) {
          star.y += star.speed;
          if (star.y > height) {
            star.y = 0;
            star.x = Math.random() * width;
          }
        }
      }

      if (!prefersReduced) {
        // Occasionally launch a shooting star.
        if (shootingStars.length < 2 && Math.random() < 0.004) {
          spawnShootingStar();
        }
        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const s = shootingStars[i];
          s.x += s.vx;
          s.y += s.vy;
          s.life += 1;
          const fade = 1 - s.life / s.maxLife;
          const tailX = s.x - s.vx * (s.len / 12);
          const tailY = s.y - s.vy * (s.len / 12);
          const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
          grad.addColorStop(0, `rgba(245,244,250,${0.9 * fade})`);
          grad.addColorStop(0.4, `rgba(167,139,250,${0.5 * fade})`);
          grad.addColorStop(1, "rgba(167,139,250,0)");
          ctx.globalAlpha = 1;
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();
          if (s.life >= s.maxLife || s.y > height + 40 || s.x < -40) {
            shootingStars.splice(i, 1);
          }
        }
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(draw);
    }

    function onPointerMove(e) {
      // Map pointer to a small offset; far stars barely move, near stars drift.
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 40;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 40;
    }

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    if (!prefersReduced) window.addEventListener("pointermove", onPointerMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
