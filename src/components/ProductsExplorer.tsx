"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { products } from "@/data/products";
import type { Application, ProductCategory } from "@/data/types";
import { ProductCard } from "./ProductCard";
import { Button } from "./Button";

const categories: ProductCategory[] = [
  "indoor",
  "outdoor",
  "rental",
  "transparent",
  "video-wall",
  "signage",
  "interactive",
];

const applications: Application[] = [
  "retail",
  "corporate",
  "events",
  "transportation",
  "hospitality",
  "government",
];

export function ProductsExplorer({
  initialCategory,
}: {
  initialCategory?: ProductCategory;
}) {
  const t = useTranslations("products");
  const tCategories = useTranslations("categories");
  const tApplications = useTranslations("applications");

  const [category, setCategory] = useState<ProductCategory | "all">(
    initialCategory ?? "all"
  );
  const [application, setApplication] = useState<Application | "all">("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const categoryMatch = category === "all" || p.category === category;
      const applicationMatch =
        application === "all" || p.applications.includes(application);
      return categoryMatch && applicationMatch;
    });
  }, [category, application]);

  const hasFilters = category !== "all" || application !== "all";

  return (
    <div>
      <div className="flex flex-col gap-6 border-b rule pb-8">
        <div>
          <span className="font-mono-spec text-xs font-semibold uppercase tracking-wide text-graphite">
            {t("filterCategory")}
          </span>
          <div className="mt-3 flex flex-wrap gap-2">
            <FilterPill
              active={category === "all"}
              onClick={() => setCategory("all")}
              label={t("all")}
            />
            {categories.map((cat) => (
              <FilterPill
                key={cat}
                active={category === cat}
                onClick={() => setCategory(cat)}
                label={tCategories(cat)}
              />
            ))}
          </div>
        </div>

        <div>
          <span className="font-mono-spec text-xs font-semibold uppercase tracking-wide text-graphite">
            {t("filterApplication")}
          </span>
          <div className="mt-3 flex flex-wrap gap-2">
            <FilterPill
              active={application === "all"}
              onClick={() => setApplication("all")}
              label={t("all")}
            />
            {applications.map((app) => (
              <FilterPill
                key={app}
                active={application === app}
                onClick={() => setApplication(app)}
                label={tApplications(app)}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-mono-spec text-xs text-graphite-soft">
            {t("resultsCount", { count: filtered.length })}
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                setCategory("all");
                setApplication("all");
              }}
              className="focus-ring font-mono-spec text-xs uppercase tracking-wide text-navy-mid hover:text-navy"
            >
              {t("clearFilters")}
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-24 text-center">
          <p className="font-body text-graphite-soft">{t("noResults")}</p>
          <Button
            variant="ghost"
            onClick={() => {
              setCategory("all");
              setApplication("all");
            }}
          >
            {t("clearFilters")}
          </Button>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
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
