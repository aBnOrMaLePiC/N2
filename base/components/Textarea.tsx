import { memo, useEffect, useRef } from "react"

type PropType = {
  className?: string,
  textareaClassName?: string,
  disabled?: boolean,
  hasError?: boolean,
  maxLength?: number,
  value: string,
  counter?: boolean,
  resizer?: boolean,
  autoHeightAdjust?: boolean,
}

export const BTextarea: React.FC<PropType & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>> = memo((
  {
    className = "",
    textareaClassName = "",
    disabled = false,
    hasError = false,
    maxLength,
    value,
    counter = false,
    resizer = true,
    autoHeightAdjust = false,
    ...props
  }) => {
  /*********START::Logics**********/
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current && autoHeightAdjust && value) {
      const borderYAxis = textareaRef.current.style.borderTop + textareaRef.current.style.borderBottom
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + borderYAxis}px`
    }
  }, [textareaRef.current])
  /*********END::Logics**********/

  /*********START::Styles**********/
  let classes = "flex flex-col "
  let textareaClasses = "duration-200 w-full border text-bgray-800 px-2 py-1 rounded-sm "

  if (!resizer) {
    textareaClasses += "resize-none "
  }

  if (disabled) {
    textareaClasses += "bg-bblack-4 cursor-not-allowed "
  } else {
    textareaClasses += "bg-bgray-100 border-bblack-30 "
    if (hasError) {
      textareaClasses += "border-transparent outline outline-1 focus:outline-2 outline-akai-400 "
    } else {
      textareaClasses += "focus:border-transparent focus:outline focus:outline-1 focus:outline-primary-500 hover:border-bgray-700 "
    }
  }

  classes += className
  textareaClasses += textareaClassName
  /*********END::Styles**********/
  return (
    <div className={classes}>
      <textarea
        ref={textareaRef}
        className={textareaClasses}
        disabled={disabled}
        maxLength={maxLength}
        value={value}
        {...props} />
      {counter && <span className="text-xs text-bgray-600 self-end">{value.length || 0}/{maxLength}</span>}
    </div>
  )
})