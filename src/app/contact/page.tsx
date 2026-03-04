"use client";

import { siteConfig } from "@/lib/data";

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

const contactChannels = [
    {
        id: "email",
        icon: <EmailIcon />,
        label: "Official Email",
        value: siteConfig.email,
        href: `mailto:${siteConfig.email}`,
        description: "For formal inquiries, partnerships, and collaboration proposals.",
        color: "#6366f1",
        buttonLabel: "Send Email",
    },
    {
        id: "instagram",
        icon: <IgIcon />,
        label: "Instagram",
        value: "@cyphxclubs", // REPLACE with real handle
        href: siteConfig.instagram,
        description: "Follow for event announcements, highlights, and community updates.",
        color: "#e1306c",
        buttonLabel: "Follow Us",
    },
    {
        id: "linkedin",
        icon: <LiIcon />,
        label: "LinkedIn",
        value: "CyphX Clubs", // REPLACE with real display name
        href: siteConfig.linkedin,
        description: "Professional updates, achievements, and member highlights.",
        color: "#0077b5",
        buttonLabel: "Connect",
    },
    {
        id: "whatsapp",
        icon: <WaIcon />,
        label: "WhatsApp Community",
        value: "Join our community",
        href: siteConfig.whatsapp,
        description: "The main real-time channel for members. Events, reminders, and discussions.",
        color: "#25d366",
        buttonLabel: "Join Community",
    },
    {
        id: "discord",
        icon: <DcIcon />,
        label: "Discord Server",
        value: "CyphX Clubs Server",
        href: siteConfig.discord,
        description: "Channels for tech discussions, project sharing, and event coordination.",
        color: "#5865f2",
        buttonLabel: "Join Server",
    },
];

export default function ContactPage() {
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
                <SectionLabel>Contact</SectionLabel>
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
                    Let&apos;s Start a{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Conversation
                    </span>
                </h1>
                <p style={{ color: "#a1a1aa", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7, fontSize: "1.0625rem" }}>
                    Whether you&apos;re a student, a company, or just curious about what we do — reach us on any of the channels below.
                </p>

                {/* No form notice */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.625rem",
                        marginTop: "1.5rem",
                        padding: "0.625rem 1.25rem",
                        background: "rgba(99,102,241,0.06)",
                        border: "1px solid rgba(99,102,241,0.15)",
                        borderRadius: "9999px",
                        color: "#71717a",
                        fontSize: "0.8125rem",
                    }}
                >
                    <span style={{ color: "#818cf8" }}>ℹ</span>
                    No contact form — reach us directly through the channels below.
                </div>
            </section>

            {/* ── CONTACT CHANNELS ── */}
            <section style={{ padding: "3rem 1.5rem 6rem", maxWidth: "900px", margin: "0 auto" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {contactChannels.map((channel) => (
                        <div
                            key={channel.id}
                            style={{
                                background: "#111113",
                                border: "1px solid #27272a",
                                borderRadius: "20px",
                                padding: "1.75rem 2rem",
                                display: "flex",
                                gap: "1.5rem",
                                alignItems: "center",
                                flexWrap: "wrap",
                                transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = channel.color;
                                el.style.transform = "translateY(-3px)";
                                el.style.boxShadow = `0 16px 48px ${channel.color}14`;
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = "#27272a";
                                el.style.transform = "translateY(0)";
                                el.style.boxShadow = "none";
                            }}
                        >
                            {/* Icon */}
                            <div
                                style={{
                                    width: "52px",
                                    height: "52px",
                                    borderRadius: "14px",
                                    background: `${channel.color}14`,
                                    border: `1px solid ${channel.color}28`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: channel.color,
                                    flexShrink: 0,
                                }}
                            >
                                {channel.icon}
                            </div>

                            {/* Info */}
                            <div style={{ flex: 1, minWidth: "180px" }}>
                                <div
                                    style={{
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                        color: "#71717a",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.06em",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    {channel.label}
                                </div>
                                <div
                                    style={{
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        fontWeight: 700,
                                        fontSize: "1.0625rem",
                                        color: "#fafafa",
                                        marginBottom: "0.375rem",
                                    }}
                                >
                                    {channel.value}
                                </div>
                                <div style={{ color: "#71717a", fontSize: "0.8375rem", lineHeight: 1.6 }}>
                                    {channel.description}
                                </div>
                            </div>

                            {/* CTA */}
                            <a
                                href={channel.href}
                                target={channel.id === "email" ? "_self" : "_blank"}
                                rel={channel.id === "email" ? undefined : "noopener noreferrer"}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    padding: "0.625rem 1.25rem",
                                    borderRadius: "9px",
                                    background: `${channel.color}14`,
                                    border: `1px solid ${channel.color}30`,
                                    color: channel.color,
                                    fontSize: "0.875rem",
                                    fontWeight: 600,
                                    textDecoration: "none",
                                    whiteSpace: "nowrap",
                                    transition: "background 0.2s",
                                    flexShrink: 0,
                                }}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = `${channel.color}22`)}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = `${channel.color}14`)}
                            >
                                {channel.buttonLabel} →
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div
                    style={{
                        marginTop: "3rem",
                        padding: "1.5rem 2rem",
                        background: "#0f0f11",
                        border: "1px solid #1e1e20",
                        borderRadius: "16px",
                        textAlign: "center",
                    }}
                >
                    <p style={{ color: "#52525b", fontSize: "0.875rem", lineHeight: 1.7 }}>
                        For partnership and sponsorship inquiries, please email us directly at{" "}
                        <a
                            href={`mailto:${siteConfig.email}`}
                            style={{ color: "#818cf8", textDecoration: "none", fontWeight: 600 }}
                        >
                            {siteConfig.email}
                        </a>
                        {" "}with a brief description of your proposal.
                    </p>
                </div>
            </section>
        </>
    );
}

// ─── Icons ───────────────────────────────────────────────────

function EmailIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

function IgIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
    );
}

function LiIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function WaIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );
}

function DcIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.04.037.05a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
        </svg>
    );
}
