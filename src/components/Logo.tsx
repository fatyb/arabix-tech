import { Link } from "@/i18n/navigation";

export function MosaicMark({ className }: { className?: string }) {
  const cells = [
    "bg-navy",
    "bg-navy-mid",
    "bg-navy-light",
    "bg-graphite-soft",
    "bg-graphite",
    "bg-gold",
  ];
  return (
    <span
      className={`grid grid-cols-3 grid-rows-2 gap-[2px] ${className ?? "h-6 w-9"}`}
      aria-hidden="true"
    >
      {cells.map((c, i) => (
        <span key={i} className={c} />
      ))}
    </span>
  );
}

export function Logo({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const wordColor = variant === "dark" ? "text-white" : "text-navy";
  return (
    <Link
      href="/"
      className={`focus-ring inline-flex items-center gap-3 group ${className ?? ""}`}
      aria-label="Arabix Tech, home"
    >
      <MosaicMark className="h-7 w-10 shrink-0" />
      <span className="flex items-center font-heading text-xl font-extrabold tracking-tight">
        <span className={wordColor}>ARABIX</span>
        <span className="ms-1 bg-graphite px-2 py-0.5 text-white">TECH</span>
      </span>
    </Link>
  );
}
