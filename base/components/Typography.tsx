import { BIcon } from "./"
import { memo, ReactNode } from "react"

type PropTypeHeading = {
  element: string,
  className?: string,
  children?: ReactNode,
}
type PropTypeText = {
  type?: string
  className?: string,
  visible?: boolean,
  children?: ReactNode,
}

export const BHeading: React.FC<PropTypeHeading> = memo((
  {
    element = "h6",
    className = "",
    children,
    ...props
  }) => {
  let classes = "leading-tight font-bold text-bgray-800 font-thin font-mono tracking-wider "
  classes += className

  switch (element) {
    case "h1":
      return (
        <h1 className={`text-5xl ${classes}`} {...props}>{children}</h1>
      )
    case "h2":
      return (
        <h2 className={`text-4xl ${classes}`} {...props}>{children}</h2>
      )
    case "h3":
      return (
        <h3 className={`text-3xl ${classes}`} {...props}>{children}</h3>
      )
    case "h4":
      return (
        <h4 className={`text-2xl ${classes}`} {...props}>{children}</h4>
      )
    case "h5":
      return (
        <h5 className={`text-xl ${classes}`} {...props}>{children}</h5>
      )
    case "h6":
    default:
      return (
        <h6 className={`text-lg ${classes}`} {...props}>{children}</h6>
      )
  }
})

export const BText: React.FC<PropTypeText> = memo((
  {
    type = "default",
    className = "",
    visible = true,
    children,
    ...props
  }) => {
  let classes = "inline-block font-serif tracking-wide "
  classes += className

  switch (type) {
    case "title":
      return (
        <span className={`text-sm font-bold text-bgray-800 ${classes}`} {...props}>{children}</span>
      )
    case "error":
      return (
        <div className={`inline-flex text-akai-400 ${visible ? "visible" : "invisible"} ${classes}`}>
          <BIcon icon={["fas", "exclamation-triangle"]} className="self-center text-xs mr-2" matchHeight={true} />
          <span className="text-sm" {...props}>{children}</span>
        </div>
      )
    case "info":
      return (
        <span className={`text-sm text-bgray-700 ${visible ? "visible" : "invisible"} ${classes}`} {...props}>{children}</span>
      )
    default:
      return (
        <span className={`text-base text-bgray-800 ${visible ? "visible" : "invisible"} ${classes}`} {...props}>{children}</span>
      )
  }
})