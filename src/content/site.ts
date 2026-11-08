export const LOCALES = ['ko', 'en'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'ko'

export const SITE_NAME = 'Kkeujeok'
export const CONTACT_URL = 'https://github.com/kkeujeok-ida/kkeujeok-web/issues'

export const isLocale = (v: string): v is Locale => (LOCALES as readonly string[]).includes(v)
