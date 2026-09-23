import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SpecTable } from "@/components/SpecTable";
import { ImageGallery } from "@/components/ImageGallery";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { Kicker } from "@/components/Kicker";
import { applicationIcons } from "@/components/icons/Icons";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/data/types";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const name = product.name[locale as Locale];
  return { title: name, description: product.tagline[locale as Locale] };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const t = await getTranslations("product");
  const tCategories = await getTranslations("categories");
  const tApplications = await getTranslations("applications");

  const related = getRelatedProducts(product, 3);

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
      <Breadcrumb
        items={[
          { label: t("breadcrumbHome"), href: "/" },
          { label: t("breadcrumbProducts"), href: "/products" },
          { label: tCategories(product.category), href: `/products?category=${product.category}` },
          { label: product.name[loc] },
        ]}
      />

      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <ImageGallery images={product.images} alt={product.name[loc]} />
          <p className="mt-3 font-mono-spec text-xs text-graphite-soft">
            {t("placeholderNotice")}
          </p>
        </div>

        <div>
          <span className="inline-block border border-navy-mid/40 px-2 py-0.5 font-mono-spec text-xs uppercase tracking-wide text-navy-mid">
            {tCategories(product.category)}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">{product.name[loc]}</h1>
          <p className="mt-2 font-heading text-lg font-semibold text-navy-mid">
            {product.tagline[loc]}
          </p>
          <p className="mt-5 font-body text-base leading-relaxed text-graphite-soft">
            {product.description[loc]}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`/contact?product=${product.slug}`} variant="primary">
              {t("requestQuote")}
            </Button>
            <Button href="/placeholder-datasheet.pdf" variant="ghost">
              {t("datasheet")}
            </Button>
          </div>

          <div className="mt-12">
            <Kicker>{t("specsHeading")}</Kicker>
            <div className="mt-4">
              <SpecTable specs={product.specs} />
            </div>
          </div>

          <div className="mt-12">
            <Kicker>{t("applicationsHeading")}</Kicker>
            <div className="mt-4 flex flex-wrap gap-3">
              {product.applications.map((app) => {
                const Icon = applicationIcons[app];
                return (
                  <span
                    key={app}
                    className="inline-flex items-center gap-2 border border-graphite/15 px-3 py-2 font-body text-sm text-graphite"
                  >
                    <Icon className="h-4 w-4 text-navy-mid" />
                    {tApplications(app)}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20 border-t rule pt-12">
          <Kicker>{t("relatedHeading")}</Kicker>
          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">{t("relatedHeading")}</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
