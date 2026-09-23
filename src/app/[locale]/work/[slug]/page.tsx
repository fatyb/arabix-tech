import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImageGallery } from "@/components/ImageGallery";
import { Kicker } from "@/components/Kicker";
import { Button } from "@/components/Button";
import { applicationIcons, CheckIcon } from "@/components/icons/Icons";
import { getCaseStudyBySlug, caseStudies } from "@/data/case-studies";
import { getProductBySlug } from "@/data/products";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/data/types";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    caseStudies.map((c) => ({ locale, slug: c.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return {};
  return {
    title: caseStudy.projectName[locale as Locale],
    description: caseStudy.resultLine[locale as Locale],
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  const t = await getTranslations("work");
  const tApplications = await getTranslations("applications");

  const Icon = applicationIcons[caseStudy.industry];
  const relatedProducts = caseStudy.productsUsed
    .map((s) => getProductBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
      <Breadcrumb
        items={[
          { label: t("pageHeading"), href: "/work" },
          { label: caseStudy.projectName[loc] },
        ]}
      />

      <div className="mt-6">
        <span className="inline-flex w-fit items-center gap-1.5 border border-navy-mid/40 px-2 py-0.5 font-mono-spec text-xs uppercase tracking-wide text-navy-mid">
          <Icon className="h-3.5 w-3.5" />
          {tApplications(caseStudy.industry)}
        </span>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold sm:text-4xl">
          {caseStudy.projectName[loc]}
        </h1>
        <p className="mt-2 font-heading text-lg font-semibold text-navy-mid">
          {caseStudy.client[loc]} &middot; {caseStudy.location[loc]}
        </p>
      </div>

      <div className="mt-8">
        <ImageGallery images={caseStudy.images} alt={caseStudy.projectName[loc]} />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
        <div>
          <Kicker>{t("challengeHeading")}</Kicker>
          <p className="mt-4 font-body text-base leading-relaxed text-graphite-soft">
            {caseStudy.challenge[loc]}
          </p>
        </div>
        <div>
          <Kicker>{t("solutionHeading")}</Kicker>
          <p className="mt-4 font-body text-base leading-relaxed text-graphite-soft">
            {caseStudy.solution[loc]}
          </p>
        </div>
        <div>
          <Kicker>{t("resultsHeading")}</Kicker>
          <ul className="mt-4 flex flex-col gap-3">
            {caseStudy.results.map((r, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-navy-mid" />
                <span className="font-body text-sm leading-relaxed text-graphite">
                  {r[loc]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-16 border-t rule pt-10">
          <Kicker>{t("productsUsedHeading")}</Kicker>
          <div className="mt-4 flex flex-wrap gap-3">
            {relatedProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="focus-ring border border-graphite/15 px-4 py-2 font-body text-sm text-graphite hover:border-navy-mid hover:text-navy"
              >
                {p.name[loc]}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16">
        <Button href="/work" variant="ghost">
          {t("backToWork")}
        </Button>
      </div>
    </div>
  );
}
