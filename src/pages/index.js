import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div className='flex flex-col items-center border-2 shadow-lg shadow-blue-500/50 p-4'>
      <div className='border-2 p-2 rounded-xl border-sky-500 tracking-widest'>Hello there!</div>
      <a className="mt-5 bg-blue-400 text-white p-2 rounded-lg tracking-widest" href='http://localhost:3000/auth/login'>
        Proceed to login page
      </a>  
      <a className="mt-5 bg-blue-400 text-white p-2 rounded-lg tracking-widest" href='http://localhost:3000/auth/register'>
        Proceed to register page
      </a>  
      </div>

    </main>
  )
}
