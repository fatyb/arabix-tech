import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/Button";
import { Kicker } from "@/components/Kicker";
import { ProductCard } from "@/components/ProductCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { categoryIcons } from "@/components/icons/Icons";
import { products } from "@/data/products";
import { caseStudies } from "@/data/case-studies";
import type { ProductCategory } from "@/data/types";

const categoryOrder: ProductCategory[] = [
  "indoor",
  "outdoor",
  "rental",
  "transparent",
  "video-wall",
  "signage",
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tCategories = await getTranslations("categories");
  const tCategoryBlurbs = await getTranslations("categoryBlurbs");

  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);
  const featuredCaseStudies = caseStudies.filter((c) => c.featured).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="glass-panel relative overflow-hidden bg-deep-navy text-white">
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="lg:col-span-4">
            <Kicker onDark>{t("hero.kicker")}</Kicker>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              {t("hero.headline")}
            </h1>
            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/90 sm:text-lg">
              {t("hero.sub")}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/products" variant="primary">
                {t("hero.ctaPrimary")}
              </Button>
              <Button href="/work" variant="outline-light">
                {t("hero.ctaSecondary")}
              </Button>
            </div>
          </div>

          <div className="relative mt-2 lg:col-span-8 lg:mt-0">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-full bg-navy-light/20 blur-3xl"
            />
            <Image
              src="/images/stock/hero-cutout.webp"
              alt="An Arabix Tech curved LED display showcasing the brand, paired with a vehicle, illustrating showroom use"
              width={2400}
              height={1467}
              sizes="(min-width: 1024px) 980px, 100vw"
              className="h-auto w-full drop-shadow-[0_30px_60px_rgba(11,28,46,0.6)]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Product category highlights */}
      <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-3 border-b rule pb-8">
          <Kicker>{t("productsSection.kicker")}</Kicker>
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                {t("productsSection.heading")}
              </h2>
              <p className="mt-3 max-w-2xl font-body text-base text-graphite-soft">
                {t("productsSection.sub")}
              </p>
            </div>
            <Button href="/products" variant="ghost">
              {t("productsSection.viewAll")}
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px bg-graphite/10 sm:grid-cols-2 lg:grid-cols-3">
          {categoryOrder.map((cat) => {
            const Icon = categoryIcons[cat];
            return (
              <Link
                key={cat}
                href={`/products?category=${cat}`}
                className="focus-ring group flex flex-col gap-4 bg-white p-8 transition-colors hover:bg-bg-light"
              >
                <Icon className="h-8 w-8 text-navy-mid group-hover:text-navy" />
                <h3 className="font-heading text-lg font-bold text-graphite">
                  {tCategories(cat)}
                </h3>
                <p className="font-body text-sm text-graphite-soft">
                  {tCategoryBlurbs(cat)}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why Arabix Tech */}
      <section className="glass-panel bg-navy text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <Kicker onDark>{t("whySection.kicker")}</Kicker>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold sm:text-4xl">
            {t("whySection.heading")}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 border-t rule-light pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.raw("whySection.stats").map(
              (stat: { value: string; label: string }, i: number) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="font-mono-spec text-4xl font-semibold text-gold">
                    {stat.value}
                  </span>
                  <span className="font-body text-sm text-white/90">{stat.label}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
        <div className="flex flex-col gap-3 border-b rule pb-8">
          <Kicker>{t("workSection.kicker")}</Kicker>
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                {t("workSection.heading")}
              </h2>
              <p className="mt-3 max-w-2xl font-body text-base text-graphite-soft">
                {t("workSection.sub")}
              </p>
            </div>
            <Button href="/work" variant="ghost">
              {t("workSection.viewAll")}
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCaseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="glass-panel bg-deep-navy text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
          <div>
            <h2 className="max-w-xl text-3xl font-extrabold sm:text-4xl">
              {t("ctaBanner.heading")}
            </h2>
            <p className="mt-4 max-w-lg font-body text-base text-white/90">
              {t("ctaBanner.sub")}
            </p>
          </div>
          <Button href="/contact" variant="primary" className="shrink-0">
            {t("ctaBanner.cta")}
          </Button>
        </div>
      </section>
    </>
  );
}
