import { PropsWithChildren } from 'react'
import { SideLeft } from './SideLeft'
import { SideRight } from './SideRight'

const SideRail = ({ children }: PropsWithChildren) => (
  <div className="flex h-screen w-full overflow-hidden">
    <SideLeft />
    <div className="size-full">{children}</div>
    <SideRight />
  </div>
)

SideRail.displayName = 'SideRail'
export default SideRail
