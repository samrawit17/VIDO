import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const toneStyles: Record<string, string> = {
  primary: "bg-primary text-primary-foreground",
  ink: "bg-ink text-primary-foreground",
  gold: "bg-gold text-gold-foreground",
};

type GraphicPanelProps = {
  icon?: LucideIcon;
  label?: string;
  sublabel?: string;
  tone?: keyof typeof toneStyles;
  className?: string;
};

export function GraphicPanel({ icon: Icon, label, sublabel, tone = "primary", className }: GraphicPanelProps) {
  return (
    <div
      role="img"
      aria-label={label ?? sublabel ?? "VIDO"}
      className={cn("relative overflow-hidden grain select-none", toneStyles[tone], className)}
    >
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gold/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-12 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[55%] aspect-square rounded-full border border-gold/25" />
        <div className="absolute w-[40%] aspect-square rounded-full border border-gold/15" />
        <div className="absolute w-[12%] aspect-square rounded-full bg-gold/60" />
      </div>

      {Icon && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <Icon className="w-14 h-14 md:w-16 md:h-16 text-gold opacity-90" strokeWidth={1.25} />
        </div>
      )}

      {(label || sublabel) && (
        <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-4">
          <div>
            {sublabel && (
              <div className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gold opacity-90">{sublabel}</div>
            )}
            {label && <div className="mt-0.5 font-display text-lg md:text-2xl leading-tight">{label}</div>}
          </div>
          <div className="w-8 h-[3px] bg-gold shrink-0 rounded-full" />
        </div>
      )}
    </div>
  );
}