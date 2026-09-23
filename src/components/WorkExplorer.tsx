"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { caseStudies } from "@/data/case-studies";
import type { Application } from "@/data/types";
import { CaseStudyCard } from "./CaseStudyCard";
import { Button } from "./Button";

const industries: Application[] = [
  "retail",
  "corporate",
  "events",
  "transportation",
  "hospitality",
  "government",
];

export function WorkExplorer() {
  const t = useTranslations("work");
  const tProducts = useTranslations("products");
  const tApplications = useTranslations("applications");

  const [industry, setIndustry] = useState<Application | "all">("all");

  const filtered = useMemo(() => {
    return caseStudies.filter(
      (c) => industry === "all" || c.industry === industry
    );
  }, [industry]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b rule pb-8">
        <div>
          <span className="font-mono-spec text-xs font-semibold uppercase tracking-wide text-graphite">
            {t("filterIndustry")}
          </span>
          <div className="mt-3 flex flex-wrap gap-2">
            <FilterPill
              active={industry === "all"}
              onClick={() => setIndustry("all")}
              label={tProducts("all")}
            />
            {industries.map((ind) => (
              <FilterPill
                key={ind}
                active={industry === ind}
                onClick={() => setIndustry(ind)}
                label={tApplications(ind)}
              />
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-24 text-center">
          <p className="font-body text-graphite-soft">{tProducts("noResults")}</p>
          <Button variant="ghost" onClick={() => setIndustry("all")}>
            {tProducts("clearFilters")}
          </Button>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`focus-ring border px-4 py-2 font-body text-sm transition-colors ${
        active
          ? "border-navy bg-navy text-white"
          : "border-graphite/35 text-graphite font-medium hover:border-navy-mid hover:bg-navy/5"
      }`}
    >
      {label}
    </button>
  );
}
