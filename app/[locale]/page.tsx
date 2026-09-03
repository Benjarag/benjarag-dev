import { notFound } from "next/navigation";

import Hero from "@/components/sections/Hero/Hero";
import Projects from "@/components/sections/Projects/Projects";
import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact/Contact";
import { contactLinks } from "@/data/contact";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const dictionary = getDictionary(locale);
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Benjamín Ragnarsson",
    alternateName: "Benjamin Ragnarsson",
    url: `https://benjarag.dev/${locale}`,
    jobTitle: "Software Engineer",
    description: dictionary.metadata.description,
    sameAs: [contactLinks.linkedin, contactLinks.github],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero content={dictionary.hero} />
      <Projects locale={locale} content={dictionary.projects} />
      <About
        content={dictionary.about}
        skillsContent={dictionary.skills}
      />
      <Contact content={dictionary.contact} />
    </main>
  );
}
