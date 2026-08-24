import Link from "next/link";

import LanguageToggle from "@/components/ui/LanguageToggle/LanguageToggle";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type HeaderProps = {
  locale: Locale;
  content: Dictionary["header"];
};

export default function Header({ locale, content }: HeaderProps) {
  const homeHref = `/${locale}`;

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href={`${homeHref}#top`} className="brand">
          benjarag.dev
        </Link>

        <nav className="nav-links" aria-label={content.navigationLabel}>
          <Link href={`${homeHref}#projects`}>{content.projects}</Link>
          <Link href={`${homeHref}#about`}>{content.about}</Link>
          <Link href={`${homeHref}#skills`}>{content.skills}</Link>
          <Link href={`${homeHref}#contact`}>{content.contact}</Link>

          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            {content.cv}
          </a>
        </nav>

        <LanguageToggle locale={locale} label={content.languageLabel} />
      </div>
    </header>
  );
}
