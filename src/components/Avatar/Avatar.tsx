import { AnimatedWrapper } from '@/shared/motion'
import { Avatar as UiAvatar, AvatarFallback, AvatarImage } from '../ui'

export const Avatar = () => (
  <AnimatedWrapper className="cursor-pointer">
    <UiAvatar className="size-16.5 border-4 border-primary/30">
      <AvatarImage src="/logo.jpg" alt="logo" />
      <AvatarFallback>A</AvatarFallback>
    </UiAvatar>
  </AnimatedWrapper>
)
