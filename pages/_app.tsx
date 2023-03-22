import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='container'>
      <header>
        <div className='navigation'>
          <Image
            src="/images/logo2.svg" // Route of the image file
            height={50} // Desired size with correct aspect ratio
            width={120} // Desired size with correct aspect ratio
            alt="Your Name"
          />
          <ul className='nav-items'>
            <li><Link href="/home">Home</Link></li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
      <Component {...pageProps} />
      <footer>Copyright 2023</footer>
    </div>
  )
}
