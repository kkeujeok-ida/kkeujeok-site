import '../../globals.css'
import { notFound } from 'next/navigation'
import { LOCALES, isLocale } from '@/content/site'

export const dynamicParams = false
export const generateStaticParams = () => LOCALES.map((locale) => ({ locale }))

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  )
}
