import Link from 'next/link'
import { PAGES, pagePath } from '@/content/pages'
import { LOCALES, SITE_NAME, type Locale } from '@/content/site'

export function SiteShell({ locale, slug, children }: { locale: Locale; slug: string; children: React.ReactNode }) {
  const other = LOCALES.find((l) => l !== locale) ?? locale
  return (
    <>
      <header className="site-header">
        <Link href={pagePath(locale, '')} className="brand">
          {SITE_NAME}
        </Link>
        <nav>
          {PAGES.filter((p) => p.nav).map((p) => (
            <Link key={p.slug} href={pagePath(locale, p.slug)}>
              {p.title[locale]}
            </Link>
          ))}
          <Link href={pagePath(other, slug)} hrefLang={other}>
            {other.toUpperCase()}
          </Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}
