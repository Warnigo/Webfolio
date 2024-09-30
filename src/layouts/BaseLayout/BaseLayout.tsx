'use client'

import { PropsWithChildren } from 'react'
import { useMediaQuery } from '@uidotdev/usehooks'
import { I18nProviderClient, useCurrentLocale } from '@/locales/client'
import { SideRail } from './SideRail'

const BaseLayout = ({ children }: PropsWithChildren) => {
  const matchers = useMediaQuery('(min-width: 1199px)')
  const locale = useCurrentLocale()

  return (
    <div className="flex flex-col overflow-hidden">
      {matchers ? (
        <I18nProviderClient locale={locale}>
          <SideRail>{children}</SideRail>
        </I18nProviderClient>
      ) : (
        <div className="w-full overflow-y-auto overflow-x-hidden">{children}</div>
      )}
    </div>
  )
}

export default BaseLayout
