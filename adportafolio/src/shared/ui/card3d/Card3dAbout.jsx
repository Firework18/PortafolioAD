import React from "react";

export default function Card3dHover({ title, body, color = "primary", icon }) {
  const colorMap = {
    primary: "border-celeste/30 text-celeste bg-celeste/10",
    secondary: "border-indigo-tech/40 text-indigo-tech bg-indigo-tech/10",
    accent: "border-ambar/40 text-ambar bg-ambar/10",
  };

  const badgeColor = colorMap[color] || colorMap.primary;

  return (
    <div className="w-full">
      <div className="hover-3d h-full w-full">
        <div className="card bg-carbon-claro/85 border border-carbon-borde hover:border-celeste/50 transition-all duration-300 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm h-full flex flex-col justify-between">
          <figure className="px-6 pt-6"></figure>

          <div className="card-body p-6 text-center flex flex-col items-center flex-grow">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border ${badgeColor}`}
            >
              {icon && <i className={`${icon} text-sm`} />}
              <span className="font-semibold">{title}</span>
            </span>

            <p className="mt-3 text-sm text-arena-muted leading-relaxed font-sans">
              {body}
            </p>
          </div>
        </div>

        {/* 8 empty divs needed for daisyUI hover-3d effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
