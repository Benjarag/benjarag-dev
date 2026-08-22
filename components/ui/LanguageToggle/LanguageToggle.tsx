"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/components/ui/LanguageToggle/LanguageToggle.module.css";
import { isLocale, locales, type Locale } from "@/i18n/config";

type LanguageToggleProps = {
  locale: Locale;
  label: string;
};

const languageOptions = [...locales].reverse();

function getLocalizedPath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/");

  if (isLocale(segments[1])) {
    segments[1] = locale;
  } else {
    segments.splice(1, 0, locale);
  }

  return segments.join("/") || `/${locale}`;
}

export default function LanguageToggle({
  locale,
  label,
}: LanguageToggleProps) {
  const pathname = usePathname();

  return (
    <div className={styles.switcher} role="group" aria-label={label}>
      {languageOptions.map((option, index) => (
        <span className={styles.option} key={option}>
          {index > 0 && (
            <span className={styles.divider} aria-hidden="true">
              /
            </span>
          )}

          {option === locale ? (
            <span className={styles.active} aria-current="page">
              {option.toUpperCase()}
            </span>
          ) : (
            <Link
              className={styles.link}
              href={getLocalizedPath(pathname, option)}
              hrefLang={option}
              lang={option}
            >
              {option.toUpperCase()}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
