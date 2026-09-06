import { BIcon } from "./"
import { memo } from "react"

type PropType = {
  className?: string,
  disabled?: boolean,
  hasError?: boolean,
  value: number,
  min?: number,
  max?: number,
  step?: number,
  setValue: (arg: number) => void,
}

export const BQuantity: React.FC<PropType & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = memo((
  {
    className = "",
    disabled = false,
    hasError = false,
    value,
    min = 0,
    max = 100,
    step = 1,
    setValue,
    ...props
  }) => {

  const onChangeHandler = (value: number) => {
    if (!disabled) {
      if (min <= value && value <= max && Number.isInteger(value)) {
        setValue(value)
      } else if (!value) {
        setValue(0)
      }
    }
  }

  let classes = "group duration-200 border w-full rounded-sm inline-flex "
  let inputClasses = "w-full bg-transparent border-r border-l px-4 py-1 "
  let buttonClasses = "px-2 "

  if (disabled) {
    classes += "bg-bblack-4 "
    inputClasses += "bg-bblack-4 cursor-not-allowed text-bgray-700 "
    buttonClasses += "cursor-not-allowed "
  } else {
    inputClasses += "bg-bgray-100 border-bblack-30 text-bgray-800 "
    buttonClasses += "hover:bg-bblack-4 active:bg-bblack-8 focus:border-primary-500 focus:outline focus:outline-1 focus:outline-primary-500 "
    if (hasError) {
      classes += "border-akai-400 focus-within:border-akai-400 focus-within:outline-none "
      inputClasses += "border-akai-400 focus:outline focus:outline-2 focus:outline-akai-400 "
      buttonClasses += " focus:outline-0 "
    } else {
      classes += "hover:border-bgray-700 focus-within:border-primary-500 "
      inputClasses += "group-hover:border-bgray-700 focus:border-primary-500 focus:outline focus:outline-1 focus:outline-primary-500 "
    }
  }

  classes += className
  return (
    <div className={classes}>
      <button disabled={disabled} onClick={disabled ? () => { } : () => onChangeHandler(value - step)} className={buttonClasses} type="button"><BIcon className="text-bgray-700" icon={["fas", "minus"]}></BIcon></button>
      <input disabled={disabled} onChange={disabled ? () => { } : e => onChangeHandler(parseInt(e.target.value))} className={inputClasses} value={value} type="number" min={min} max={max} step={step} {...props} />
      <button disabled={disabled} onClick={disabled ? () => { } : () => onChangeHandler(value + step)} className={buttonClasses} type="button"><BIcon className="text-bgray-700" icon={["fas", "plus"]}></BIcon></button>
    </div>
  )
})