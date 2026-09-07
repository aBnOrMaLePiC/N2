import { memo, ReactNode } from 'react'
import Head from 'next/head'

type propType = {
  children: ReactNode
}

const HeadTitle: React.FC<propType> = ({ children }) => {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  )
}

export default memo(HeadTitle)