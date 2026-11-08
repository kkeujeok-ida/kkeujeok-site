import type { Locale } from './site'

// Single registry for every page. To add a page: add an entry here and a folder
// src/app/(site)/[locale]/<slug>/page.tsx. Nav and language switch follow.
export interface PageEntry {
  slug: string // '' = home
  title: Record<Locale, string>
  nav: boolean
}

export const PAGES: readonly PageEntry[] = [
  { slug: '', title: { ko: '홈', en: 'Home' }, nav: false },
  { slug: 'privacy', title: { ko: '개인정보처리방침', en: 'Privacy Policy' }, nav: true },
]

export const pagePath = (locale: Locale, slug: string) => (slug ? `/${locale}/${slug}/` : `/${locale}/`)
