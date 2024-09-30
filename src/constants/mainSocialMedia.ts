import { FC, SVGProps } from 'react'
import { Icons } from '@/components'
import { DEV_TO, GITHUB_REPO, LINKEDIN, X } from './env'

type Props = {
  name: string
  icon: FC<SVGProps<SVGSVGElement>>
  link: string
}

export const mainSocialMedia: Props[] = [
  {
    name: 'github',
    icon: Icons.Github,
    link: GITHUB_REPO,
  },
  {
    name: 'linkedin',
    icon: Icons.Linkedin,
    link: LINKEDIN,
  },
  {
    name: 'dev',
    icon: Icons.Dev,
    link: DEV_TO,
  },
  {
    name: 'x',
    icon: Icons.X,
    link: X,
  },
]
