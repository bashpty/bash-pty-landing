import { isProduction } from 'std-env'

const staticAssetsRule = isProduction
  ? {
      headers: {
        'Cache-Control': 'public, max-age=31536000',
      },
    }
  : {}

const staticPageRule = isProduction
  ? {
      prerender: false,
      cache: {
        maxAge: 3600,
        swr: true,
        staleMaxAge: 3600,
      },
      headers: {
        'Cache-Control':
          'public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600, stale-if-error=3600',
      },
    }
  : {}

const landing = [
  {
    path: '/',
    component: '~/layers/landing/pages/index.vue',
    prerender: false,
    cache: {
      maxAge: 3600,
      swr: true,
      staleMaxAge: 3600,
    },
    headers: {
      'Cache-Control':
        'public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600, stale-if-error=3600',
    },
  },
]
export const demoRules = {
  '/img/**': staticAssetsRule,
  '/shiki/**': staticAssetsRule,
  '/layouts/**': staticPageRule,
}

export const landingRules = {
  '/_ipx/**': staticAssetsRule,
  '/': landing,
}
