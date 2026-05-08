import { defineMiddleware } from 'astro:middleware';
import { loadLocale } from '@i18n/i18n-util.sync';
import { i18nObject } from '@i18n/i18n-util';
import type { Locales } from '@i18n/i18n-types';

export const onRequest = defineMiddleware(async (context, next) => {
  
  const locale = context.currentLocale as Locales;

  loadLocale(locale)

  context.locals.locale = locale;
  context.locals.L = i18nObject(locale);

  return next();
});
