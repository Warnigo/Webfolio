import { PropsWithChildren } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }: PropsWithChildren) => (
  <div className="flex min-h-screen flex-col">
    <Header />

    <main className="size-full overflow-y-auto overflow-x-hidden">{children}</main>

    <Footer />
  </div>
)
