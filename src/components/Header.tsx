"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MenuIcon, CloseIcon } from "./icons/Icons";

const navItems = [
  { href: "/", key: "home" },
  { href: "/products", key: "products" },
  { href: "/work", key: "work" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-[0_2px_12px_rgba(28,32,36,0.12)]" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring font-heading text-sm font-bold uppercase tracking-wide transition-colors ${
                  active ? "text-navy" : "text-graphite hover:text-navy-mid"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher className="text-graphite" />
          <Button href="/contact" variant="primary">
            {t("getQuote")}
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center p-2 text-graphite lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? t("close") : t("menu")}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-graphite/10 bg-white lg:hidden">
          <nav
            className="mx-auto flex max-w-[1440px] flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {navItems.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-ring border-b border-graphite/10 py-3 font-heading text-base font-bold uppercase tracking-wide ${
                    active ? "text-navy" : "text-graphite"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
            <div className="mt-4 flex items-center justify-between gap-4">
              <LanguageSwitcher />
              <Button href="/contact" variant="primary" className="flex-1">
                {t("getQuote")}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
