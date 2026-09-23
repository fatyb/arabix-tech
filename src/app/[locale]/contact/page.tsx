import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Kicker } from "@/components/Kicker";
import { ContactForm } from "@/components/ContactForm";
import {
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsappIcon,
} from "@/components/icons/Icons";
import { getProductBySlug } from "@/data/products";
import type { ProductCategory } from "@/data/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("pageHeading"), description: t("pageIntro") };
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ product?: string; category?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { product, category } = await searchParams;

  const t = await getTranslations("contact");
  const tInfo = await getTranslations("contact.info");

  const productCategory = product ? getProductBySlug(product)?.category : undefined;
  const initialCategory = (productCategory ??
    (category as ProductCategory | undefined)) as ProductCategory | undefined;

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <Kicker>{t("pageKicker")}</Kicker>
      <h1 className="mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">
        {t("pageHeading")}
      </h1>
      <p className="mt-4 max-w-2xl font-body text-base text-graphite-soft">
        {t("pageIntro")}
      </p>

      <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="text-xl font-extrabold">{t("form.heading")}</h2>
          <div className="mt-6">
            <ContactForm initialCategory={initialCategory} />
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-xl font-extrabold">{tInfo("heading")}</h2>
          <ul className="mt-6 flex flex-col gap-5">
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy-mid" />
              <div>
                <p className="font-mono-spec text-xs uppercase tracking-wide text-graphite-soft">
                  {tInfo("addressLabel")}
                </p>
                <p className="mt-1 font-body text-sm text-graphite">{tInfo("address")}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy-mid" />
              <div>
                <p className="font-mono-spec text-xs uppercase tracking-wide text-graphite-soft">
                  {tInfo("phoneLabel")}
                </p>
                <a href="tel:+971566155177" className="focus-ring mt-1 block font-body text-sm text-graphite hover:text-navy">
                  +971 56 615 5177
                </a>
                <a href="tel:+97167049693" className="focus-ring mt-0.5 block font-body text-sm text-graphite hover:text-navy">
                  +971 6 704 9693
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy-mid" />
              <div>
                <p className="font-mono-spec text-xs uppercase tracking-wide text-graphite-soft">
                  {tInfo("emailLabel")}
                </p>
                <a href="mailto:arabixtech@gmail.com" className="focus-ring mt-1 block font-body text-sm text-graphite hover:text-navy">
                  arabixtech@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <WhatsappIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy-mid" />
              <div>
                <p className="font-mono-spec text-xs uppercase tracking-wide text-graphite-soft">
                  {tInfo("whatsappLabel")}
                </p>
                <a
                  href="https://wa.me/971566155177"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-1 block font-body text-sm text-graphite hover:text-navy"
                >
                  {tInfo("whatsapp")}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy-mid" />
              <div>
                <p className="font-mono-spec text-xs uppercase tracking-wide text-graphite-soft">
                  {tInfo("hoursLabel")}
                </p>
                <p className="mt-1 font-body text-sm text-graphite">{tInfo("hours")}</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex aspect-[4/3] w-full items-center justify-center border border-graphite/15 bg-graphite/5">
            <p className="px-6 text-center font-mono-spec text-xs uppercase tracking-wide text-graphite-soft">
              {tInfo("mapNotice")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
