import Head from 'next/head'
import { Inter } from 'next/font/google'
import Pricing from '../../components/pricing'

const inter = Inter({ subsets: ['latin'] })

export default function Offer() {
  return (
    <>
      <Pricing reverse="true" price="1500"/>
      <Pricing price="3000"/>
    </>
  )
}
