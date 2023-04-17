import Head from 'next/head'
import { Inter } from 'next/font/google'
import LogoGrid from '../../components/logoGrid'
import ToolKit from '../../components/toolKit'
import Hero from '../../components/hero'
import Faq from '../../components/faq'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <div className={inter.className}>
      Contact
    </div>
    </>
  )
}
