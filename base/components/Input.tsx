import { memo } from "react"

type PropType = {
  className?: string,
  inputClassName?: string,
  disabled?: boolean,
  hasError?: boolean,
  icon?: any,
  iconRight?: boolean,
  listId?: string,
  dropdownList?: string[],
}

export const BInput: React.FC<PropType & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = memo((
  {
    className = "",
    inputClassName = "",
    disabled = false,
    hasError = false,
    icon,
    iconRight,
    listId,
    dropdownList,
    ...props
  }) => {

  let classes = "relative duration-200 "
  let inputClasses = "w-full border text-bgray-800 px-2 py-1 rounded-sm "

  if (!!icon) {
    if (iconRight) {
      inputClasses += "pr-8 "
    } else {
      inputClasses += "pl-8 "
    }
  }

  if (disabled) {
    inputClasses += "brightness(0.96) cursor-not-allowed "
  } else {
    inputClasses += "bg-bgray-100 border-bblack-30 "
    if (hasError) {
      inputClasses += "border-transparent outline outline-1 focus:outline-2 outline-akai-400 "
    } else {
      inputClasses += "focus:border-transparent focus:outline focus:outline-1 focus:outline-primary-500 hover:border-bgray-700 "
    }
  }

  classes += className
  inputClasses += inputClassName
  return (
    <div className={classes}>
      <input
        className={inputClasses}
        disabled={disabled}
        list={listId || ""}
        {...props} />
      {!!icon && <span className={`absolute top-1/2 transform -translate-y-1/2 ${iconRight ? "right-2" : "left-0"}`}>{icon}</span>}

      {dropdownList && <datalist id={listId}>
        {dropdownList.map((option, index) => {
          return (
            <option key={index} value={option} />
          )
        })}
      </datalist>}
    </div>
  )
})