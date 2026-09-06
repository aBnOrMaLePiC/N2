import { BIcon } from "../components"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { memo, ReactNode, useEffect } from "react"

type PropType = {
  viewAlert?: boolean,
  category?: string,
  autoHide?: false | Function,
  autoHideDelay?: number,
  type?: string,
  clickType?: string,
  onClick?: any,
  className?: string,
  hideIcon?: boolean,
  children?: ReactNode,
}

export const BAlert: React.FC<PropType> = memo((
  {
    viewAlert = true,
    category = "default",
    autoHide = false,
    autoHideDelay = 4000,
    type = "",
    clickType,
    onClick = () => { },
    className = "",
    hideIcon = false,
    children,
    ...props
  }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!!autoHide) {
        autoHide()
      }
    }, autoHideDelay)
    return () => {
      clearTimeout(timeout)
    }
  })

  // if alert is hidden
  if (!viewAlert) {
    return <></>
  }

  // if alert is visible
  // alert position
  let alertPositionClass = category === "modal" ? "duration-500 fixed top-12 inset-x-0 z-10 w-full flex justify-center pointer-events-none " : ""

  // alert design
  let classes = `flex items-center py-5 pointer-events-auto ${clickType ? "px-5" : "pl-5 pr-10"} ${category === "modal" ? "shadow-mdS" : ""} `
  let contentClasses = "w-full cursor-default break-words px-4 text-bgray-800 text-justify no-scrollbar max-h-[calc(90vh-48px)] overflow-y-auto "

  // icons
  let iconLeft: IconProp = ["fas", "circle-info"]
  let iconRight: IconProp = clickType === "link" ? ["fas", "chevron-right"] : ["fas", "xmark"]
  let iconColor = "text-lg py-1 "

  // alert colors
  switch (type) {
    case "info":
      classes += "bg-alert-infoLight hover:brightness-[0.96] "
      iconColor += "text-alert-info "
      break
    case "warning":
      classes += "bg-alert-warningLight hover:brightness-[0.96] "
      iconColor += "text-alert-warning "
      iconLeft = ["fas", "exclamation-triangle"]
      break
    case "notice":
      classes += "bg-alert-noticeLight hover:brightness-[0.96] "
      iconColor += "text-alert-notice "
      break
    case "success":
      classes += "bg-alert-successLight hover:brightness-[0.96] "
      iconColor += "text-alert-success "
      iconLeft = ["fas", "check"]
      break
    default:
      classes += "bg-bgray-200 hover:brightness-[0.96] "
      iconColor += "text-bgray-550 "
      break
  }

  classes += className
  return (
    <div className={alertPositionClass}>
      <div className={classes} {...props}>
        {!hideIcon && <BIcon className={iconColor} icon={iconLeft} matchHeight={true} />}

        <div className={contentClasses}>{children}</div>

        {clickType && <span className="text-bgray-550 cursor-pointer hover:bg-bgray-300 active:bg-bgray-400" onClick={onClick}>
          <BIcon className="text-lg" icon={iconRight} matchHeight={true} />
        </span>}
      </div>
    </div>
  )
})