'use client'

import { useScopedI18n } from '@/locales/client'

const NotFound = () => {
  const t = useScopedI18n('notFound')

  return (
    <section className="flex h-full items-center justify-center">
      <h2 className="text-7xl">{t('notFound')}</h2>
      <p className="text-lg">{t('notFoundDescription')}</p>
    </section>
  )
}

NotFound.displayName = 'NotFound'
export default NotFound
