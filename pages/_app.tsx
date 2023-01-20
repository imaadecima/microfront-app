import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { ComponentType, Dispatch, ReactElement, SetStateAction, useState } from 'react'
import Menu from 'components/Menu'

type IHeader = {
  setCount?: Dispatch<SetStateAction<number>>
  count?: number
  menu?: ReactElement
}

const Header: ComponentType<IHeader> = dynamic(() => import('fe1/header'), { ssr: false })

function MyApp({ Component, pageProps }: AppProps) {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header setCount={setCount} count={count} menu={<Menu setCount={setCount} />} />
      <Component {...pageProps} count={count} />
    </>
  )
}

export default MyApp
