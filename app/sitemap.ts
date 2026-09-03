import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { locales } from "@/i18n/config";

const siteUrl = "https://benjarag.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    ...projects.map((project) => `/projects/${project.slug}`),
  ];

  return paths.flatMap((path) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, `${siteUrl}/${locale}${path}`]),
    );

    return locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority: path ? 0.8 : 1,
      alternates: { languages },
    }));
  });
}
