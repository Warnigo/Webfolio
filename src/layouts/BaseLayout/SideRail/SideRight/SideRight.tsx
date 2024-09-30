import Link from 'next/link'
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui'
import { mainSocialMedia } from '@/constants'
import { useScopedI18n } from '@/locales/client'
import { AnimatedWrapper } from '@/shared/motion'

export const SideRight = () => {
  const t = useScopedI18n('social')

  return (
    <TooltipProvider delayDuration={20}>
      <div className="flex h-screen flex-col items-center justify-center border-l p-4 py-5">
        <nav>
          <ul className="flex flex-col gap-4">
            {mainSocialMedia.map(({ name, icon: Icon, link }) => (
              <li key={name}>
                <AnimatedWrapper>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button asChild variant="outline" size="icon" className="rounded-xl p-5">
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                          <Icon className="size-7 shrink-0 text-primary/80 hover:text-primary" />
                        </Link>
                      </Button>
                    </TooltipTrigger>

                    <TooltipContent
                      side="left"
                      className="rounded-xl border bg-background font-grotesk text-sm text-primary"
                    >
                      <p>{t(name as any)}</p>
                    </TooltipContent>
                  </Tooltip>
                </AnimatedWrapper>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </TooltipProvider>
  )
}
