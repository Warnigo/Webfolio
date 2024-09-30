import { FC, SVGProps } from 'react'
import Dev from '@/assets/icons/devIcon.svg'
import Github from '@/assets/icons/githubIcon.svg'
import Linkedin from '@/assets/icons/linkedinIcon.svg'
import X from '@/assets/icons/xIcon.svg'

type IconsProps = SVGProps<SVGSVGElement>

const createIcon =
  (Icon: FC<IconsProps>): FC<IconsProps> =>
  ({ className, ...props }: IconsProps) => <Icon className={className} {...props} />

export const Icons = {
  Github: createIcon(Github),
  Dev: createIcon(Dev),
  Linkedin: createIcon(Linkedin),
  X: createIcon(X),
}
