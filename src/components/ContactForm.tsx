"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import type { ProductCategory } from "@/data/types";
import { CheckIcon } from "./icons/Icons";

const categories: ProductCategory[] = [
  "indoor",
  "outdoor",
  "rental",
  "transparent",
  "video-wall",
  "signage",
  "interactive",
];

const fieldClasses =
  "focus-ring w-full border border-graphite/20 bg-white px-4 py-3 font-body text-sm text-graphite placeholder:text-graphite-soft/60 focus:border-navy";

export function ContactForm({ initialCategory }: { initialCategory?: ProductCategory }) {
  const t = useTranslations("contact.form");
  const tCategories = useTranslations("categories");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 border border-navy/20 bg-navy/5 p-8">
        <CheckIcon className="h-8 w-8 text-navy" />
        <p className="font-body text-base text-graphite">{t("submitted")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label={t("name")} htmlFor="name">
          <input id="name" name="name" type="text" required className={fieldClasses} />
        </Field>
        <Field label={t("company")} htmlFor="company">
          <input id="company" name="company" type="text" className={fieldClasses} />
        </Field>
        <Field label={t("email")} htmlFor="email">
          <input id="email" name="email" type="email" required className={fieldClasses} />
        </Field>
        <Field label={t("phone")} htmlFor="phone">
          <input id="phone" name="phone" type="tel" className={fieldClasses} />
        </Field>
      </div>

      <Field label={t("productInterest")} htmlFor="productInterest">
        <select
          id="productInterest"
          name="productInterest"
          defaultValue={initialCategory ?? ""}
          className={fieldClasses}
        >
          <option value="" disabled>
            {t("productInterestPlaceholder")}
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {tCategories(cat)}
            </option>
          ))}
        </select>
      </Field>

      <Field label={t("message")} htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={t("messagePlaceholder")}
          className={fieldClasses}
        />
      </Field>

      <button
        type="submit"
        className="btn-label focus-ring mt-2 inline-flex w-fit items-center justify-center bg-gold px-8 py-3 font-heading text-sm font-bold uppercase tracking-wide text-graphite transition-colors hover:bg-navy hover:text-white"
      >
        {t("submit")}
      </button>

      <p className="font-mono-spec text-xs text-graphite-soft">{t("disclaimer")}</p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="font-body text-sm font-medium text-graphite">
        {label}
      </label>
      {children}
    </div>
  );
}
