import { BSpinner } from "./index"
import { memo } from "react"

type PropType = {
  category?: string,
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void,
  className?: string,
  value?: string,
  disabled?: boolean,
  loading?: boolean,
  children?: any,
  spinner?: any,
}
export const BButton: React.FC<PropType & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = memo((
  {
    category = "default",
    onClick = () => { },
    className = "",
    value = "",
    disabled = false,
    loading = false,
    spinner,
    children,
    ...props
  }) => {
  const [catType, isSecondary] = category.split('-')
  const nonResponsive = loading || disabled
  let borderColor = undefined
  let classes = "relative duration-200 "

  if (catType === "transparent" && nonResponsive) {
    classes += "opacity-70 hover:brightness-[0.92] active:brightness-[0.80] "
  }

  if (catType !== "transparent") {
    classes += `inline-flex justify-center items-center text-sm rounded-md ${catType !== "link" && "font-bold px-4 py-2 "} `

    if (loading) {
      classes += "!text-transparent "
    }
  }

  if (disabled) {
    classes += "hover:cursor-not-allowed "
  } else if (loading) {
    classes += "hover:cursor-wait "
  }

  const BtnType = {
    default:
      isSecondary ?
        disabled ?
          "bg-bgray-100 text-primary-200 border border-primary-200 " : "bg-bgray-100 text-primary-500 border border-primary-500 hover:bg-bgray-300 active:bg-bgray-400 " :
        disabled ?
          "text-bgray-100 bg-primary-200 " : "text-bgray-100 bg-primary-500 hover:bg-primary-400 active:bg-primary-700 ",
    accent:
      isSecondary ?
        disabled ?
          "bg-bgray-100 text-bred-200 border border-bred-200 " : "bg-bgray-100 text-bred-500 border border-bred-500 hover:bg-bgray-300 active:bg-bgray-400 " :
        disabled ?
          "text-bgray-100 bg-bred-200 " : "text-bgray-100 bg-bred-500 hover:bg-bred-500 active:bg-bred-700 ",
    basic:
      isSecondary ?
        disabled ?
          "bg-bgray-100 text-bgray-400 border border-bgray-300 " : "bg-bgray-100 text-bgray-800 border border-bgray-400 hover:bg-bgray-300 active:bg-bgray-400 active:border-bgray-500 " :
        disabled ?
          "bg-bgray-200 text-bgray-400 border border-bgray-400 " : "bg-bgray-200 text-bgray-800 border border-bgray-400 hover:bg-bgray-300 active:bg-bgray-400 active:border-bgray-500 ",
    ghost:
      isSecondary ?
        disabled ?
          "text-bwhite-12 border border-bwhite-12 " : "text-bgray-100 border border-bgray-100 hover:brightness(1.12) active:brightness(0.92) " :
        disabled ?
          "text-bblack-40 border border-bblack-8 " : "text-bgray-800 border border-bgray-800 hover:mix-blend-multiply hover:brightness(0.96) active:brightness(0.92) ",
    link:
      isSecondary ?
        disabled ?
          "text-bblack-40 underline " : "text-aoi-300 underline active:bg-bblack-8 " :
        disabled ?
          "text-bblack-40 " : "text-aoi-300 hover:underline active:bg-bblack-8 ",
  }

  const SpinnerColor = {
    default:
      isSecondary ?
        "border-primary-500" : "border-bgray-100",
    accent:
      isSecondary ?
        "border-bred-500" : "border-bgray-100",
    basic:
      isSecondary ?
        "border-bgray-800" : "border-bgray-800",
    ghost:
      isSecondary ?
        "border-bgray-100" : "border-bgray-800",
  }

  switch (catType) {
    case "default":
    default:
      classes += BtnType.default
      borderColor = SpinnerColor.default
      break
    case "accent":
      classes += BtnType.accent
      borderColor = SpinnerColor.accent
      break
    case "basic":
      classes += BtnType.basic
      borderColor = SpinnerColor.basic
      break
    case "ghost":
      classes += BtnType.ghost
      borderColor = SpinnerColor.ghost
      break
    case "link":
      classes += BtnType.link
      break
    case "transparent":
      break
  }

  classes += className
  return (
    <button
      onClick={(nonResponsive) ? () => { } : onClick}
      className={classes}
      disabled={disabled}
      type={props.type || "button"}
      {...props} >
      {loading &&
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {!!spinner ? spinner : <BSpinner borderColor={borderColor} />}
        </span>
      }
      {children}
      {value}
    </button>
  )
})