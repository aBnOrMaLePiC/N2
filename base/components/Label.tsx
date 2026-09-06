import { memo } from "react"

type PropType = {
  value: string,
  type?: string,
  className?: string,
}

export const BLabel: React.FC<PropType> = memo((
  {
    value = "",
    type = "",
    className = "",
    ...props
  }) => {
  let classes = "text-xs text-bgray-100 font-bold rounded cursor-default "
  const [bgColor = "danger", accentType] = type.split("-")

  switch (bgColor) {
    case "warning":
      classes += accentType ? "bg-label-yellow text-bgray-100 px-3 py-1 " : "bg-label-yellowLight text-bgray-800 px-3 py-1 "
      break
    case "success":
      classes += accentType ? "bg-label-teal text-bgray-100 px-3 py-1 " : "bg-label-tealLight text-bgray-800 px-3 py-1 "
      break
    case "info":
      classes += "bg-label-lapis !text-label-labelLight px-3 py-1 "
      break
    case "notice":
      classes += "bg-label-notice !text-bgray-800 px-3 py-1 "
      break
    case "danger":
      classes += "!text-akai-400 "
      break
    default:
      classes += "!text-bgray-600 "
      break
  }

  classes += className
  return (
    <span className={classes} {...props}>
      {value}
    </span>
  )
})