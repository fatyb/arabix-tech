import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MailIcon, PhoneIcon, PinIcon, WhatsappIcon } from "./icons/Icons";
import type { ProductCategory } from "@/data/types";

const productCategories: ProductCategory[] = [
  "indoor",
  "outdoor",
  "rental",
  "transparent",
  "video-wall",
  "signage",
  "interactive",
];

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tCategories = useTranslations("categories");
  const tContact = useTranslations("contact.info");
  const year = new Date().getFullYear();

  return (
    <footer className="glass-panel bg-deep-navy text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Logo variant="dark" />
            <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-white/85">
              {t("blurb")}
            </p>
            <LanguageSwitcher className="mt-6 text-white/80" />
          </div>

          <div>
            <h3 className="kicker kicker-on-dark">{t("productsHeading")}</h3>
            <ul className="mt-4 space-y-2.5">
              {productCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/products?category=${cat}`}
                    className="focus-ring font-body text-sm text-white/90 hover:text-white"
                  >
                    {tCategories(cat)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="kicker kicker-on-dark">{t("companyHeading")}</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/" className="focus-ring font-body text-sm text-white/90 hover:text-white">
                  {tNav("home")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="focus-ring font-body text-sm text-white/90 hover:text-white">
                  {tNav("products")}
                </Link>
              </li>
              <li>
                <Link href="/work" className="focus-ring font-body text-sm text-white/90 hover:text-white">
                  {tNav("work")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="focus-ring font-body text-sm text-white/90 hover:text-white">
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="focus-ring font-body text-sm text-white/90 hover:text-white">
                  {tNav("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="kicker kicker-on-dark">{t("contactHeading")}</h3>
            <ul className="mt-4 space-y-3 font-body text-sm text-white/90">
              <li className="flex items-start gap-2.5">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{tContact("address")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+971566155177" className="focus-ring hover:text-white">
                  +971 56 615 5177
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="h-4 w-4 shrink-0 text-gold" />
                <a href="mailto:arabixtech@gmail.com" className="focus-ring hover:text-white">
                  arabixtech@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsappIcon className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href="https://wa.me/971566155177"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring hover:text-white"
                >
                  {tContact("whatsapp")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t rule-light pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono-spec text-xs text-white/65">
            &copy; {year} Arabix Tech. {t("rights")}
          </p>
          <p className="font-mono-spec text-xs text-white/55">{t("placeholderNotice")}</p>
        </div>
      </div>
    </footer>
  );
}
