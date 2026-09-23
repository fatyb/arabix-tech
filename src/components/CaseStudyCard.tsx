import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { CaseStudy } from "@/data/types";
import { PlaceholderImage } from "./PlaceholderImage";
import { applicationIcons } from "./icons/Icons";
import { ArrowIcon } from "./icons/Icons";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const locale = useLocale() as "en" | "ar";
  const t = useTranslations("work");
  const tApplications = useTranslations("applications");
  const Icon = applicationIcons[caseStudy.industry];

  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="focus-ring group flex flex-col border border-graphite/10 bg-white transition-shadow hover:shadow-[0_8px_24px_rgba(28,32,36,0.12)]"
    >
      <PlaceholderImage
        src={caseStudy.images[0]}
        alt={caseStudy.projectName[locale]}
        className="aspect-[16/10] w-full"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="inline-flex w-fit items-center gap-1.5 border border-navy-mid/40 px-2 py-0.5 font-mono-spec text-[11px] uppercase tracking-wide text-navy-mid">
          <Icon className="h-3.5 w-3.5" />
          {tApplications(caseStudy.industry)}
        </span>
        <h3 className="font-heading text-lg font-bold text-graphite">
          {caseStudy.projectName[locale]}
        </h3>
        <p className="font-body text-sm text-graphite-soft">{caseStudy.client[locale]}</p>
        <p className="mt-1 font-body text-sm leading-relaxed text-graphite">
          {caseStudy.resultLine[locale]}
        </p>
        <span className="focus-ring mt-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold uppercase tracking-wide text-navy group-hover:text-gold">
          {t("viewCase")}
          <ArrowIcon className="h-4 w-4 rtl:rotate-180" />
        </span>
      </div>
    </Link>
  );
}
