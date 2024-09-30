import { PropsWithChildren } from 'react'
import { SideLeft } from './SideLeft'
import { SideRight } from './SideRight'

const SideRail = ({ children }: PropsWithChildren) => (
  <div className="flex h-screen w-full overflow-hidden px-fluid">
    <SideLeft />
    <div className="size-full overflow-y-auto">{children}</div>
    <SideRight />
  </div>
)

SideRail.displayName = 'SideRail'
export default SideRail
