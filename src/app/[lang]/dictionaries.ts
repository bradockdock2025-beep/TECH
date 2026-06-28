import "server-only";

import fr from "@/dictionaries/fr.json";
import en from "@/dictionaries/en.json";
import pt from "@/dictionaries/pt.json";

const dictionaries = { fr, en, pt };

export type Locale = keyof typeof dictionaries;
export type Dict = typeof fr;

export const locales: Locale[] = ["fr", "en", "pt"];
export const defaultLocale: Locale = "fr";

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = (locale: Locale): Dict =>
  dictionaries[locale];
