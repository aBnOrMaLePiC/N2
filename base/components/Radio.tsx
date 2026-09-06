import { memo } from "react"

type PropType = {
  id: string,
  label: string,
  className?: string,
  disabled?: boolean,
  hasError?: boolean,
}

export const BRadio: React.FC<PropType & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = memo((
  {
    id,
    label = "",
    className = "",
    disabled = false,
    hasError = false,
    ...props
  }) => {
  let classes = "inline-block relative pl-6 "
  let radioClasses = "duration-200 absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] border-2 border-bgray-100 rounded-full before:content-[''] before:absolute before:-left-[2px] before:-top-[2px] before:rounded-full before:h-[15px] before:w-[15px] before:block before:border "

  if (disabled) {
    classes += "cursor-not-allowed text-bgray-700 "
    radioClasses += "before:border-bblack-8 "
  } else {
    classes += "cursor-pointer text-bgray-800 "
    radioClasses += "peer-checked:bg-primary-500 "

    if (hasError) {
      radioClasses += "before:border-akai-400 "
    } else {
      radioClasses += "bg-bgray-100 before:border-bgray-550 peer-checked:before:border-primary-500"
    }
  }

  classes += className
  return (
    <label htmlFor={id} className={classes}>
      <input id={id} disabled={disabled} type="radio" className="sr-only peer" {...props} />
      <span className={radioClasses}></span>
      <span>{label}</span>
    </label>
  )
})