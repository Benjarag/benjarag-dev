import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectDetails from "@/components/sections/ProjectDetails/ProjectDetails";
import { getProject } from "@/data/projects";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { isProjectSlug, projectSlugs } from "@/types/project";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !isProjectSlug(slug)) notFound();

  const content = getDictionary(locale).projects.items[slug];
  const path = `/projects/${slug}`;

  return {
    title: content.title,
    description: content.summary,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        en: `/en${path}`,
        is: `/is${path}`,
      },
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !isProjectSlug(slug)) notFound();

  const project = getProject(slug);
  const projectsContent = getDictionary(locale).projects;

  if (!project) notFound();

  return (
    <ProjectDetails
      locale={locale}
      project={project}
      content={projectsContent.items[slug]}
      labels={projectsContent}
    />
  );
}
