import { memo, ReactNode } from "react"

type propType = {
  children?: ReactNode
}

const Body: React.FC<propType> = ({ children }) => {
  return (
    <div className="relative h-screen w-screen overflow-auto scroll-smooth">
      {children}
    </div>
  )
}

export default memo(Body)