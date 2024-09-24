'use client'

import { PropsWithChildren } from 'react'
import { useMediaQuery } from '@uidotdev/usehooks'
import { SideRail } from './SideRail'

const BaseLayout = ({ children }: PropsWithChildren) => {
  const matchers = useMediaQuery('(min-width: 1199px)')

  return (
    <div className="flex flex-col overflow-hidden">
      {matchers ? (
        <SideRail>{children}</SideRail>
      ) : (
        <div className="w-full overflow-y-auto overflow-x-hidden">{children}</div>
      )}
    </div>
  )
}

export default BaseLayout
