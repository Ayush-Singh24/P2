import { TechIcon } from "@/utils/types";
import { useState } from "react";

export default function Tech({ icon, name, hoverText }: TechIcon) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      className="flex flex-col items-center gap-2 border border-grey px-2 py-3 rounded-xl group hover:bg-muted/40"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {hoverText && showTooltip && (
        <div
          className="fixed border border-white/10 bg-background z-10 px-4 py-2 rounded shadow-lg text-xs"
          style={{
            left: `${position.x + 10}px`,
            top: `${position.y + 10}px`,
            pointerEvents: "none",
          }}
        >
          {hoverText}
        </div>
      )}
      <img
        src={`icons/${icon}`}
        className="size-8 filter grayscale group-hover:grayscale-0 group-hover:-translate-y-1 transition-all"
      />
      <span className="text-xs text-white/70 group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}
