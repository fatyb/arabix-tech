import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/data/types";
import { PlaceholderImage } from "./PlaceholderImage";
import { ArrowIcon } from "./icons/Icons";

export function ProductCard({ product }: { product: Product }) {
  const locale = useLocale() as "en" | "ar";
  const t = useTranslations("products");
  const tCategoriesShort = useTranslations("categoriesShort");

  return (
    <Link
      href={`/products/${product.slug}`}
      className="focus-ring group flex flex-col border border-graphite/10 bg-white transition-shadow hover:shadow-[0_8px_24px_rgba(28,32,36,0.12)]"
    >
      <PlaceholderImage
        src={product.images[0]}
        alt={product.name[locale]}
        className="aspect-[4/3] w-full"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="w-fit border border-navy-mid/40 px-2 py-0.5 font-mono-spec text-[11px] uppercase tracking-wide text-navy-mid">
          {tCategoriesShort(product.category)}
        </span>
        <h3 className="font-heading text-lg font-bold text-graphite">
          {product.name[locale]}
        </h3>
        <p className="font-mono-spec text-xs text-graphite-soft">
          {product.specs.pixelPitch} &middot; {product.specs.brightness} &middot;{" "}
          {tCategoriesShort(product.category)}
        </p>
        <span className="focus-ring mt-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold uppercase tracking-wide text-navy group-hover:text-gold">
          {t("viewDetails")}
          <ArrowIcon className="h-4 w-4 rtl:rotate-180" />
        </span>
      </div>
    </Link>
  );
}
