import Link from 'next/link'
import { orbitron } from './layout'

export default function NotFound() {
  return <section className='h-full grid place-items-center gap-20 pt-20'>
    <h1 className={`${orbitron.className} text-center text-2xl text-yellow-300 uppercase `}>
        🚧 This Page is under construction 🚧 </h1>
    <Link href="/" className='underline capitalize font-mono text-light text-base'>
        👈 go back home 
    </Link>
  </section>
}