declare namespace App {
  interface Locals {
    locale: import("./i18n/i18n-types").Locales,
    L: import("./i18n/i18n-types").TranslationFunctions,
  }
}