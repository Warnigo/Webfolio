import '@/styles/globals.css'

import { PropsWithChildren } from 'react'
import { BaseLayout, Layout } from '@/layouts'
import { Provider } from '@/providers'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
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
