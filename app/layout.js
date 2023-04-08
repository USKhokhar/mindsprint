import Header from './Components/Header'
import './globals.css'
import { Lato, Orbitron } from "next/font/google"

const lato = Lato({
  subsets: ['latin'],
  weight: '400',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: '400',
})

export {lato, orbitron}

export const metadata = {
  title: 'MindSprints',
  description: 'For Developers, By Developers!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='bg-slate-500'>
          {children}
        </main>
      </body>
    </html>
  )
}
