"use client";

import { officeMembers } from "@/lib/data";
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

export default function AboutPage() {
    return (
        <>
            {/* ── PAGE HEADER ── */}
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
                <SectionLabel>About CyphX</SectionLabel>
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
                    Built from the Ground Up,{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        By Students
                    </span>
                </h1>
                <p style={{ color: "#a1a1aa", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7, fontSize: "1.0625rem" }}>
                    CyphX was not handed to us. It was driven by a conviction that EST Beni Mellal deserves a stronger technical ecosystem — and we chose to build it.
                </p>
            </section>

            {/* ── OUR STORY ── */}
            <section style={{ padding: "5rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "4rem",
                        alignItems: "center",
                    }}
                >
                    {/* Visual */}
                    <div style={{ position: "relative" }}>
                        <div
                            style={{
                                borderRadius: "20px",
                                overflow: "hidden",
                                height: "400px",
                                position: "relative",
                            }}
                        >
                            <PlaceholderImage height="400px" label="Our Story Photo" borderRadius="20px" />
                        </div>
                        {/* Floating badge */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: "-1.5rem",
                                right: "-1.5rem",
                                background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                                borderRadius: "16px",
                                padding: "1.25rem 1.5rem",
                                boxShadow: "0 20px 60px rgba(99,102,241,0.35)",
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontWeight: 800,
                                    fontSize: "2rem",
                                    color: "#fff",
                                    lineHeight: 1,
                                }}
                            >
                                EST
                            </div>
                            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem", fontWeight: 600 }}>
                                Beni Mellal
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div>
                        <SectionLabel>Our Story</SectionLabel>
                        <h2
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 800,
                                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                                letterSpacing: "-0.03em",
                                marginBottom: "1.25rem",
                            }}
                        >
                            Why CyphX Exists
                        </h2>
                        <p style={{ color: "#a1a1aa", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                            CyphX Clubs was founded by students at EST Beni Mellal who saw a clear and persistent gap:
                            students in major cities had access to structured clubs, competitions, and company pipelines.
                            Students in Beni Mellal had passion — but no structured infrastructure to channel it.
                        </p>
                        <p style={{ color: "#a1a1aa", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                            We started CyphX Clubs to change that. Not a casual student club, but a{" "}
                            <strong style={{ color: "#fafafa" }}>mission-driven technical initiative</strong> — designed
                            to elevate the regional tech ecosystem and help students build profiles that compete nationally.
                        </p>
                        <p style={{ color: "#a1a1aa", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                            Through deliberate programming — workshops, competitive events, the Cypher Camp bootcamp,
                            and merit-based internship exposure — CyphX Clubs creates the infrastructure that ambition needs.
                        </p>
                        {/* CyphX team callout */}
                        <div
                            style={{
                                marginTop: "1.5rem",
                                padding: "1.25rem 1.5rem",
                                background: "rgba(99,102,241,0.05)",
                                border: "1px solid rgba(99,102,241,0.15)",
                                borderRadius: "12px",
                                borderLeft: "3px solid #6366f1",
                            }}
                        >
                            <p style={{ color: "#a1a1aa", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                                CyphX Clubs is operated by{" "}
                                <strong style={{ color: "#fafafa" }}>CyphX</strong> — a software development
                                team building custom client software, SaaS products, and IT consulting services.
                                The club is our community commitment. Our work as a team extends far beyond it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VISION ── */}
            <section style={{ padding: "5rem 1.5rem", background: "rgba(17,17,19,0.6)", borderTop: "1px solid #27272a", borderBottom: "1px solid #27272a" }}>
                <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <SectionLabel>Our Vision</SectionLabel>
                        <h2
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 800,
                                fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
                                letterSpacing: "-0.03em",
                                marginBottom: "1rem",
                            }}
                        >
                            Where We&apos;re Going
                        </h2>
                        <p style={{ color: "#a1a1aa", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
                            Our long-term ambition is to make EST Beni Mellal a recognized source of competitive technical talent —
                            where students graduate with profiles, rankings, and industry connections, not just diplomas.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                            gap: "1.25rem",
                        }}
                    >
                        {[
                            {
                                icon: "🏆",
                                title: "National Competitiveness",
                                desc: "Producing students who compete and win at national-level tech competitions.",
                            },
                            {
                                icon: "🏢",
                                title: "Industry Pipelines",
                                desc: "Building lasting partnerships with companies that see value in CyphX-trained students.",
                            },
                            {
                                icon: "📍",
                                title: "Regional Leadership",
                                desc: "EST Beni Mellal becoming a reference point for student tech initiative in Morocco.",
                            },
                            {
                                icon: "🔁",
                                title: "Alumni Ecosystem",
                                desc: "A growing network of alumni who return as speakers, mentors, and partners.",
                            },
                        ].map((item, i) => (
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
                                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.icon}</div>
                                <h3
                                    style={{
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        fontWeight: 700,
                                        fontSize: "1.0625rem",
                                        marginBottom: "0.625rem",
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p style={{ color: "#71717a", fontSize: "0.875rem", lineHeight: 1.7 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── OFFICE MEMBERS ── */}
            <section style={{ padding: "5rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <SectionLabel>The Team</SectionLabel>
                    <h2
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Office Members
                    </h2>
                    <p style={{ color: "#a1a1aa", marginTop: "1rem", maxWidth: "480px", margin: "0.75rem auto 0", lineHeight: 1.7 }}>
                        The people building CyphX from the inside — managing operations, programs, and partnerships.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {officeMembers.map((member, i) => (
                        <div
                            key={i}
                            style={{
                                background: "#111113",
                                border: "1px solid #27272a",
                                borderRadius: "20px",
                                overflow: "hidden",
                                transition: "border-color 0.3s, transform 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "#6366f1";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "#27272a";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                            }}
                        >
                            {/* Photo slot — replace PlaceholderImage with Next.js <Image> when ready */}
                            <div style={{ height: "220px", position: "relative" }}>
                                {member.photo ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                ) : (
                                    <PlaceholderImage height="220px" label={member.role} />
                                )}
                                {/* Gradient overlay */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: "80px",
                                        background: "linear-gradient(to top, #111113, transparent)",
                                    }}
                                />
                            </div>

                            {/* Info */}
                            <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                                <div
                                    style={{
                                        display: "inline-flex",
                                        padding: "0.2rem 0.65rem",
                                        borderRadius: "9999px",
                                        background: "rgba(99,102,241,0.1)",
                                        border: "1px solid rgba(99,102,241,0.2)",
                                        color: "#818cf8",
                                        fontSize: "0.7rem",
                                        fontWeight: 600,
                                        letterSpacing: "0.06em",
                                        textTransform: "uppercase",
                                        marginBottom: "0.625rem",
                                    }}
                                >
                                    {member.role}
                                </div>
                                <h3
                                    style={{
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        fontWeight: 700,
                                        fontSize: "1.0625rem",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    {member.name}
                                </h3>
                                <p style={{ color: "#71717a", fontSize: "0.8375rem", lineHeight: 1.6 }}>
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
