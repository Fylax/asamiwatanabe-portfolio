import { locales } from "@i18n/i18n-util";

export function getStaticPaths() {
  return locales.map((locale) => ({ params: { locale: locale } }));
}
