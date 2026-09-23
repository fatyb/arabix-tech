import type { ComponentPropsWithoutRef, ElementType } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "outline-light" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-graphite hover:bg-white border border-gold hover:border-white",
  secondary:
    "bg-navy text-white hover:bg-navy-mid border border-navy hover:border-navy-mid",
  "outline-light":
    "bg-transparent text-white border border-white/60 hover:border-white hover:bg-white/10",
  ghost:
    "bg-transparent text-navy border border-navy/30 hover:border-navy hover:bg-navy/5",
};

const baseClasses =
  "btn-label focus-ring inline-flex items-center justify-center gap-2 px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide transition-colors duration-150";

interface ButtonOwnProps {
  variant?: Variant;
  href?: string;
  className?: string;
}

type ButtonProps<T extends ElementType = "button"> = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps>;

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
