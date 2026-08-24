import "server-only";

import { en } from "@/i18n/en";
import { is } from "@/i18n/is";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

const dictionaries: Record<Locale, Dictionary> = { en, is };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
