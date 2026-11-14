import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/SiteShell'
import { TERMS } from '@/content/terms'
import { isLocale } from '@/content/site'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: isLocale(locale) ? TERMS[locale].title : undefined }
}

export default async function Terms({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const { title, sections } = TERMS[locale]
  return (
    <SiteShell locale={locale} slug="terms">
      <h1>{title}</h1>
      {sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          <p>{s.body}</p>
          {s.link && (
            <p>
              <a href={s.link.href} target="_blank" rel="noopener noreferrer">
                {s.link.label}
              </a>
            </p>
          )}
        </section>
      ))}
    </SiteShell>
  )
}
