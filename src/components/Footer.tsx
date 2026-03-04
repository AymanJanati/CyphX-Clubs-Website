"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/data";

const footerLinks = [
    {
        title: "Pages",
        links: [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Events", href: "/events" },
            { label: "Internship", href: "/internship" },
            { label: "Join Us", href: "/join" },
            { label: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Programs",
        links: [
            { label: "SkillTakeAway", href: "/events" },
            { label: "Next Talk", href: "/events" },
            { label: "Leet's Code", href: "/events" },
            { label: "CodeRush", href: "/events" },
            { label: "Cypher Camp", href: "/events" },
        ],
    },
    {
        title: "Community",
        links: [
            { label: "WhatsApp Community", href: siteConfig.whatsapp },
            { label: "Discord Server", href: siteConfig.discord },
            { label: "Instagram", href: siteConfig.instagram },
            { label: "LinkedIn", href: siteConfig.linkedin },
        ],
    },
];

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid #27272a",
                backgroundColor: "#09090b",
                padding: "4rem 1.5rem 2rem",
            }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                {/* Top row */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                        gap: "3rem",
                        marginBottom: "3rem",
                    }}
                >
                    {/* Brand */}
                    <div style={{ gridColumn: "span 1" }}>
                        <Link
                            href="/"
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: 800,
                                fontSize: "1.375rem",
                                color: "#fafafa",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                letterSpacing: "-0.03em",
                                marginBottom: "1rem",
                            }}
                        >
                            <span
                                style={{
                                    display: "inline-block",
                                    width: "30px",
                                    height: "30px",
                                    background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                                    borderRadius: "7px",
                                    flexShrink: 0,
                                }}
                            />
                            Cyph<span style={{ color: "#818cf8" }}>X</span>
                        </Link>
                        <p style={{ color: "#71717a", fontSize: "0.875rem", lineHeight: "1.6", marginBottom: "0.75rem" }}>
                            Empowering Innovation Through Competition. Student-led, EST Beni Mellal.
                        </p>
                        <p style={{ color: "#52525b", fontSize: "0.8rem", lineHeight: "1.6", marginBottom: "1.25rem" }}>
                            Operated by{" "}
                            <span style={{ color: "#818cf8", fontWeight: 600 }}>CyphX</span>
                            {" "}&mdash; software development &amp; IT consulting.
                        </p>
                        {/* Social icons — replace hrefs with real links */}
                        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                            {[
                                { label: "IG", href: siteConfig.instagram },
                                { label: "LI", href: siteConfig.linkedin },
                                { label: "WA", href: siteConfig.whatsapp },
                                { label: "DC", href: siteConfig.discord },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "8px",
                                        background: "#18181b",
                                        border: "1px solid #27272a",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#71717a",
                                        fontSize: "0.6875rem",
                                        fontWeight: 700,
                                        textDecoration: "none",
                                        transition: "border-color 0.2s, color 0.2s",
                                        letterSpacing: "0.02em",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#6366f1";
                                        (e.currentTarget as HTMLElement).style.color = "#818cf8";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#27272a";
                                        (e.currentTarget as HTMLElement).style.color = "#71717a";
                                    }}
                                >
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav groups */}
                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <h4
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontWeight: 700,
                                    fontSize: "0.875rem",
                                    color: "#fafafa",
                                    marginBottom: "1rem",
                                    letterSpacing: "0.04em",
                                    textTransform: "uppercase",
                                }}
                            >
                                {group.title}
                            </h4>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            style={{
                                                color: "#71717a",
                                                fontSize: "0.875rem",
                                                textDecoration: "none",
                                                transition: "color 0.2s",
                                            }}
                                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#a1a1aa")}
                                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#71717a")}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        borderTop: "1px solid #27272a",
                        paddingTop: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <p style={{ color: "#52525b", fontSize: "0.8125rem" }}>
                        © {new Date().getFullYear()} CyphX Clubs — EST Beni Mellal. All rights reserved.
                    </p>
                    <p style={{ color: "#52525b", fontSize: "0.8125rem" }}>
                        A <span style={{ color: "#71717a" }}>CyphX</span> initiative &mdash; built by students, driven by ambition.
                    </p>
                </div>
            </div>
        </footer>
    );
}
