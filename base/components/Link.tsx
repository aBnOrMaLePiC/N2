import Link from "next/link"
import { memo, MouseEventHandler } from "react"

type PropType = {
  selfLink?: boolean,
  href: string,
  category?: "" | "transparent" | "blue" | "gray",
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined,
  className?: string,
  disabled?: boolean,
  underline?: boolean,
}

export const BLink: React.FC<PropType & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> = memo((
  {
    selfLink,
    href,
    category = "",
    onClick = () => { },
    className = "",
    disabled = false,
    underline = false,
    children,
    ...props
  }) => {
  let classes = "inline-flex justify-center items-center cursor-pointer "

  if (disabled) {
    if (!category) {
      classes += "opacity-70 hover:cursor-not-allowed "
    } else {
      classes += "text-bblack-40 hover:cursor-not-allowed "
    }
  } else {
    classes += `duration-200 active:bg-bblack-8 ${category && category !== "transparent" && "hover:underline"} `

    if (underline) {
      classes += "underline "
    }

    switch (category) {
      case "blue":
        classes += "text-primary-500 rounded-sm "
        break
      case "gray":
        classes += "text-bgray-700 rounded-sm "
        break
      default:
        break
    }
  }

  classes += className

  if (selfLink) {
    return (
      <a
        href={href}
        className={classes}
        onClick={disabled ? (e) => { e.preventDefault() } : onClick}
        {...props}
      >
        {children}
      </a>
    )
  }
  return (
    <Link legacyBehavior href={href} passHref>
      <a
        className={classes}
        onClick={disabled ? (e) => { e.preventDefault() } : onClick}
        {...props}
      >
        {children}
      </a>
    </Link>
  )
})