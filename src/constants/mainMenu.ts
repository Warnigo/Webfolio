import { LucideIcon, Mail, User, Zap } from 'lucide-react'
import { ROUTES } from './routes'

type Props = {
  title: string
  icon: LucideIcon
  link: string
}

export const mainMenu: Props[] = [
  {
    title: 'home',
    icon: User,
    link: ROUTES.home,
  },
  {
    title: 'service',
    icon: Zap,
    link: ROUTES.service,
  },
  {
    title: 'contact',
    icon: Mail,
    link: ROUTES.contact,
  },
]
