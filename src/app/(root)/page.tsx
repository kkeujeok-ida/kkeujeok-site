'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { pagePath } from '@/content/pages'
import { DEFAULT_LOCALE } from '@/content/site'

// Static hosting has no Accept-Language redirect; pick the locale in the browser.
export default function Root() {
  const router = useRouter()
  useEffect(() => {
    router.replace(pagePath(/^ko(-|$)/i.test(navigator.language) ? 'ko' : 'en', ''))
  }, [router])
  return (
    <p>
      <Link href={pagePath(DEFAULT_LOCALE, '')}>Kkeujeok</Link>
    </p>
  )
}
