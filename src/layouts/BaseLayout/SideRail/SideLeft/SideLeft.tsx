import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { Avatar } from '@/components'
import { Button } from '@/components/ui'
import { mainMenu } from '@/constants'
import { AnimatedWrapper } from '@/shared/motion'

export const SideLeft = () => (
  <div className="flex flex-col items-center justify-between border-r p-4">
    <Avatar />

    <nav>
      <ul className="flex flex-col gap-5">
        {mainMenu.map(({ title, icon: Icon, link }) => (
          <li key={title}>
            <AnimatedWrapper className="relative">
              <Button variant="ghost" size="icon" asChild>
                <Link href={link} className="p-5">
                  <Icon className="size-7 shrink-0 text-primary/80 hover:text-primary" />
                </Link>
              </Button>
            </AnimatedWrapper>
          </li>
        ))}
      </ul>
    </nav>

    <div>
      <ArrowUp />
    </div>
  </div>
)
