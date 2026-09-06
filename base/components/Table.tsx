import { TableHTMLAttributes, TdHTMLAttributes } from "react"
import { memo } from "react"

// Available attribute types:
type PropTypeTable = {
  className?: string,
  hasBorder?: boolean,
}
type PropType = {
  className?: string,
}
type PropTypeTh = {
  darkBg?: boolean,
  className?: string,
}

export const BTable: React.FC<PropTypeTable & TableHTMLAttributes<HTMLTableElement>> = memo((
  {
    className = "",
    hasBorder = true,
    children,
    ...props
  }) => {
  let classes = ""
  if (hasBorder) {
    classes += "border-l border-r border-bgray-500 "
  }
  classes += className
  return (
    <table className={classes} {...props}>
      {children}
    </table>
  )
})

export const BThead: React.FC<PropType & TableHTMLAttributes<HTMLTableSectionElement>> = memo((
  {
    className = "",
    children,
    ...props
  }) => {
  let classes = " "
  classes += className
  return (
    <thead className={classes} {...props}>
      {children}
    </thead>
  )
})

export const BTbody: React.FC<PropType & TableHTMLAttributes<HTMLTableSectionElement>> = memo((
  {
    className = "",
    children,
    ...props
  }) => {
  let classes = " "
  classes += className
  return (
    <tbody className={classes} {...props}>
      {children}
    </tbody>
  )
})

export const BTr: React.FC<PropType & TableHTMLAttributes<HTMLTableRowElement>> = memo((
  {
    className = "",
    children,
    ...props
  }) => {
  let classes = "border-t border-b border-bgray-500 first:rounded-sm last:rounded-sm "
  classes += className
  return (
    <tr className={classes} {...props}>
      {children}
    </tr>
  )
})

export const BTh: React.FC<PropTypeTh & TdHTMLAttributes<HTMLTableCellElement>> = memo((
  {
    className = "",
    darkBg = true,
    children,
    ...props
  }) => {
  let classes = "text-left text-sm text-bgray-800 px-4 py-2 "

  if (darkBg) {
    classes += "bg-bgray-400 "
  }

  classes += className
  return (
    <th className={classes} {...props}>
      {children}
    </th>
  )
})

export const BTd: React.FC<PropType & TdHTMLAttributes<HTMLTableCellElement>> = memo((
  {
    className = "",
    children,
    ...props
  }) => {
  let classes = "text-left text-sm text-bgray-800 px-4 py-2 "
  classes += className
  return (
    <td className={classes} {...props}>
      {children}
    </td>
  )
})
