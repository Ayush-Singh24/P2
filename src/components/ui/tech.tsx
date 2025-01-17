import { TechIcon } from "@/utils/types";

export default function Tech({ icon, name }: TechIcon) {
  return (
    <div className="flex flex-col items-center gap-2 border border-grey px-2 py-3 rounded-xl group hover:bg-muted/40">
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
