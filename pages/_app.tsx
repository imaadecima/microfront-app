import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { ComponentType, Dispatch, SetStateAction, useState } from 'react'

type IHeader = {
  setCount?: Dispatch<SetStateAction<number>>
  count?: number
}

const Header: ComponentType<IHeader> = dynamic(() => import('fe1/header'), { ssr: false })

function MyApp({ Component, pageProps }: AppProps) {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header setCount={setCount} count={count} />
      <Component {...pageProps} count={count} />
    </>
  )
}

export default MyApp
