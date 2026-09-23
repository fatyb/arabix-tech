"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useParams } from "next/navigation";

const labels: Record<string, string> = { en: "EN", ar: "AR" };

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  return (
    <div
      className={`inline-flex border border-current/30 text-sm font-mono-spec ${className}`}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc, i) => (
        <button
          key={loc}
          type="button"
          onClick={() =>
            router.replace(
              // @ts-expect-error -- pathname includes dynamic params handled generically
              { pathname, params },
              { locale: loc }
            )
          }
          aria-current={loc === locale ? "true" : undefined}
          className={`focus-ring px-3 py-1.5 transition-colors ${
            loc === locale
              ? "bg-current/10 font-semibold"
              : "opacity-60 hover:opacity-100"
          } ${i > 0 ? "border-s border-current/30" : ""}`}
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
