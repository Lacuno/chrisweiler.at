import { de } from './de';
import { en } from './en';

export type Locale = 'de' | 'en';
export type Dictionary = typeof de;

export const locales: Locale[] = ['de', 'en'];
export const defaultLocale: Locale = 'de';

const dictionaries: Record<Locale, Dictionary> = { de, en };

export function useTranslations(locale: string | undefined): Dictionary {
	return dictionaries[(locale as Locale) ?? defaultLocale] ?? de;
}

export function otherLocale(locale: string | undefined): Locale {
	return locale === 'en' ? 'de' : 'en';
}

/** Picks the localized value from a `{ de, en }` pair. */
export function pick<T>(value: Record<Locale, T>, locale: string | undefined): T {
	return value[(locale as Locale) ?? defaultLocale] ?? value.de;
}
