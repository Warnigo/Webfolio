import { getMetadata } from '@/helpers/metadata'
import { getI18n } from '@/locales/server'
import { NotFound } from '@/modules/NotFound'

export async function generateMetadata() {
  const t = await getI18n()

  return getMetadata(t('notFound.notFoundDescription'))
}

export default function NotFoundPage() {
  return <NotFound />
}
