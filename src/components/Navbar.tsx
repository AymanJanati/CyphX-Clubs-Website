"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/internship", label: "Internship" },
    { href: "/join", label: "Join Us" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                transition: "all 0.3s ease",
                background: scrolled
                    ? "rgba(9, 9, 11, 0.92)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid #27272a" : "1px solid transparent",
            }}
        >
            <nav
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    padding: "0 1.5rem",
                    height: "68px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <Link
                    href="/"
                    style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.25rem",
                        color: "#fafafa",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        letterSpacing: "-0.03em",
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/logo.png"
                        alt="CyphX Clubs Logo"
                        style={{ width: "32px", height: "32px", objectFit: "contain", borderRadius: "6px" }}
                    />
                    <span>CyphX <span style={{ color: "#818cf8" }}>Clubs</span></span>
                </Link>

                {/* Desktop Links */}
                <div
                    style={{
                        display: "flex",
                        gap: "0.25rem",
                        alignItems: "center",
                    }}
                    className="hidden md:flex"
                >
                    {navLinks.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    padding: "0.5rem 0.875rem",
                                    borderRadius: "8px",
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    color: active ? "#818cf8" : "#a1a1aa",
                                    textDecoration: "none",
                                    transition: "color 0.2s, background 0.2s",
                                    background: active ? "rgba(99,102,241,0.08)" : "transparent",
                                    border: active ? "1px solid rgba(99,102,241,0.2)" : "1px solid transparent",
                                }}
                                onMouseEnter={(e) => {
                                    if (!active) (e.currentTarget as HTMLElement).style.color = "#fafafa";
                                }}
                                onMouseLeave={(e) => {
                                    if (!active) (e.currentTarget as HTMLElement).style.color = "#a1a1aa";
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/join"
                        style={{
                            marginLeft: "0.5rem",
                            padding: "0.5rem 1.125rem",
                            borderRadius: "8px",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            color: "#fff",
                            textDecoration: "none",
                            background: "linear-gradient(135deg, #6366f1, #818cf8)",
                            transition: "opacity 0.2s, transform 0.2s",
                            display: "inline-block",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.opacity = "0.85";
                            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.opacity = "1";
                            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        }}
                    >
                        Get Involved
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden"
                    style={{
                        background: "none",
                        border: "none",
                        color: "#a1a1aa",
                        cursor: "pointer",
                        padding: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                    }}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    style={{
                        background: "rgba(9, 9, 11, 0.98)",
                        backdropFilter: "blur(20px)",
                        borderTop: "1px solid #27272a",
                        padding: "1rem 1.5rem 1.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.375rem",
                    }}
                    className="md:hidden"
                >
                    {navLinks.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    padding: "0.75rem 1rem",
                                    borderRadius: "10px",
                                    fontSize: "0.9375rem",
                                    fontWeight: 500,
                                    color: active ? "#818cf8" : "#a1a1aa",
                                    textDecoration: "none",
                                    background: active ? "rgba(99,102,241,0.08)" : "transparent",
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/join"
                        style={{
                            marginTop: "0.5rem",
                            padding: "0.875rem 1rem",
                            borderRadius: "10px",
                            fontSize: "0.9375rem",
                            fontWeight: 600,
                            color: "#fff",
                            textDecoration: "none",
                            background: "linear-gradient(135deg, #6366f1, #818cf8)",
                            textAlign: "center",
                        }}
                    >
                        Get Involved
                    </Link>
                </div>
            )}
        </header>
    );
}
