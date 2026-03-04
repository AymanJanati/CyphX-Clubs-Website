/**
 * PlaceholderImage Component
 * -----------------------------------------------------------
 * Renders a styled placeholder div wherever an image is needed.
 * Replace `src` prop usage in parent components with a real <img>
 * or Next.js <Image> tag once real assets are available.
 *
 * Props:
 *  - width / height: CSS size strings (default "100%" / "100%")
 *  - label: Text shown inside the placeholder
 *  - style: Additional inline styles
 *  - className: Additional Tailwind / CSS classes
 */

interface PlaceholderImageProps {
    width?: string;
    height?: string;
    label?: string;
    style?: React.CSSProperties;
    className?: string;
    borderRadius?: string;
}

export default function PlaceholderImage({
    width = "100%",
    height = "100%",
    label = "Image",
    style,
    className,
    borderRadius = "0px",
}: PlaceholderImageProps) {
    return (
        <div
            className={className}
            style={{
                width,
                height,
                borderRadius,
                background: "linear-gradient(135deg, #18181b 0%, #27272a 50%, #1c1c1f 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#52525b",
                gap: "0.5rem",
                overflow: "hidden",
                position: "relative",
                ...style,
            }}
        >
            {/* Grid pattern */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
            {/* Icon */}
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ position: "relative", zIndex: 1 }}
            >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
            </svg>
            {/* Label */}
            <span
                style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {label}
            </span>
        </div>
    );
}
