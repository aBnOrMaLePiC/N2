// Fontawesome icons
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

type PropType = {
  icon: IconProp,
  className?: string,
  matchHeight?: boolean
}

export const BIcon: React.FC<PropType> = memo((
  {
    icon,
    className = "",
    matchHeight = false,
    ...props
  }) => {
  let classes = ""
  if (matchHeight) {
    classes += "fa-text-height "
  } else {
    classes += "w-4 h-4 "
  }

  classes += className
  return (
    <FontAwesomeIcon className={classes} icon={icon} {...props} />
  )
})