import { memo } from "react"

type PropType = {
  id: string,
  label: string,
  className?: string,
  disabled?: boolean,
  hasError?: boolean,
}

export const BCheckbox: React.FC<PropType & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = memo((
  {
    id,
    label = "",
    className = "",
    disabled = false,
    hasError = false,
    ...props
  }) => {
  let classes = "inline-block relative pl-6 "
  let checkboxClasses = "duration-200 w-4 h-4 absolute left-0 top-1/2 -translate-y-1/2 "

  if (disabled) {
    checkboxClasses += "cursor-not-allowed accent-bblack-8 "
    classes += "cursor-not-allowed text-bgray-700 "
  } else {
    classes += "cursor-pointer text-bgray-800 "
    checkboxClasses += "cursor-pointer accent-primary-500 after:content-[''] after:block after:border after:rounded-sm after:w-4 after:h-4 "

    if (hasError) {
      checkboxClasses += "after:border-akai-400 "
    } else {
      checkboxClasses += "after:border-bgray-550 checked:after:border-transparent "
    }
  }

  classes += className
  return (
    <label htmlFor={id} className={classes}>
      <input id={id} className={checkboxClasses} disabled={disabled} type="checkbox" {...props} />
      {label}
    </label>
  );
})