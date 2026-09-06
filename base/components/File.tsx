import { forwardRef, memo } from "react"

type PropType = {
  className?: string,
}

export const BFile = memo(forwardRef<HTMLInputElement, PropType & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>(({
  className = "",
  ...props
}, ref) => {
  let classes = "block w-full text-sm text-bgray-800 bg-bgray-100 file:border file:border-bblack-30 hover:file:border-bgray-700 focus:file:border-transparent focus:outline focus:outline-1 focus:outline-primary-500 file:mr-2 file:p-2 file:rounded-sm "

  classes += className
  return (
    <input
      ref={ref}
      type="file"
      className={classes}
      {...props} />
  )
}))