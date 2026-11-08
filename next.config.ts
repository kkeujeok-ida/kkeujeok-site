import type { NextConfig } from 'next'

// GitHub Pages project sites live under /<repo>; the deploy workflow sets BASE_PATH.
const basePath = process.env.BASE_PATH ?? ''

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // /ko/privacy/index.html, so Pages serves it without a rewrite
  basePath,
  images: { unoptimized: true },
}

export default nextConfig
