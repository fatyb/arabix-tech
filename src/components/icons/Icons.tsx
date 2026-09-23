import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
};

export function DisplayIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="4" width="20" height="13" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

export function LedWallIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="3" width="9" height="7" />
      <rect x="13" y="3" width="9" height="7" />
      <rect x="2" y="14" width="9" height="7" />
      <rect x="13" y="14" width="9" height="7" />
    </svg>
  );
}

export function PixelPitchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="6" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="6" cy="18" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="18" r="1.4" fill="currentColor" stroke="none" />
      <path d="M6 6h12M6 6v12" strokeDasharray="2 2" />
    </svg>
  );
}

export function BrightnessIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  );
}

export function ResolutionIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="5" width="20" height="14" />
      <path d="M2 9h20M9 5v4" />
    </svg>
  );
}

export function OutdoorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="12" />
      <path d="M7 21h10M12 15v6M3 8h18" />
    </svg>
  );
}

export function RentalIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="10" />
      <path d="M4 20l4-6M20 20l-4-6" />
    </svg>
  );
}

export function TransparentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeOpacity="0.5" />
    </svg>
  );
}

export function SignageIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="2" width="16" height="16" />
      <path d="M12 18v4M8 22h8" />
    </svg>
  );
}

export function InteractiveIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="3" width="20" height="14" />
      <path d="M12 17v4M9 21h6" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function RetailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8l1.5-5h15L21 8" />
      <path d="M3 8h18v13H3z" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

export function CorporateIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="2" width="16" height="20" />
      <path d="M8 6h2M8 10h2M8 14h2M14 6h2M14 10h2M14 14h2M9 22v-4h6v4" />
    </svg>
  );
}

export function EventsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="17" />
      <path d="M3 9h18M8 2v4M16 2v4" />
    </svg>
  );
}

export function TransportationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="12" />
      <path d="M4 12h16M7 20l1-4M17 20l-1-4M7 8h3M14 8h3" />
    </svg>
  );
}

export function HospitalityIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21V10l9-6 9 6v11" />
      <path d="M9 21v-7h6v7" />
    </svg>
  );
}

export function GovernmentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 9l9-5 9 5" />
      <path d="M4 9h16v2H4zM5 11v9M9 11v9M15 11v9M19 11v9" />
      <path d="M3 20h18" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12l6 6L20 6" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20l1.3-4A8 8 0 1112 20a8 8 0 01-4-1.1L4 20z" />
      <path d="M8.5 9.5c0 3.5 2.5 6 6 6l1-2-2.5-1-1 1c-1.2-.6-2-1.4-2.5-2.5l1-1-1-2.5z" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="4" width="20" height="16" />
      <path d="M2 6l10 7 10-7" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 3h4l2 5-2.5 2A11 11 0 0013 15.5L15 13l5 2v4a2 2 0 01-2 2C10 21 3 14 3 5a2 2 0 012-2z" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function EfficiencyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />
      <path d="M8.5 12l2.5 2.5L16 9" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}

export const categoryIcons = {
  indoor: DisplayIcon,
  outdoor: OutdoorIcon,
  rental: RentalIcon,
  transparent: TransparentIcon,
  "video-wall": LedWallIcon,
  signage: SignageIcon,
  interactive: InteractiveIcon,
} as const;

export const applicationIcons = {
  retail: RetailIcon,
  corporate: CorporateIcon,
  events: EventsIcon,
  transportation: TransportationIcon,
  hospitality: HospitalityIcon,
  government: GovernmentIcon,
} as const;
