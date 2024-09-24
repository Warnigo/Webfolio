import dynamic from 'next/dynamic'

export const BaseLayout = dynamic(() => import('./BaseLayout'), {
  ssr: false,
})
