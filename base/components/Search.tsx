import { BIcon } from "./"
import { memo } from "react"

type PropType = {
  className?: string,
  onClick(e: React.FormEvent<HTMLFormElement>): void,
  hasError?: boolean,
  value: string,
  clearHandler: (arg: any) => void,
}

export const BSearch: React.FC<PropType & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = memo((
  {
    className = "",
    onClick = () => { },
    hasError = false,
    value,
    clearHandler,
    ...props
  }) => {

  let classes = "relative text-bgray-700 focus-within:bg-primary-500 focus-within:text-bgray-100 "
  let defaultValue = value
  let searchIconClasses = "focus:outline-primary-500 absolute top-1/2 transform -translate-y-1/2 px-3 h-full inline-flex items-center right-0 rounded-r-sm "
  const hasValue = !!value.length

  if (hasValue) {
    searchIconClasses += "text-bgray-100 bg-primary-500"
  } else {
    searchIconClasses += "bg-inherit text-inherit"
  }

  classes += className
  return (
    <form onSubmit={e => { e.preventDefault(); onClick(e) }} className={classes}>
      <input
        className="w-full border text-bgray-800 pl-2 pr-16 py-1 rounded-sm bg-bgray-100 border-bblack-30 hover:border-bgray-700 focus:border-transparent focus:outline focus:outline-1 focus:outline-primary-500"
        value={value}
        defaultValue={defaultValue || props.defaultValue}
        {...props} />
      {hasValue && (
        <button
          type="button"
          onClick={clearHandler}
          className="focus:outline focus:outline-1 focus:outline-primary-500 absolute top-1/2 transform -translate-y-1/2 h-full inline-flex items-center right-11">
          <BIcon className="text-bgray-100 bg-bgray-700 w-3 h-3 rounded-full p-1" icon={["fas", "xmark"]} matchHeight={true} />
        </button>
      )}
      <button
        type="submit"
        className={searchIconClasses}>
        <BIcon className="text-inherit bg-inherit" icon={["fas", "magnifying-glass"]} matchHeight={true} />
      </button>
    </form>
  )
})