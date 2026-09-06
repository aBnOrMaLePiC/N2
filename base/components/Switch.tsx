import { memo, ReactNode } from "react"

type PropType = {
  id: string,
  label?: ReactNode,
  className?: string,
  disabled?: boolean,
  hasError?: boolean,
  textInside?: boolean,
  activeText?: string,
  inactiveText?: string,
}

export const BSwitch: React.FC<PropType & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = memo((
  {
    id,
    label,
    className = "",
    disabled = false,
    hasError = false,
    textInside = false,
    activeText = "",
    inactiveText = "",
    ...props
  }) => {
  let classes = "inline-flex items-center "
  let labelClasses = "pr-2 "
  let checkboxClasses = "duration-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0 after:bg-bgray-100 after:rounded-full after:transition-all "
  let textClasses = "absolute top-1 text-sm select-none "
  let inactiveTextClasses = "right-2 block peer-checked:hidden "
  let activeTextClasses = "left-2 hidden peer-checked:block "

  if (disabled) {
    checkboxClasses += "bg-bgray-100 brightness-[0.92] after:border after:border-bblack-8 "
    labelClasses += "cursor-not-allowed text-bgray-700 "
    textClasses += "text-bgray-700 "
  } else {
    labelClasses += "cursor-pointer text-bgray-800 "
    checkboxClasses += "bg-bgray-400 peer-checked:bg-primary-500 after:border after:border-bgray-550 "
    inactiveTextClasses += "text-bgray-800 "
    activeTextClasses += "text-bgray-100 "

    if (hasError) {
      checkboxClasses += "outline outline-1 outline-akai-400 "
    }
  }

  if (textInside) {
    // activeText and inactiveText is inside of the Switch
    checkboxClasses += "w-[84px] h-7 after:left-0 after:peer-checked:left-7 after:h-7 after:w-7 "
  } else {
    // label is left side of the Switch
    checkboxClasses += "w-9 h-5 after:peer-checked:-left-1 after:h-5 after:w-5 "
  }

  inactiveTextClasses += textClasses
  activeTextClasses += textClasses
  classes += className
  return (
    <label className={classes}>
      {label && <label htmlFor={id} className={labelClasses}>{label}</label>}
      <label className={`relative inline-flex items-center ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}>
        <input id={id} disabled={disabled} type="checkbox" className="sr-only peer" {...props} />
        <div className={checkboxClasses}></div>
        {textInside && <>
          <span className={inactiveTextClasses}>{inactiveText}</span>
          <span className={activeTextClasses}>{activeText}</span>
        </>}
      </label>
    </label>
  )
})