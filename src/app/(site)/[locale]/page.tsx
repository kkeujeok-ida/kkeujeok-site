import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/SiteShell'
import { PAGES, pagePath } from '@/content/pages'
import { SITE_NAME, isLocale } from '@/content/site'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return (
    <SiteShell locale={locale} slug="">
      <h1>{SITE_NAME}</h1>
      <ul>
        {PAGES.filter((p) => p.slug).map((p) => (
          <li key={p.slug}>
            <Link href={pagePath(locale, p.slug)}>{p.title[locale]}</Link>
          </li>
        ))}
      </ul>
    </SiteShell>
  )
}
