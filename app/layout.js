import { Suspense } from 'react'
import Header from './Components/Header'
import './globals.css'
import { Lato, Orbitron, Roboto } from "next/font/google"
import Loading from './loading'

const lato = Lato({
  subsets: ['latin'],
  weight: '400',
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: '400',
})

export {lato, orbitron, roboto}

export const metadata = {
  title: 'MindSprints',
  description: 'For Developers, By Developers!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className='overlay'></div>
        <main>
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
        </main>
      </body>
    </html>
  )
}
