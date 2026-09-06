import { memo } from "react"

type PropType = {
  className?: string,
  selectClassName?: string,
  noDefaultOption?: boolean,
  list?: Array<any> | Readonly<Array<any>>,
  hasError?: boolean,
  placeholder?: string,
  icon?: string,
}

export const BSelect: React.FC<PropType & React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>> = memo((
  {
    selectClassName = "",
    className = "",
    noDefaultOption = false,
    list = [],
    hasError = false,
    placeholder = "",
    icon,
    ...props
  }) => {

  let classes = "relative duration-200 "
  let selectClasses = "w-full border text-bgray-800 px-2 py-1 rounded-sm "

  if (props.disabled) {
    selectClasses += "brightness(0.96) cursor-not-allowed "
  } else {
    selectClasses += "bg-bgray-100 border-bblack-30 "
    if (hasError) {
      selectClasses += "border-transparent outline outline-1 focus:outline-2 outline-akai-400 "
    } else {
      selectClasses += "focus:border-transparent focus:outline focus:outline-1 focus:outline-primary-500 hover:border-bgray-700 "
    }
  }

  classes += className
  selectClasses += selectClassName
  return (
    <div className={classes}>
      {!props.value &&
        <span className="absolute pointer-events-none pl-2 left-[1px] top-1/2 transform -translate-y-1/2 text-bgray-500">
          {!!icon && icon}{placeholder}
        </span>
      }

      <select
        className={selectClasses}
        {...props}>
        {!noDefaultOption && <option></option>}
        {list.map((option, index) => {
          return <option key={index} value={option.value}>{option.text}</option>
        })}
      </select>
    </div>
  )
})