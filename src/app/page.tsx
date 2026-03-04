"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronRight, Zap, Users, Calendar, TrendingUp } from "lucide-react";
import { stats, pillars, siteConfig } from "@/lib/data";

// ---- Animated counter hook ----
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const pillarColors: Record<string, string> = {
  Workshop: "#10b981",
  Talk: "#6366f1",
  Challenge: "#f59e0b",
  Competition: "#ef4444",
  Camp: "#f59e0b",
};

const flowSteps = [
  { label: "Events", sub: "Workshops & Talks", icon: <Calendar size={20} /> },
  { label: "Competitions", sub: "CodeRush & AlgoRush", icon: <Zap size={20} /> },
  { label: "Cypher Camp", sub: "Annual Bootcamp", icon: <TrendingUp size={20} /> },
  { label: "Internship Exposure", sub: "Merit-Based Access", icon: <Users size={20} /> },
];

export default function HomePage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ────────────────── HERO ────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.15) 0%, transparent 70%), #09090b",
          paddingTop: "68px",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
          }}
        />
        {/* Glowing orb */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "60%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.375rem 0.875rem",
              borderRadius: "9999px",
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.2)",
              color: "#818cf8",
              fontSize: "0.8125rem",
              fontWeight: 600,
              marginBottom: "2rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#818cf8", display: "inline-block", animation: "pulse 2s infinite" }} />
            EST Beni Mellal · Student Tech Club
          </div>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "820px",
              marginBottom: "1.5rem",
            }}
          >
            Empowering Innovation
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 50%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Through Competition
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1875rem)",
              color: "#a1a1aa",
              maxWidth: "580px",
              marginBottom: "2.5rem",
              lineHeight: 1.7,
            }}
          >
            A student-led tech initiative at EST Beni Mellal building competitive profiles
            through events, challenges, and immersive learning experiences.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                padding: "0.875rem 1.75rem",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #6366f1, #818cf8)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "opacity 0.2s, transform 0.2s",
                boxShadow: "0 4px 24px rgba(99,102,241,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.9";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Contact Us <ArrowRight size={16} />
            </Link>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.875rem 1.75rem",
                borderRadius: "10px",
                background: "rgba(37,211,102,0.08)",
                border: "1px solid rgba(37,211,102,0.25)",
                color: "#4ade80",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
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
              <WaIcon /> WhatsApp Community
            </a>
            <a
              href={siteConfig.discord}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.875rem 1.75rem",
                borderRadius: "10px",
                background: "rgba(99,102,241,0.06)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "#818cf8",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.12)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.06)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <DcIcon /> Discord Community
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              marginTop: "5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              color: "#52525b",
              fontSize: "0.8125rem",
              fontWeight: 500,
            }}
          >
            <div
              style={{
                width: "1px",
                height: "40px",
                background: "linear-gradient(to bottom, transparent, #52525b)",
                animation: "bounce 2s infinite",
              }}
            />
            Scroll to explore
          </div>
        </div>
      </section>

      {/* ────────────────── MISSION ────────────────── */}
      <section style={{ padding: "6rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div>
            <SectionLabel>Our Mission</SectionLabel>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              Closing the Gap Between
              <span
                style={{
                  background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}Regions & Standards
              </span>
            </h2>
            <p style={{ color: "#a1a1aa", lineHeight: 1.8, marginBottom: "1rem" }}>
              CyphX Clubs was founded by students of EST Beni Mellal who believed the region needed
              stronger student initiative to compete with the tech standards seen in cities like
              Casablanca and Rabat.
            </p>
            <p style={{ color: "#a1a1aa", lineHeight: 1.8, marginBottom: "1rem" }}>
              Our mission is to <strong style={{ color: "#fafafa" }}>elevate the regional tech ecosystem</strong> and
              help students build competitive technical profiles — through structured events, real
              challenges, and industry exposure that matters.
            </p>
            <p style={{ color: "#71717a", lineHeight: 1.8, fontSize: "0.875rem", borderLeft: "2px solid #27272a", paddingLeft: "1rem" }}>
              CyphX Clubs is operated by{" "}
              <strong style={{ color: "#a1a1aa" }}>CyphX</strong> — a software development team
              specializing in custom client software, SaaS products, and IT consulting.
              The club is our community initiative; our work extends far beyond it.
            </p>
          </div>
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
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #6366f1, #a78bfa, #38bdf8)",
              }}
            />
            {[
              { icon: "🎯", text: "Structured competitive growth path" },
              { icon: "🏆", text: "Real rankings, real recognition" },
              { icon: "🌍", text: "National-level technical standards" },
              { icon: "💼", text: "Merit-based internship exposure" },
              { icon: "🤝", text: "Industry and company connections" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.875rem 0",
                  borderBottom: i < 4 ? "1px solid #27272a" : "none",
                }}
              >
                <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                <span style={{ color: "#d4d4d8", fontSize: "0.9375rem", fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── WHAT WE DO ────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "rgba(17,17,19,0.5)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <SectionLabel>What We Do</SectionLabel>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              The Pillars of Excellence
            </h2>
            <p style={{ color: "#a1a1aa", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              Every pillar is designed to build a different dimension of your profile. Together, they form a complete competitive trajectory.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            {pillars.map((p, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = pillarColors[p.type] || "#6366f1";
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = `0 20px 60px ${pillarColors[p.type]}22`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#27272a";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Logo or emoji icon */}
                <div style={{ marginBottom: "1rem" }}>
                  {p.logo ? (
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "12px",
                        background: "#18181b",
                        border: "1px solid #27272a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        padding: "6px",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.logo}
                        alt={p.name}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    </div>
                  ) : (
                    <span style={{ fontSize: "2rem" }}>{p.icon}</span>
                  )}
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span
                    className="badge"
                    style={{
                      background: `${pillarColors[p.type]}18`,
                      color: pillarColors[p.type],
                      border: `1px solid ${pillarColors[p.type]}30`,
                    }}
                  >
                    {p.type}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    marginBottom: "0.75rem",
                    marginTop: "0.75rem",
                  }}
                >
                  {p.name}
                </h3>
                <p style={{ color: "#71717a", fontSize: "0.875rem", lineHeight: 1.7 }}>{p.description}</p>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              color: "#6366f1",
              fontWeight: 600,
              fontSize: "0.9375rem",
              fontStyle: "italic",
              letterSpacing: "0.01em",
            }}
          >
            Participation is open. Performance creates opportunity.
          </p>
        </div>
      </section>

      {/* ────────────────── OUR APPROACH (FLOW) ────────────────── */}
      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <SectionLabel>Our Approach</SectionLabel>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              A Deliberate Growth Path
            </h2>
          </div>

          {/* Flow steps */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0",
              overflowX: "auto",
              paddingBottom: "1rem",
            }}
          >
            {flowSteps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flex: 1,
                  minWidth: "180px",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {/* Circle */}
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: i === flowSteps.length - 1
                        ? "linear-gradient(135deg, #6366f1, #a78bfa)"
                        : "#18181b",
                      border: `2px solid ${i === flowSteps.length - 1 ? "#6366f1" : "#27272a"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: i === flowSteps.length - 1 ? "#fff" : "#6366f1",
                      marginBottom: "1rem",
                      position: "relative",
                      zIndex: 1,
                      boxShadow: i === flowSteps.length - 1
                        ? "0 0 30px rgba(99,102,241,0.4)"
                        : "none",
                    }}
                  >
                    {step.icon}
                    <span
                      style={{
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "#6366f1",
                        color: "#fff",
                        fontSize: "0.625rem",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <h4
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {step.label}
                  </h4>
                  <p style={{ color: "#71717a", fontSize: "0.8rem" }}>{step.sub}</p>
                </div>
                {/* Connector arrow */}
                {i < flowSteps.length - 1 && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#27272a",
                      paddingBottom: "2.5rem",
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ height: "2px", width: "40px", background: "linear-gradient(90deg, #27272a, #6366f1)" }} />
                    <ChevronRight size={16} color="#6366f1" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── IMPACT STATS ────────────────── */}
      <section
        ref={statsRef}
        style={{
          padding: "6rem 1.5rem",
          background: "linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(9,9,11,0) 100%), #09090b",
          borderTop: "1px solid #27272a",
          borderBottom: "1px solid #27272a",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <SectionLabel>Impact</SectionLabel>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Numbers That Speak
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "#111113",
                  border: "1px solid #27272a",
                  borderRadius: "16px",
                  padding: "2rem",
                  textAlign: "center",
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
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ color: "#a1a1aa", fontSize: "0.9rem", fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── CTA BAND ────────────────── */}
      <section style={{ padding: "6rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            background: "linear-gradient(135deg, #111113, #18181b)",
            border: "1px solid #27272a",
            borderRadius: "24px",
            padding: "4rem 2rem",
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
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            Ready to Build Your Competitive Profile?
          </h2>
          <p style={{ color: "#a1a1aa", marginBottom: "2rem", lineHeight: 1.7 }}>
            Join CyphX Clubs. Attend events, compete, grow — and earn your place in the internship pipeline through merit.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/join"
              style={{
                padding: "0.875rem 2rem",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #6366f1, #818cf8)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 4px 24px rgba(99,102,241,0.3)",
              }}
            >
              Join CyphX Clubs <ArrowRight size={16} />
            </Link>
            <Link
              href="/events"
              style={{
                padding: "0.875rem 2rem",
                borderRadius: "10px",
                background: "transparent",
                border: "1px solid #3f3f46",
                color: "#a1a1aa",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
              }}
            >
              View Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ---- Reusable sub-components ----
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
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
