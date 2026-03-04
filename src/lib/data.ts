// ============================================================
// DATA FILE — All editable content lives here.
// Replace placeholder values with real data when ready.
// ============================================================

// ---- SITE CONFIG ----
export const siteConfig = {
    name: "CyphX Clubs",
    tagline: "Empowering Innovation Through Competition",
    school: "EST Beni Mellal",
    email: "clubs@cyphx.dev",
    instagram: "https://www.instagram.com/cyphx.clubs.estbm", // REPLACE
    linkedin: "https://www.linkedin.com/company/cyphx-clubs-estbm", // REPLACE
    whatsapp: "https://chat.whatsapp.com/EPmSltS7gQcCiAuwrA4nPu",  // REPLACE
    discord: "https://discord.gg/N8s3utfS",           // REPLACE
};

// ---- IMPACT STATS ----
export const stats = [
    { value: "10+", label: "Events Organized" },
    { value: "180+", label: "Active Members" },
    { value: "60+", label: "Bootcamp Participants" },
    { value: "10+", label: "Secured Internships" },
];

// ---- WHAT WE DO PILLARS ----
export const pillars = [
    {
        name: "SkillTakeAway",
        icon: null,
        logo: "/SkillTakeAwayico.png",
        type: "Workshop",
        description:
            "Practical, hands-on workshops that target real-world skills. From web development to cybersecurity — every session is built to build.",
    },
    {
        name: "Next Talk",
        icon: null,
        logo: "/NextTalkico.png",
        type: "Talk",
        description:
            "Insight-packed sessions with experienced students and professionals. Next Talk dives deep into IT fields giving you clarity, guidance, and actionable knowledge. Learn from mistakes, ask questions, and see beyond the textbooks.",
    },
    {
        name: "RushArena",
        icon: null,
        logo: "/RushArenaico.png",
        type: "Competition",
        description:
            "The official competition series of CyphX. RushArena is the umbrella that brings together all our competitive formats under one arena — designed to sharpen skills, reveal talent, and build real high-level tech profiles. This is where preparation meets pressure.",
    },
    {
        name: "AlgoRush",
        icon: null,
        logo: "/AlgoRushico.png",
        type: "Competition",
        description:
            "Fast-paced algorithmic battles focused on logic, problem solving, and clean thinking. Solve under pressure, climb the leaderboard, and prove your analytical edge.",
    },
    {
        name: "CodeRush",
        icon: null,
        logo: "/CodeRushico.png",
        type: "Competition",
        description:
            "Intensive hackathon-style tech competitions. Build fast, think faster. CodeRush is where real competitive profiles are forged.",
    },
    {
        name: "FlagRush",
        icon: null,
        logo: "/FlagRushico.png",
        type: "Competition",
        description:
            "CTF-style cybersecurity challenges built around real-world vulnerabilities and attack-defense scenarios. Hunt the flags, break the system, secure the future.",
    },
    {
        name: "Cypher Camp",
        icon: null,
        logo: "/cyphercampico.png",
        type: "Camp",
        description:
            "An immersive annual bootcamp with a themed edition (e.g. Web Development, AI). Multi-day, intensive, transformative — and the highest exposure tier.",
    },
];

// ---- OFFICE MEMBERS ----
// Replace `photo` with the real image path under /public/team/ when available.
export const officeMembers = [
    {
        name: "Rayan TAMRAOUI",
        role: "President",
        description: "Leads the club's vision and strategic direction.",
        photo: "/office/president.jpeg", // e.g. "/team/president.jpg"
    },
    {
        name: "Member Name",
        role: "Vice President",
        description: "Oversees operations and inter-team coordination.",
        photo: null,
    },
    {
        name: "Anas Ezzine",
        role: "Tech Coordinator",
        description: "Drives technical content quality across all pillars.",
        photo: "/office/techcoordinator.jpeg",
    },
    {
        name: "Fatima-Zahra El Hattab",
        role: "Event Lead",
        description: "Leads the event planning.",
        photo: "/office/eventlead.jpeg",
    },
    {
        name: "Member Name",
        role: "Head of Marketing",
        description: "Manages branding, social presence, and community outreach.",
        photo: null,
    },
    {
        name: "Member Name",
        role: "Head of Partnerships",
        description: "Builds relationships with sponsors, speakers, and companies.",
        photo: null,
    },
];

// ---- EVENT TYPE ----
export type EventType = "Workshop" | "Competition" | "Talk" | "Camp";

export interface Event {
    id: string;
    name: string;
    type: EventType;
    description: string;
    date: string;
    image: string | null;     // e.g. "/events/event-1.jpg" — null = use placeholder
    instagramUrl: string;
    // Only relevant when type === "Competition"
    rankingAvailable?: boolean;
    rankingUrl?: string;      // URL to ranking page/sheet when rankingAvailable = true
}

// ---- UPCOMING EVENTS ----
export const upcomingEvents: Event[] = [
    {
        id: "upcoming-1",
        name: "SkillTakeAway #3 — React Fundamentals",
        type: "Workshop",
        description:
            "A hands-on session covering the core concepts of React — components, state, hooks, and building your first real UI.",
        date: "March 15, 2026",
        image: null,
        instagramUrl: "https://instagram.com/cyphxclubs",
    },
    {
        id: "upcoming-2",
        name: "CodeRush Spring Edition",
        type: "Competition",
        description:
            "A 6-hour competitive programming sprint. Solve algorithmic challenges, climb the board, and earn your ranking.",
        date: "April 5, 2026",
        image: null,
        instagramUrl: "https://instagram.com/cyphxclubs",
        rankingAvailable: false,
        rankingUrl: "",
    },
];

// ---- PAST EVENTS ----
export const pastEvents: Event[] = [
    {
        id: "past-1",
        name: "Cypher Camp — Web Dev Edition",
        type: "Camp",
        description:
            "A 3-day immersive bootcamp. Participants built full-stack web applications from scratch under mentorship.",
        date: "December 2025",
        image: null,
        instagramUrl: "https://instagram.com/cyphxclubs",
    },
    {
        id: "past-5",
        name: "AlgoRush #1",
        type: "Competition",
        description:
            "First competitive programming challenge session featuring 20+ participants solving LeetCode-style problems.",
        date: "September 2025",
        image: null,
        instagramUrl: "https://instagram.com/cyphxclubs",
        rankingAvailable: true,
        rankingUrl: "https://docs.google.com/spreadsheets/placeholder",
    },
];

// ---- PARTNERS ----
// Replace `logo` with real image path under /public/partners/ when available.
export const partners = [
    { name: "Partner Company", logo: null },
    { name: "Tech Sponsor", logo: null },
    { name: "Academic Partner", logo: null },
    { name: "Industry Partner", logo: null },
    { name: "Community Partner", logo: null },
    { name: "Media Partner", logo: null },
];

// ---- EVALUATION CRITERIA (Internship Page) ----
export const evaluationCriteria = [
    {
        label: "Cypher Camp Participation",
        weight: "Highest Weight",
        color: "#6366f1",
        description:
            "Completing the annual bootcamp demonstrates full commitment, sustained effort, and technical growth across multiple days.",
    },
    {
        label: "Competition Performance",
        weight: "High Weight",
        color: "#f59e0b",
        description:
            "Rankings in CodeRush and AlgoRush reflect problem-solving ability and competitive readiness in technical environments.",
    },
    {
        label: "General Engagement",
        weight: "Supporting Weight",
        color: "#10b981",
        description:
            "Consistent attendance in workshops and talks, peer contribution, and overall activity within the club community.",
    },
];
