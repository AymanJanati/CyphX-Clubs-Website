"use client";

import { siteConfig, partners } from "@/lib/data";
import PlaceholderImage from "@/components/PlaceholderImage";

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.25rem 0.875rem",
                borderRadius: "9999px",
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "#818cf8",
                fontSize: "0.75rem",
                fontWeight: 600,
                marginBottom: "1rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
            }}
        >
            {children}
        </div>
    );
}

const partnerTypes = [
    { icon: "🎙️", label: "Guest Speakers", desc: "Share your expertise at a Next Talk session with our student community." },
    { icon: "🛠️", label: "Workshop Facilitators", desc: "Lead a SkillTakeAway session — practical, impactful, and directly skills-focused." },
    { icon: "💼", label: "Internship Providers", desc: "Host CyphX-evaluated students for internship or apprenticeship opportunities." },
    { icon: "🤝", label: "Event Collaborators", desc: "Co-organize or co-brand a CyphX event — competitions, camps, or talks." },
    { icon: "💰", label: "Sponsors", desc: "Support CyphX's programs financially and gain visibility within the EST Beni Mellal tech community." },
];

const memberSteps = [
    { icon: "🎓", label: "Be an EST Student", desc: "Open to all students currently enrolled at EST Beni Mellal." },
    { icon: "📲", label: "Join the Community", desc: "Connect via WhatsApp or Discord — our two main communication channels." },
    { icon: "📅", label: "Attend Events", desc: "Show up to workshops, talks, and competitions. Presence is your first investment." },
    { icon: "🏆", label: "Compete", desc: "Enter competitions, push your limits, and climb the rankings." },
    { icon: "📈", label: "Grow", desc: "Build your profile, get exposure, and position yourself for internship opportunities." },
];

export default function JoinPage() {
    return (
        <>
            {/* ── HEADER ── */}
            <section
                style={{
                    paddingTop: "120px",
                    paddingBottom: "4rem",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    textAlign: "center",
                    background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 70%)",
                }}
            >
                <SectionLabel>Join CyphX</SectionLabel>
                <h1
                    style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: "clamp(2rem, 5vw, 3.5rem)",
                        letterSpacing: "-0.03em",
                        maxWidth: "700px",
                        margin: "0 auto 1.25rem",
                    }}
                >
                    Be Part of What We&apos;re{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Building
                    </span>
                </h1>
                <p style={{ color: "#a1a1aa", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7, fontSize: "1.0625rem" }}>
                    Whether you&apos;re a student ready to compete or a company looking to collaborate — there&apos;s a place for you in CyphX Clubs.
                </p>
            </section>

            {/* ── JOIN AS MEMBER ── */}
            <section style={{ padding: "5rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "3rem",
                        alignItems: "start",
                    }}
                >
                    {/* Steps */}
                    <div>
                        <SectionLabel>For Students</SectionLabel>
                        <h2
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 800,
                                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                                letterSpacing: "-0.03em",
                                marginBottom: "0.75rem",
                            }}
                        >
                            Join as a Member
                        </h2>
                        <p style={{ color: "#a1a1aa", lineHeight: 1.7, marginBottom: "2rem" }}>
                            Membership is open to all EST Beni Mellal students. No application needed — just show up, engage, and grow.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                            {memberSteps.map((step, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        gap: "1rem",
                                        alignItems: "flex-start",
                                        padding: "1.125rem 1.25rem",
                                        background: "#111113",
                                        border: "1px solid #1e1e20",
                                        borderRadius: "12px",
                                        transition: "border-color 0.25s",
                                    }}
                                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#27272a")}
                                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1e1e20")}
                                >
                                    <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{step.icon}</span>
                                    <div>
                                        <div
                                            style={{
                                                fontFamily: "'Space Grotesk', sans-serif",
                                                fontWeight: 700,
                                                fontSize: "0.9375rem",
                                                marginBottom: "0.25rem",
                                            }}
                                        >
                                            {step.label}
                                        </div>
                                        <div style={{ color: "#71717a", fontSize: "0.8375rem", lineHeight: 1.6 }}>{step.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <a
                                href={siteConfig.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.6rem",
                                    padding: "0.875rem 1.75rem",
                                    borderRadius: "10px",
                                    background: "rgba(37,211,102,0.08)",
                                    border: "1px solid rgba(37,211,102,0.25)",
                                    color: "#4ade80",
                                    fontWeight: 600,
                                    fontSize: "0.9375rem",
                                    textDecoration: "none",
                                    transition: "background 0.2s, transform 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.14)";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.08)";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                }}
                            >
                                <WaIcon /> Join WhatsApp
                            </a>
                            <a
                                href={siteConfig.discord}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.6rem",
                                    padding: "0.875rem 1.75rem",
                                    borderRadius: "10px",
                                    background: "rgba(99,102,241,0.08)",
                                    border: "1px solid rgba(99,102,241,0.25)",
                                    color: "#818cf8",
                                    fontWeight: 600,
                                    fontSize: "0.9375rem",
                                    textDecoration: "none",
                                    transition: "background 0.2s, transform 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.14)";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.08)";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                }}
                            >
                                <DcIcon /> Join Discord
                            </a>
                        </div>
                    </div>

                    {/* Visual card */}
                    <div
                        style={{
                            background: "linear-gradient(135deg, #111113, #18181b)",
                            border: "1px solid #27272a",
                            borderRadius: "24px",
                            padding: "2rem",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: 0, left: 0, right: 0, height: "3px",
                                background: "linear-gradient(90deg, #6366f1, #a78bfa, #38bdf8)",
                            }}
                        />
                        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.0625rem", marginBottom: "1.25rem", color: "#a1a1aa" }}>
                            Why Join CyphX?
                        </div>
                        {[
                            { emoji: "🎯", text: "Structured path to internship exposure" },
                            { emoji: "🏅", text: "Real competition rankings and achievements" },
                            { emoji: "👥", text: "Community of ambitious students" },
                            { emoji: "🏢", text: "Access to company partnerships" },
                            { emoji: "📈", text: "Skills that go beyond the curriculum" },
                            { emoji: "🌍", text: "A profile that competes nationally" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.875rem",
                                    padding: "0.875rem 0",
                                    borderBottom: i < 5 ? "1px solid #27272a" : "none",
                                }}
                            >
                                <span style={{ fontSize: "1.1rem" }}>{item.emoji}</span>
                                <span style={{ color: "#d4d4d8", fontSize: "0.9rem" }}>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PARTNER WITH US ── */}
            <section
                style={{
                    padding: "5rem 1.5rem",
                    background: "rgba(17,17,19,0.6)",
                    borderTop: "1px solid #27272a",
                    borderBottom: "1px solid #27272a",
                }}
            >
                <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <SectionLabel>For Organizations</SectionLabel>
                        <h2
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 800,
                                fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
                                letterSpacing: "-0.03em",
                                marginBottom: "0.875rem",
                            }}
                        >
                            Partner With Us
                        </h2>
                        <p style={{ color: "#a1a1aa", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
                            We collaborate with companies, professionals, and organizations that want to engage with motivated student talent at EST Beni Mellal.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                            gap: "1.25rem",
                            marginBottom: "3.5rem",
                        }}
                    >
                        {partnerTypes.map((type, i) => (
                            <div
                                key={i}
                                style={{
                                    background: "#111113",
                                    border: "1px solid #27272a",
                                    borderRadius: "16px",
                                    padding: "1.75rem",
                                    transition: "border-color 0.3s, transform 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "#6366f1";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "#27272a";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                }}
                            >
                                <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{type.icon}</div>
                                <h3
                                    style={{
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        fontWeight: 700,
                                        fontSize: "1rem",
                                        marginBottom: "0.625rem",
                                    }}
                                >
                                    {type.label}
                                </h3>
                                <p style={{ color: "#71717a", fontSize: "0.875rem", lineHeight: 1.7 }}>{type.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Partner Logos Section */}
                    <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                        <h3
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 700,
                                fontSize: "1.0625rem",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Current & Past Partners
                        </h3>
                        <p style={{ color: "#71717a", fontSize: "0.875rem" }}>
                            Replace placeholder logos with real partner logos in <code style={{ color: "#818cf8" }}>/public/partners/</code> and update <code style={{ color: "#818cf8" }}>src/lib/data.ts</code>
                        </p>
                    </div>

                    {/* Partner logo placeholders */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                            gap: "1rem",
                        }}
                    >
                        {partners.map((partner, i) => (
                            <div
                                key={i}
                                style={{
                                    background: "#111113",
                                    border: "1px solid #27272a",
                                    borderRadius: "12px",
                                    height: "80px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "border-color 0.25s",
                                }}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#3f3f46")}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#27272a")}
                            >
                                {partner.logo ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        style={{ maxWidth: "120px", maxHeight: "50px", objectFit: "contain", filter: "grayscale(1) brightness(0.7)" }}
                                    />
                                ) : (
                                    <PlaceholderImage
                                        width="100%"
                                        height="80px"
                                        label={partner.name}
                                        borderRadius="12px"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

function WaIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );
}

function DcIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.04.037.05a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
        </svg>
    );
}
