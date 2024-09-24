import { PropsWithChildren } from 'react'

const SideRail = ({ children }: PropsWithChildren) => (
  <div className="flex">
    SideRail
    <div>{children}</div>
    SideRail
  </div>
)

SideRail.displayName = 'SideRail'
export default SideRail
