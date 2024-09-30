import { PropsWithChildren } from 'react'
import { I18nProviderClient } from '@/locales/client'

type Props = {
  params: {
    locale: string
  }
} & PropsWithChildren

export default function HomeLayout({ children, params }: Props) {
  return <I18nProviderClient locale={params.locale}>{children}</I18nProviderClient>
}
