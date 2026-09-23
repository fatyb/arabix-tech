import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Kicker } from "@/components/Kicker";
import { ProductsExplorer } from "@/components/ProductsExplorer";
import type { ProductCategory } from "@/data/types";

const validCategories: ProductCategory[] = [
  "indoor",
  "outdoor",
  "rental",
  "transparent",
  "video-wall",
  "signage",
  "interactive",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return { title: t("pageHeading"), description: t("pageIntro") };
}

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { category } = await searchParams;

  const t = await getTranslations("products");
  const initialCategory = validCategories.includes(category as ProductCategory)
    ? (category as ProductCategory)
    : undefined;

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <Kicker>{t("pageKicker")}</Kicker>
      <h1 className="mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">
        {t("pageHeading")}
      </h1>
      <p className="mt-4 max-w-2xl font-body text-base text-graphite-soft">
        {t("pageIntro")}
      </p>

      <div className="mt-12">
        <ProductsExplorer initialCategory={initialCategory} />
      </div>
    </div>
  );
}
