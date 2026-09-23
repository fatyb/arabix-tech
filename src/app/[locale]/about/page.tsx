import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Kicker } from "@/components/Kicker";
import { Button } from "@/components/Button";
import {
  BrightnessIcon,
  LedWallIcon,
  EfficiencyIcon,
  ShieldIcon,
} from "@/components/icons/Icons";

const whyIcons = [BrightnessIcon, LedWallIcon, EfficiencyIcon, ShieldIcon];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("pageHeading"), description: t("intro") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const why = t.raw("why") as { title: string; body: string }[];

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <Kicker>{t("pageKicker")}</Kicker>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">
          {t("pageHeading")}
        </h1>
        <p className="mt-4 max-w-2xl font-body text-base text-graphite-soft">
          {t("intro")}
        </p>
        <p className="mt-6 max-w-3xl font-body text-base leading-relaxed text-graphite">
          {t("introBody")}
        </p>
      </div>

      {/* Vision & Mission */}
      <section className="glass-panel bg-navy text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <Kicker onDark>{t("visionKicker")}</Kicker>
            <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
              {t("visionHeading")}
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-white/85">
              {t("visionText")}
            </p>
          </div>
          <div className="border-t rule-light pt-10 lg:border-t-0 lg:border-s lg:ps-16 lg:pt-0">
            <Kicker onDark>{t("missionKicker")}</Kicker>
            <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
              {t("missionHeading")}
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-white/85">
              {t("missionText")}
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <Kicker>{t("whyKicker")}</Kicker>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold sm:text-4xl">
          {t("whyHeading")}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-px bg-graphite/10 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((item, i) => {
            const Icon = whyIcons[i];
            return (
              <div key={i} className="flex flex-col gap-4 bg-white p-8">
                <Icon className="h-8 w-8 text-navy-mid" />
                <h3 className="font-heading text-lg font-bold text-graphite">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-graphite-soft">{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Warranty / commitment */}
      <section className="glass-panel bg-deep-navy text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-16">
            <div className="lg:w-1/3">
              <Kicker onDark>{t("warrantyKicker")}</Kicker>
              <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
                {t("warrantyHeading")}
              </h2>
            </div>
            <p className="max-w-2xl font-body text-base leading-relaxed text-white/85 lg:w-2/3">
              {t("warrantyText")}
            </p>
          </div>

          <blockquote className="mt-14 border-t rule-light pt-10">
            <p className="max-w-2xl font-heading text-2xl font-bold leading-snug text-gold sm:text-3xl">
              &ldquo;{t("quote")}&rdquo;
            </p>
          </blockquote>

          <div className="mt-10">
            <Button href="/contact" variant="primary">
              {t("cta")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
