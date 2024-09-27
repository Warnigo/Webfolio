import { PropsWithChildren } from 'react'
import Link from 'next/link'
import { Avatar } from '@/components'
import { mainMenu } from '@/constants'
import { AnimatedWrapper } from '@/shared/motion'

const SideRail = ({ children }: PropsWithChildren) => (
  <div className="flex h-screen w-full overflow-hidden">
    <div className="flex flex-col items-center justify-between border-r p-4">
      <Avatar />

      <nav>
        <ul className="flex flex-col gap-5">
          {mainMenu.map(({ title, icon: Icon, link }) => (
            <li key={title}>
              <AnimatedWrapper>
                <Link href={link}>
                  <Icon />
                </Link>
              </AnimatedWrapper>
            </li>
          ))}
        </ul>
      </nav>

      <div />
    </div>

    <div>{children}</div>

    <div className="flex h-screen items-center justify-center" />
  </div>
)

SideRail.displayName = 'SideRail'
export default SideRail
