import React, { memo } from "react";

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#22d3ee", "#e8dcc4", "#0e7490", "#22d3ee"],
    speed = 1,
  }) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(120deg, ${colors.join(", ")})`,
      backgroundSize: "200% auto",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${12 / speed}s`,
      filter: "drop-shadow(0 0 12px rgba(34, 211, 238, 0.35))",
    };

    return (
      <span className={`whitespace-normal ${className}`}>
        <span
          className="aurora-text-anim bg-clip-text text-transparent"
          style={gradientStyle}
        >
          {children}
        </span>
      </span>
    );
  },
);

AuroraText.displayName = "AuroraText";
