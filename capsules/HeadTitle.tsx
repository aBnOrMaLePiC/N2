import { memo, ReactNode } from 'react'
import Head from 'next/head'

type propType = {
  children: ReactNode
}

const HeadTitle: React.FC<propType> = ({ children }) => {
  return (
    <Head>
      <title>{children}</title>
      <link rel="icon" href="next_images/favicon.ico" />
    </Head>
  )
}

export default memo(HeadTitle)