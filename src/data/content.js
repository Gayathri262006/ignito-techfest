
export const FEST_DATE = "2026-09-18T09:00:00";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Mission", href: "#mission" },
  { label: "Events", href: "#events" },
  { label: "Competitions", href: "#competitions" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { label: "Delegates", value: "6,200+", code: "CREW-01" },
  { label: "Institutions", value: "180+", code: "ORB-02" },
  { label: "Prize Pool", value: "₹18L", code: "FUEL-03" },
  { label: "Live Events", value: "42", code: "SYS-04" },
];

export const EVENTS = [
  {
    code: "MSN-01",
    title: "Rocketry Workshop",
    category: "Workshop",
    description:
      "Build and launch a working model rocket while learning propulsion basics from aerospace experts.",
    date: "Sep 18",
    time: "10:00",
    venue: "Launch Bay A",
    seats: "60 Seats",
  },
  {
    code: "MSN-02",
    title: "AI Hackspace",
    category: "Hackathon",
    description:
      "Collaborate with innovators to build AI-powered solutions for real-world challenges within 24 hours.",
    date: "Sep 18",
    time: "14:00",
    venue: "Innovation Lab",
    seats: "120 Seats",
  },
  {
    code: "MSN-03",
    title: "Cyber Defense Arena",
    category: "Competition",
    description:
      "Test your ethical hacking and cybersecurity skills through exciting capture-the-flag challenges.",
    date: "Sep 19",
    time: "09:30",
    venue: "Cyber Zone",
    seats: "80 Seats",
  },
  {
    code: "MSN-04",
    title: "Robo Race",
    category: "Competition",
    description:
      "Design, build, and race autonomous robots across a challenging obstacle course.",
    date: "Sep 19",
    time: "11:00",
    venue: "Arena X",
    seats: "50 Teams",
  },
  {
    code: "MSN-05",
    title: "Space Quiz",
    category: "Quiz",
    description:
      "Compete in an exciting quiz covering astronomy, space missions, science, and technology.",
    date: "Sep 19",
    time: "15:30",
    venue: "Mission Hall",
    seats: "100 Seats",
  },
  {
    code: "MSN-06",
    title: "Drone Challenge",
    category: "Competition",
    description:
      "Navigate drones through precision checkpoints while completing mission objectives.",
    date: "Sep 20",
    time: "10:30",
    venue: "Flight Arena",
    seats: "40 Teams",
  },
];

export const COMPETITIONS = [
  {
    pad: "PAD ALPHA",
    title: "Code Clash",
    tagline: "Competitive programming, three escalating rounds.",
    prize: "₹4,00,000",
    difficulty: "All levels",
    slots: "500 coders",
    accent: "ignite",
  },
  {
    pad: "PAD BETA",
    title: "HackForge",
    tagline: "Build innovative tech solutions in a 24-hour hackathon.",
    prize: "₹3,50,000",
    difficulty: "Intermediate+",
    slots: "80 teams",
    accent: "nebula",
  },
  {
    pad: "PAD GAMMA",
    title: "Robo Race",
    tagline: "Design, build, and race autonomous robots across a challenging obstacle course.",
    prize: "₹5,00,000",
    difficulty: "Open",
    slots: "60 teams",
    accent: "starlight",
  },
  {
    pad: "PAD DELTA",
    title: "UI/UX Challenge",
    tagline: "Create stunning user interfaces and experiences for web and mobile applications.",
    prize: "₹3,00,000",
    difficulty: "Advanced",
    slots: "150 designers",
    accent: "nebula",
  },
];

export const SCHEDULE = [
  {
    day: "Day 01",
    date: "Sep 18",
    title: "Launch Day",
    items: [
      { time: "09:00", label: "Opening Ceremony", place: "Main Stage" },
      { time: "10:00", label: "Rocketry Workshop", place: "Launch Bay A" },
      { time: "14:00", label: "AI Hackspace", place: "Innovation Lab" },
    ],
  },
  {
    day: "Day 02",
    date: "Sep 19",
    title: "Innovation Arena",
    items: [
      { time: "09:30", label: "Cyber Defense Arena", place: "Cyber Zone" },
      { time: "11:00", label: "Robo Race", place: "Arena X" },
      { time: "15:30", label: "Space Quiz", place: "Mission Hall" },
    ],
  },
  {
    day: "Day 03",
    date: "Sep 20",
    title: "Final Mission",
    items: [
      { time: "10:30", label: "Drone Challenge", place: "Flight Arena" },
      { time: "14:00", label: "Code Clash Finals", place: "Coding Arena" },
      { time: "16:00", label: "UI/UX Challenge Showcase", place: "Design Studio" },
      { time: "18:00", label: "HackForge Winner Showcase", place: "Innovation Hall" },
      { time: "19:30", label: "Closing Ceremony & Prize Distribution", place: "Main Stage" },
    ],
  },
];

export const SPONSORS = [
  "NOVA DYNAMICS",
  "HELIOS LABS",
  "CISCO",
  "NVIDIA",
  "KERALA STARTUP MISSION",
  "FOSS UNITED",
  "LUMEN AI",
];

export const FAQS = [
  {
    q: "Who can participate in IGNITO?",
    a: "Any student currently enrolled in a recognised college or university. Some competitions have team-size or skill-level requirements — check each listing.",
  },
  {
    q: "Is there a registration fee?",
    a: "Most workshops and exhibits are free. Flagship competitions have a nominal per-team fee to cover kits and logistics, listed on each competition page.",
  },
  {
    q: "Do you provide accommodation?",
    a: "Yes, on-campus dormitory stay is available for outstation delegates for the full three days, subject to availability.",
  },
  {
    q: "Can I participate in multiple events?",
    a: "Yes, as long as the timings don't clash. The schedule section shows the full three-day timeline to help you plan.",
  },
];
