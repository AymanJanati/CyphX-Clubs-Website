"use client";

import { upcomingEvents, pastEvents, type Event } from "@/lib/data";
import PlaceholderImage from "@/components/PlaceholderImage";
import { Trophy } from "lucide-react";

const typeBadgeStyle: Record<string, { bg: string; color: string; border: string }> = {
    Workshop: { bg: "rgba(16,185,129,0.1)", color: "#10b981", border: "rgba(16,185,129,0.25)" },
    Competition: { bg: "rgba(239,68,68,0.1)", color: "#f87171", border: "rgba(239,68,68,0.25)" },
    Talk: { bg: "rgba(99,102,241,0.1)", color: "#818cf8", border: "rgba(99,102,241,0.25)" },
    Camp: { bg: "rgba(245,158,11,0.1)", color: "#fbbf24", border: "rgba(245,158,11,0.25)" },
};

function TypeBadge({ type }: { type: string }) {
    const style = typeBadgeStyle[type] ?? typeBadgeStyle.Talk;
    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.2rem 0.7rem",
                borderRadius: "9999px",
                background: style.bg,
                color: style.color,
                border: `1px solid ${style.border}`,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
            }}
        >
            {type}
        </span>
    );
}

function UpcomingEventCard({ event }: { event: Event }) {
    return (
        <div
            style={{
                background: "#111113",
                border: "1px solid #27272a",
                borderRadius: "20px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#6366f1";
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 20px 60px rgba(99,102,241,0.1)";
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#27272a";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
            }}
        >
            {/* Image slot */}
            <div style={{ height: "200px", position: "relative", flexShrink: 0 }}>
                {event.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={event.image} alt={event.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                    <PlaceholderImage height="200px" label={event.name} />
                )}
                {/* Date pill */}
                <div
                    style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        background: "rgba(9,9,11,0.85)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "8px",
                        padding: "0.375rem 0.75rem",
                        color: "#fafafa",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        border: "1px solid #3f3f46",
                    }}
                >
                    {event.date}
                </div>
                {/* Upcoming indicator */}
                <div
                    style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        background: "rgba(9,9,11,0.85)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "8px",
                        padding: "0.375rem 0.75rem",
                        color: "#4ade80",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        border: "1px solid rgba(74,222,128,0.2)",
                    }}
                >
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                    UPCOMING
                </div>
            </div>

            {/* Body */}
            <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <TypeBadge type={event.type} />
                <h3
                    style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.0625rem",
                        margin: "0.75rem 0 0.625rem",
                        lineHeight: 1.3,
                    }}
                >
                    {event.name}
                </h3>
                <p style={{ color: "#71717a", fontSize: "0.875rem", lineHeight: 1.7, flex: 1 }}>
                    {event.description}
                </p>

                {/* Registration Button */}
                <div style={{ marginTop: "1.25rem" }}>
                    {event.registrationOpen && event.registrationUrl ? (
                        <a
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "block",
                                width: "100%",
                                textAlign: "center",
                                padding: "0.75rem",
                                borderRadius: "8px",
                                background: "linear-gradient(135deg, #6366f1, #818cf8)",
                                color: "#fff",
                                fontWeight: 600,
                                fontSize: "0.875rem",
                                textDecoration: "none",
                                transition: "opacity 0.2s, transform 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.opacity = "0.9";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.opacity = "1";
                                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                            }}
                        >
                            Register Now
                        </a>
                    ) : (
                        <div
                            style={{
                                display: "block",
                                width: "100%",
                                textAlign: "center",
                                padding: "0.75rem",
                                borderRadius: "8px",
                                background: "#27272a",
                                color: "#71717a",
                                fontWeight: 600,
                                fontSize: "0.875rem",
                                cursor: "not-allowed",
                            }}
                        >
                            Registrations Closed
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function PastEventCard({ event }: { event: Event }) {
    /**
     * Ranking button logic:
     * - Only shown if event.type === "Competition" AND event.rankingAvailable === true
     * - rankingAvailable is a boolean set per event in /src/lib/data.ts
     */
    const showRanking = event.type === "Competition" && event.rankingAvailable === true;

    return (
        <div
            style={{
                background: "#0f0f11",
                border: "1px solid #1e1e20",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                gap: 0,
                transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#27272a")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1e1e20")}
        >
            {/* Image (left band) */}
            <div style={{ width: "140px", flexShrink: 0, position: "relative" }}>
                {event.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={event.image} alt={event.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                    <PlaceholderImage width="140px" height="100%" label="Event" />
                )}
            </div>

            {/* Body */}
            <div style={{ padding: "1.25rem 1.5rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap", marginBottom: "0.625rem" }}>
                        <TypeBadge type={event.type} />
                        <span style={{ color: "#52525b", fontSize: "0.75rem" }}>{event.date}</span>
                    </div>
                    <h3
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                            marginBottom: "0.5rem",
                        }}
                    >
                        {event.name}
                    </h3>
                    <p style={{ color: "#71717a", fontSize: "0.8375rem", lineHeight: 1.6 }}>
                        {event.description}
                    </p>
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem", flexWrap: "wrap" }}>
                    <a
                        href={event.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            padding: "0.45rem 1rem",
                            borderRadius: "8px",
                            background: "rgba(99,102,241,0.06)",
                            border: "1px solid rgba(99,102,241,0.15)",
                            color: "#818cf8",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            textDecoration: "none",
                            transition: "background 0.2s",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.12)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.06)")}
                    >
                        <IgIcon /> View on Instagram
                    </a>

                    {/* ── RANKING BUTTON — controlled by rankingAvailable boolean ── */}
                    {showRanking && (
                        <a
                            href={event.rankingUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                padding: "0.45rem 1rem",
                                borderRadius: "8px",
                                background: "rgba(245,158,11,0.08)",
                                border: "1px solid rgba(245,158,11,0.2)",
                                color: "#fbbf24",
                                fontSize: "0.8rem",
                                fontWeight: 600,
                                textDecoration: "none",
                                transition: "background 0.2s",
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.14)")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.08)")}
                        >
                            <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                <Trophy size={14} color="#fbbf24" style={{ marginTop: "-2px" }} /> View Ranking
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

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

export default function EventsPage() {
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
                <SectionLabel>Events</SectionLabel>
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
                    Where Skills Are{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Forged
                    </span>
                </h1>
                <p style={{ color: "#a1a1aa", maxWidth: "540px", margin: "0 auto", lineHeight: 1.7 }}>
                    From workshops to bootcamps, every CyphX event is a deliberate step in building competitive technical profiles.
                </p>
            </section>

            {/* ── UPCOMING EVENTS ── */}
            <section style={{ padding: "4rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ marginBottom: "2rem" }}>
                    <SectionLabel>Upcoming</SectionLabel>
                    <h2
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: "clamp(1.5rem, 3vw, 2rem)",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        What&apos;s Next
                    </h2>
                </div>

                {upcomingEvents.length === 0 ? (
                    <div
                        style={{
                            background: "#111113",
                            border: "1px solid #27272a",
                            borderRadius: "16px",
                            padding: "3rem",
                            textAlign: "center",
                            color: "#52525b",
                        }}
                    >
                        No upcoming events scheduled yet. Follow our Instagram for announcements.
                    </div>
                ) : (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {upcomingEvents.map((event) => (
                            <UpcomingEventCard key={event.id} event={event} />
                        ))}
                    </div>
                )}
            </section>

            {/* ── PAST EVENTS ── */}
            <section
                style={{
                    padding: "4rem 1.5rem 6rem",
                    maxWidth: "1280px",
                    margin: "0 auto",
                }}
            >
                <div style={{ marginBottom: "2rem" }}>
                    <SectionLabel>Past Events</SectionLabel>
                    <h2
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: "clamp(1.5rem, 3vw, 2rem)",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        What We&apos;ve Built
                    </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {pastEvents.map((event) => (
                        <PastEventCard key={event.id} event={event} />
                    ))}
                </div>
            </section>
        </>
    );
}

function IgIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
    );
}
