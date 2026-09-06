import { memo } from "react"

type PropType = {
  borderColor?: string,
  width?: string,
  height?: string
}
export const BSpinner: React.FC<PropType> = memo((
  {
    borderColor = "border-bgray-800",
    width = "w-4",
    height = "h-4",
    ...props
  }) => {
  return (
    <div
      className={`border-t-transparent border-solid animate-spin rounded-full border-2  ${borderColor} ${width} ${height}`}
      {...props}>
    </div>
  )
})