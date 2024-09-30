'use client'

import Link from 'next/link'
import { ArrowUpFromDot } from 'lucide-react'
import { Avatar } from '@/components'
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui'
import { mainMenu } from '@/constants'
import { useScopedI18n } from '@/locales/client'
import { AnimatedWrapper } from '@/shared/motion'

export const SideLeft = () => {
  const t = useScopedI18n('layout')

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <TooltipProvider delayDuration={20}>
      <div className="flex h-screen flex-col items-center justify-between border-r p-4 py-5">
        <Tooltip>
          <TooltipTrigger>
            <Avatar />
          </TooltipTrigger>

          <TooltipContent
            side="bottom"
            align="center"
            className="mt-3 rounded-xl border bg-background font-grotesk text-sm text-primary"
          >
            <p>{t('itsMe')}</p>
          </TooltipContent>
        </Tooltip>
        <nav>
          <ul className="flex flex-col gap-5">
            {mainMenu.map(({ title, icon: Icon, link }) => (
              <li key={title}>
                <AnimatedWrapper className="relative">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" asChild className="rounded-xl">
                        <Link href={link}>
                          <Icon className="size-7 shrink-0 text-primary/80 hover:text-primary" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      align="center"
                      className="ml-3 rounded-xl border bg-background font-grotesk text-sm text-primary"
                    >
                      <p>{t(title as any)}</p>
                    </TooltipContent>
                  </Tooltip>
                </AnimatedWrapper>
              </li>
            ))}
          </ul>
        </nav>

        <AnimatedWrapper>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="rounded-xl" variant="ghost" size="icon" onClick={scrollToTop}>
                <ArrowUpFromDot className="size-6 text-primary/80 hover:text-primary" />
              </Button>
            </TooltipTrigger>

            <TooltipContent
              side="top"
              align="center"
              className="mb-3 rounded-xl border bg-background font-grotesk text-sm text-primary"
            >
              <p>{t('goTop')}</p>
            </TooltipContent>
          </Tooltip>
        </AnimatedWrapper>
      </div>
    </TooltipProvider>
  )
}
