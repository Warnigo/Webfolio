import '@/styles/globals.css'

import { PropsWithChildren } from 'react'
import { Metadata } from 'next'
import { BaseLayout, Layout } from '@/layouts'
import { Provider } from '@/providers'

export const metadata: Metadata = {
  title: 'Abubakir Shavkatov',
  description: "Abubakir Shavkatov's portfolio",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <BaseLayout>
            <Layout>{children}</Layout>
          </BaseLayout>
        </Provider>
      </body>
    </html>
  )
}
