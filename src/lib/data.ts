// ============================================================
// DATA FILE — All editable content lives here.
// Replace placeholder values with real data when ready.
// ============================================================

// ---- SITE CONFIG ----
export const siteConfig = {
    name: "CyphX Clubs",
    tagline: "Empowering Innovation Through Competition",
    school: "EST Beni Mellal",
    email: "contact@cyphxclubs.ma",           // REPLACE
    instagram: "https://instagram.com/cyphxclubs", // REPLACE
    linkedin: "https://linkedin.com/company/cyphxclubs", // REPLACE
    whatsapp: "https://chat.whatsapp.com/placeholder",  // REPLACE
    discord: "https://discord.gg/placeholder",           // REPLACE
};

// ---- IMPACT STATS ----
export const stats = [
    { value: "20+", label: "Events Organized" },
    { value: "150+", label: "Active Members" },
    { value: "80+", label: "Bootcamp Participants" },
    { value: "30+", label: "Internship Exposures" },
];

// ---- WHAT WE DO PILLARS ----
export const pillars = [
    {
        name: "SkillTakeAway",
        icon: "🛠️",
        type: "Workshop",
        description:
            "Practical, hands-on workshops that target real-world skills. From web development to cybersecurity — every session is built to build.",
    },
    {
        name: "Next Talk",
        icon: "🎙️",
        type: "Talk",
        description:
            "Industry exposure sessions featuring professionals and alumni who share insights from the field — bridging campus and career.",
    },
    {
        name: "Leet's Code",
        icon: "⌨️",
        type: "Challenge",
        description:
            "Competitive programming challenges that sharpen your algorithmic thinking and problem-solving under pressure.",
    },
    {
        name: "CodeRush",
        icon: "🚀",
        type: "Competition",
        description:
            "Intensive hackathon-style tech competitions. Build fast, think faster. CodeRush is where real competitive profiles are forged.",
    },
    {
        name: "Cypher Camp",
        icon: "⛺",
        type: "Camp",
        description:
            "An immersive annual bootcamp with a themed edition (e.g. Web Development, AI). Multi-day, intensive, transformative — and the highest exposure tier.",
    },
];

// ---- OFFICE MEMBERS ----
// Replace `photo` with the real image path under /public/team/ when available.
export const officeMembers = [
    {
        name: "Member Name",
        role: "President",
        description: "Leads the club's vision and strategic direction.",
        photo: null, // e.g. "/team/president.jpg"
    },
    {
        name: "Member Name",
        role: "Vice President",
        description: "Oversees operations and inter-team coordination.",
        photo: null,
    },
    {
        name: "Member Name",
        role: "Head of Events",
        description: "Designs and executes the event pipeline end-to-end.",
        photo: null,
    },
    {
        name: "Member Name",
        role: "Head of Tech",
        description: "Drives technical content quality across all pillars.",
        photo: null,
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
    {
        id: "upcoming-3",
        name: "Next Talk #4 — From Campus to Company",
        type: "Talk",
        description:
            "An industry professional shares their journey from EST Beni Mellal to a leading tech company. Real talk, real advice.",
        date: "April 20, 2026",
        image: null,
        instagramUrl: "https://instagram.com/cyphxclubs",
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
        id: "past-2",
        name: "CodeRush #1",
        type: "Competition",
        description:
            "The inaugural CyphX Clubs competitive programming event. 40+ participants, 5 hours, and fierce leaderboard battles.",
        date: "November 2025",
        image: null,
        instagramUrl: "https://instagram.com/cyphxclubs",
        rankingAvailable: true,
        rankingUrl: "https://docs.google.com/spreadsheets/placeholder", // REPLACE with real ranking URL
    },
    {
        id: "past-3",
        name: "SkillTakeAway #2 — Git & GitHub",
        type: "Workshop",
        description:
            "Students learned version control fundamentals, branching strategies, and collaborative workflows on GitHub.",
        date: "October 2025",
        image: null,
        instagramUrl: "https://instagram.com/cyphxclubs",
    },
    {
        id: "past-4",
        name: "Next Talk #3 — Breaking into DevOps",
        type: "Talk",
        description:
            "A DevOps engineer unpacked CI/CD pipelines, Docker, and the mindset shift from dev to production.",
        date: "October 2025",
        image: null,
        instagramUrl: "https://instagram.com/cyphxclubs",
    },
    {
        id: "past-5",
        name: "Leet's Code #1",
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
            "Rankings in CodeRush and Leet's Code reflect problem-solving ability and competitive readiness in technical environments.",
    },
    {
        label: "General Engagement",
        weight: "Supporting Weight",
        color: "#10b981",
        description:
            "Consistent attendance in workshops and talks, peer contribution, and overall activity within the club community.",
    },
];
