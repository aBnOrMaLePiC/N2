import { memo, ReactNode } from "react"

interface tab {
  tabName: string,
  icon?: any,
}

type PropType = {
  className?: string
  activeTab?: Number
  setActiveTab?: Function
  tabList?: Array<tab>
  fixed?: boolean
  tabWidth?: string
  children?: ReactNode
}

export const BTab: React.FC<PropType> = memo((
  {
    className = "",
    activeTab = 0,
    setActiveTab = () => { },
    tabList = [],
    children,
    fixed = true,
    tabWidth = "w-32",
    ...props
  }) => {
  let classes = "flex items-center shadow-bottom shadow-bblack-20 select-none "

  const makeTabClasses = (index: number) => {
    let tabClassesBase = "duration-200 px-4 text-sm text-center p-2 bg-bgray-100 "

    if (fixed) {
      tabClassesBase += "flex-grow "
    } else {
      tabClassesBase += `shrink-0 grow-0 ${tabWidth} `
    }

    if (index === activeTab) {
      tabClassesBase += "text-primary-500 shadow-bottom2 shadow-primary-500 font-bold cursor-default "
    } else {
      tabClassesBase += "hover:brightness-[0.96] text-bgray-700 cursor-pointer "
    }

    return tabClassesBase
  }

  classes += className
  return (
    <div className="w-full overflow-x-auto pb-[2px]">
      <div className={classes} {...props}>
        {tabList.map((tab, index) => {
          return (
            <div
              className={makeTabClasses(index)}
              key={index}
              onClick={() => { setActiveTab(index) }}>
              {!!tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.tabName}
            </div>
          )
        })}
      </div>
    </div>
  )
})