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
        name: "Anas Ezzine",
        role: "Tech Coordinator",
        description: "Drives technical content quality across all pillars.",
        photo: "/office/techcoordinator.jpeg",
    },
    {
        name: "Nour El Houda Mastour",
        role: "Tech Lead",
        description: "Ensures the quality and consistency of all technical work across the club.",
        photo: "/office/techlead.jpeg",
    },
    {
        name: "Fatima-Zahra El Hattab",
        role: "Event Lead",
        description: "Leads the event planning.",
        photo: "/office/eventlead.jpeg",
    },
    {
        name: "Fatima Id Ali",
        role: "Event Lead",
        description: "Turning ideas into unforgettable experiences as Events Lead at Cyphx Club..",
        photo: "/office/eventlead2.jpeg",
    },
    {
        name: "Ikram El Haoudi",
        role: "Lead media & communication",
        description: "Responsible for managing the club’s media presence and communication.",
        photo: "/office/leadmedia.jpeg",
    },
    {
        name: "Sami Ayman Ben Haddou",
        role: "Graphic designer",
        description: "Responsible for the club’s visual identity and promotional materials.",
        photo: "/office/graphicdesigner.jpeg",
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
    // Registration
    registrationOpen?: boolean;  // true = button is active, false = greyed out
    registrationUrl?: string;    // Link to the registration form/page
}

// ---- UPCOMING EVENTS ----
export const upcomingEvents: Event[] = [
    {
        id: "upcoming-0",
        name: "AlgoRush #1 - Spring 2026",
        type: "Competition",
        description:
            "The first competition of the season, focused on algorithmic problem solving.",
        date: "March 13, 2026",
        image: "/media/AlgoRushBanner.png",
        instagramUrl: "https://www.instagram.com/cyphx.clubs.estbm",
        registrationOpen: true,          // SET TO true WHEN OPEN
        registrationUrl: "https://forms.gle/oAi9YXexuBw7w3Z46",              // REPLACE with real registration link
    },
    {
        id: "upcoming-1",
        name: "SkillTakeAway #1 - CV Creation & Stage Hunting",
        type: "Workshop",
        description:
            "A practical workshop focused on building professional CVs, solving missleading myths, and how to hunt for internships.",
        date: "March 9, 2026",
        image: "/media/skillTakeAway1.png",
        instagramUrl: "https://www.instagram.com/cyphx.clubs.estbm",
        registrationOpen: true,          // SET TO true WHEN OPEN
        registrationUrl: "https://forms.gle/yzV6Da9RdTowGoF48",              // REPLACE with real registration link
    },
    {
        id: "upcoming-2",
        name: "RushArena Spring 2026",
        type: "Competition",
        description:
            "The official competition series of CyphX, bringing under it AlgoRush, CodeRush, and FlagRush.",
        date: "March-April, 2026",
        image: "/media/rusharena2026teaser.jpeg",
        instagramUrl: "https://www.instagram.com/cyphx.clubs.estbm",
        registrationOpen: false,          // SET TO true WHEN OPEN
        registrationUrl: "",              // REPLACE with real registration link
    },
    {
        id: "upcoming-3",
        name: "Next Talk #1 - CyberSecurity",
        type: "Talk",
        description:
            "Next Talk is where we bridge you with expert students to share their knowledge and experience academically and professionally. Learn about the field for post bac+2, its state in morocco, the skills you need to have, the best way to learn it, and more.",
        date: "March 16, 2026",
        image: "/media/nexttalk2026cybersecteaser.jpeg",
        instagramUrl: "https://www.instagram.com/cyphx.clubs.estbm",
        registrationOpen: false,          // SET TO true WHEN OPEN
        registrationUrl: "",              // REPLACE with real registration link
    },
];

// ---- PAST EVENTS ----
export const pastEvents: Event[] = [
    {
        id: "past-2",
        name: "Cypher Camp — Web Dev Edition",
        type: "Camp",
        description:
            "A 4 months immersive bootcamp. Participants built full-stack web applications from scratch under mentorship.",
        date: "December 2025 - Present",
        image: "/media/cyphercamp2026media.jpeg",
        instagramUrl: "https://www.instagram.com/cyphx.clubs.estbm",
    },
    {
        id: "past-1",
        name: "CyphX Arena JR",
        type: "Competition",
        description:
            "The first official competition organized by CyphX Clubs in its KickOff, bringing together 50+ participants featuring low-technical and no-technical challenges to spark the competitive spirit in new talents. Focused on problem-solving and teamwork.",
        date: "February 2026",
        image: "/media/cyphxarenajr2025media.jpeg",
        instagramUrl: "https://www.instagram.com/p/DR22wyQCDEz/?img_index=1",
    },
    /*    {
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
        */
];

// ---- PARTNERS ----
// Replace `logo` with real image path under /public/partners/ when available.
export const partners = [
    { name: "AMOV Group SARL", logo: "/logos/amovlogo.png" },
    { name: "CodeX Club", logo: "/logos/codexlogo.jpg" },
    { name: "GMSOFT SARL", logo: "/logos/gmsoftlogo.png" },
    { name: "N7 Geeks Club", logo: "/logos/n7geekslogo.jpg" },
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
