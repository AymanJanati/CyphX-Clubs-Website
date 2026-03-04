"use client";

import { evaluationCriteria } from "@/lib/data";

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

export default function InternshipPage() {
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
                <SectionLabel>Internship Program</SectionLabel>
                <h1
                    style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: "clamp(2rem, 5vw, 3.5rem)",
                        letterSpacing: "-0.03em",
                        maxWidth: "720px",
                        margin: "0 auto 1.25rem",
                        lineHeight: 1.15,
                    }}
                >
                    Internship Exposure Is{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Earned
                    </span>
                    , Not Given
                </h1>
                <p style={{ color: "#a1a1aa", maxWidth: "580px", margin: "0 auto", lineHeight: 1.7, fontSize: "1.0625rem" }}>
                    There is no automatic access. Performance and engagement within CyphX programs are what determine your internship exposure opportunities.
                </p>

                {/* Alert banner */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginTop: "2rem",
                        padding: "0.875rem 1.5rem",
                        background: "rgba(245,158,11,0.08)",
                        border: "1px solid rgba(245,158,11,0.25)",
                        borderRadius: "12px",
                        color: "#fbbf24",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                    }}
                >
                    <span style={{ fontSize: "1.25rem" }}>⚡</span>
                    Merit-based. Structured. Transparent.
                </div>
            </section>

            {/* ── WHAT IS INTERNSHIP EXPOSURE ── */}
            <section style={{ padding: "5rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "3rem",
                        alignItems: "start",
                    }}
                >
                    <div>
                        <SectionLabel>What Is It?</SectionLabel>
                        <h2
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 800,
                                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                                letterSpacing: "-0.03em",
                                marginBottom: "1.25rem",
                            }}
                        >
                            Internship Exposure, Defined
                        </h2>
                        <p style={{ color: "#a1a1aa", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                            CyphX Clubs builds relationships with companies and professionals who are open to hosting or connecting
                            with technically capable students. <strong style={{ color: "#fafafa" }}>Internship exposure</strong>{" "}
                            refers to being included in these referral and introduction pipelines.
                        </p>
                        <p style={{ color: "#a1a1aa", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                            This is not a guaranteed placement. It is a structured opportunity made available to students
                            who have demonstrated commitment, performance, and technical growth through CyphX Clubs programs.
                        </p>
                        <p style={{ color: "#a1a1aa", lineHeight: 1.8 }}>
                            The more you invest in the club&apos;s programs, the stronger your exposure profile becomes —
                            and the more visible you are to partner companies.
                        </p>
                    </div>

                    {/* Key principle box */}
                    <div
                        style={{
                            background: "linear-gradient(135deg, #111113, #18181b)",
                            border: "1px solid #27272a",
                            borderRadius: "20px",
                            padding: "2rem",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: 0, left: 0, right: 0, height: "3px",
                                background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                            }}
                        />
                        <h3
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 700,
                                fontSize: "1.0625rem",
                                marginBottom: "1.5rem",
                                color: "#fbbf24",
                            }}
                        >
                            Core Principle
                        </h3>
                        {[
                            "Internship exposure is based on overall involvement in CyphX Clubs.",
                            "Priority is given to those who demonstrate the highest level of engagement and performance.",
                            "No tracks. No cohorts. Your record speaks for you.",
                            "Evaluation is continuous — not one-time.",
                        ].map((point, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    gap: "0.75rem",
                                    padding: "0.875rem 0",
                                    borderBottom: i < 3 ? "1px solid #27272a" : "none",
                                }}
                            >
                                <span style={{ color: "#f59e0b", marginTop: "2px", flexShrink: 0 }}>✓</span>
                                <p style={{ color: "#d4d4d8", fontSize: "0.9rem", lineHeight: 1.6 }}>{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW SELECTION WORKS ── */}
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
                        <SectionLabel>How It Works</SectionLabel>
                        <h2
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 800,
                                fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
                                letterSpacing: "-0.03em",
                            }}
                        >
                            The Selection Process
                        </h2>
                        <p style={{ color: "#a1a1aa", maxWidth: "560px", margin: "0.75rem auto 0", lineHeight: 1.7 }}>
                            Selection is not arbitrary. It follows a clear, weighted system based on your activity across CyphX programs.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                            maxWidth: "800px",
                            margin: "0 auto",
                        }}
                    >
                        {[
                            {
                                step: "01",
                                title: "Ongoing Activity Tracking",
                                desc: "Your participation across all CyphX events — workshops, talks, competitions, and Cypher Camp — is tracked cumulatively over time.",
                            },
                            {
                                step: "02",
                                title: "Weighted Evaluation",
                                desc: "Not all activities carry equal weight. Higher-commitment programs like Cypher Camp contribute more to your exposure profile than a single workshop session.",
                            },
                            {
                                step: "03",
                                title: "Profile Review",
                                desc: "When internship opportunities arise, the CyphX Clubs leadership reviews member profiles based on the evaluation criteria and selects candidates for introduction to partner companies.",
                            },
                            {
                                step: "04",
                                title: "Introduction & Handoff",
                                desc: "Selected members are introduced to the relevant company contact. The rest depends on the student's professionalism — CyphX Clubs opens the door; you walk through it.",
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                style={{
                                    display: "flex",
                                    gap: "1.5rem",
                                    alignItems: "flex-start",
                                    background: "#111113",
                                    border: "1px solid #1e1e20",
                                    borderRadius: "16px",
                                    padding: "1.5rem 1.75rem",
                                    transition: "border-color 0.3s",
                                }}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#27272a")}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1e1e20")}
                            >
                                <div
                                    style={{
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        fontWeight: 800,
                                        fontSize: "1.5rem",
                                        color: "#27272a",
                                        letterSpacing: "-0.04em",
                                        flexShrink: 0,
                                        lineHeight: 1,
                                        paddingTop: "0.125rem",
                                    }}
                                >
                                    {item.step}
                                </div>
                                <div>
                                    <h3
                                        style={{
                                            fontFamily: "'Space Grotesk', sans-serif",
                                            fontWeight: 700,
                                            fontSize: "1.0625rem",
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p style={{ color: "#71717a", fontSize: "0.9rem", lineHeight: 1.7 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EVALUATION CRITERIA ── */}
            <section style={{ padding: "5rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <SectionLabel>Evaluation Criteria</SectionLabel>
                    <h2
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        What Gets Weighted
                    </h2>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {evaluationCriteria.map((criterion, i) => (
                        <div
                            key={i}
                            style={{
                                background: "#111113",
                                border: "1px solid #27272a",
                                borderRadius: "20px",
                                padding: "2rem",
                                position: "relative",
                                overflow: "hidden",
                                transition: "transform 0.3s, box-shadow 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${criterion.color}18`;
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                            }}
                        >
                            {/* Top accent bar */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0, left: 0, right: 0, height: "3px",
                                    background: criterion.color,
                                }}
                            />
                            {/* Rank badge */}
                            <div
                                style={{
                                    display: "inline-flex",
                                    padding: "0.3rem 0.75rem",
                                    borderRadius: "9999px",
                                    background: `${criterion.color}15`,
                                    border: `1px solid ${criterion.color}30`,
                                    color: criterion.color,
                                    fontSize: "0.7rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                    marginBottom: "1.25rem",
                                    marginTop: "0.75rem",
                                }}
                            >
                                {criterion.weight}
                            </div>
                            <h3
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontWeight: 700,
                                    fontSize: "1.125rem",
                                    marginBottom: "0.875rem",
                                }}
                            >
                                {criterion.label}
                            </h3>
                            <p style={{ color: "#71717a", fontSize: "0.875rem", lineHeight: 1.7 }}>
                                {criterion.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── TRANSPARENCY ── */}
            <section
                style={{
                    padding: "5rem 1.5rem",
                    borderTop: "1px solid #27272a",
                    background: "rgba(17,17,19,0.4)",
                }}
            >
                <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
                    <SectionLabel>Transparency & Fairness</SectionLabel>
                    <h2
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                            letterSpacing: "-0.03em",
                            marginBottom: "1.5rem",
                        }}
                    >
                        Our Commitment to You
                    </h2>
                    <p style={{ color: "#a1a1aa", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                        CyphX Clubs operates on a principle of <strong style={{ color: "#fafafa" }}>merit, not favoritism</strong>. Every member has the same starting point. Your involvement, performance, and growth are what differentiate you — nothing else.
                    </p>
                    <p style={{ color: "#a1a1aa", lineHeight: 1.8, marginBottom: "2rem" }}>
                        We do not make promises about specific placements. What we promise is a structured, fair evaluation system and an honest pathway to opportunity — built on the record you create within CyphX Clubs.
                    </p>

                    {/* Commitment cards */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                            gap: "1rem",
                            textAlign: "left",
                        }}
                    >
                        {[
                            { icon: "⚖️", label: "Equal Starting Point" },
                            { icon: "📊", label: "Criteria-Based Evaluation" },
                            { icon: "🔒", label: "No Bias or Favoritism" },
                            { icon: "📣", label: "Open Communication" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    background: "#111113",
                                    border: "1px solid #27272a",
                                    borderRadius: "12px",
                                    padding: "1.25rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                }}
                            >
                                <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                                <span style={{ color: "#d4d4d8", fontSize: "0.875rem", fontWeight: 600 }}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
