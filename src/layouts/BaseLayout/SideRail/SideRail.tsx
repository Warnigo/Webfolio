import { PropsWithChildren } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'
import { AnimatedWrapper } from '@/shared/motion'

const SideRail = ({ children }: PropsWithChildren) => (
  <div className="flex h-screen w-full overflow-hidden">
    <div className="border-r p-4">
      <AnimatedWrapper className="cursor-pointer">
        <Avatar className="size-16.5 border-4 border-primary/30">
          <AvatarImage src="/logo.jpg" alt="logo" />
          <AvatarFallback>W</AvatarFallback>
        </Avatar>
      </AnimatedWrapper>
    </div>
    <div>{children}</div>
    SideRail
  </div>
)

SideRail.displayName = 'SideRail'
export default SideRail
