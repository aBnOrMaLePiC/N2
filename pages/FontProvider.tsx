import { Archivo } from 'next/font/google'
import { FC, memo } from "react"

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

type propType = {
  children: React.ReactNode
}

const RootLayout: FC<propType> = ({ children }) => {
  return (
    <div className={`${archivo.variable}`}>
      {children}
    </div>
  )
}

export default memo(RootLayout)