import { memo, ReactNode } from "react"
import { BButton } from "./Button"

type PropType = {
  className?: string,
  length: number,
  numberOfRows?: number,
  currentSelected: number,
  smallerWidth?: boolean,
  clickHandler: any,
  children?: ReactNode
}

const params = {
  MIN_LAST_PAGE: {
    small: 7,
    big: 10,
  },
  SELECTED_SPAN: {
    small: 1,
    big: 3,
  },
  END_SPAN: {
    small: 1,
    big: 2,
  },
  FIRST: 1,
  DEFAULT_NUM_OF_ROWS: 10,
  BTN_DIMENSION: {
    width: {
      small: "w-5",
      big: "w-7",
    },
    height: {
      small: "h-5",
      big: "h-7",
    },
  }
}

export const BPagination: React.FC<PropType> = memo((
  {
    className,
    length, // total data no
    numberOfRows = params.DEFAULT_NUM_OF_ROWS, // number of row in one page
    currentSelected, // currently selected page
    clickHandler, // click action handler, only passes the current page NUMBER as return
    smallerWidth = false,
    children,
    ...props
  }) => {
  // if no pagination is needed
  if (length <= numberOfRows) {
    return <></>
  }

  // if pagination needed
  const widthType = smallerWidth ? "small" : "big"

  const FIRST_PAGE = params.FIRST
  const LAST_PAGE = Math.ceil(length / numberOfRows)
  let classes = "inline-flex items-center text-sm "
  let pagination = []

  if (LAST_PAGE <= params.MIN_LAST_PAGE[widthType]) {
    for (let i = 1; i <= LAST_PAGE; i++) {
      pagination.push(i)
    }
  } else {
    // current selected add to pagination
    pagination.push(currentSelected)

    // left 1/3
    for (let i = currentSelected - 1; i >= 1 && i >= currentSelected - params.SELECTED_SPAN[widthType]; i--) {
      pagination.unshift(i)
    }

    // right 1/3
    for (let i = currentSelected + 1; i <= LAST_PAGE && i <= currentSelected + params.SELECTED_SPAN[widthType]; i++) {
      pagination.push(i)
    }

    // adding first 2/3
    let temp = []
    for (let i = 1; i <= params.END_SPAN[widthType] && i < pagination[0]; i++) {
      temp.push(i)
    }
    if (temp.length) {
      if (temp.slice(-1)[0] !== pagination[0] - 1) {
        pagination.unshift(0)
      }
      pagination.unshift(...temp)
    }

    // adding last two 
    temp = []
    for (let i = LAST_PAGE; i >= LAST_PAGE - params.END_SPAN[widthType] + 1 && i > pagination.slice(-1)[0]; i--) {
      temp.unshift(i)
    }
    if (temp.length) {
      if (temp[0] !== pagination.slice(-1)[0] + 1) {
        pagination.push(0)
      }
      pagination.push(...temp)
    }
  }

  const movePosition = (position: number) => {
    if (FIRST_PAGE <= position && position <= LAST_PAGE) {
      clickHandler(position)
    }
  }

  classes += className
  return (
    <div className={classes} {...props}>
      <BButton
        category="transparent"
        onClick={currentSelected > 1 ? () => movePosition(FIRST_PAGE) : () => { }}
        className={`flex justify-center items-center rounded mr-1 
                  ${params.BTN_DIMENSION.width[widthType]} ${params.BTN_DIMENSION.height[widthType]} 
                  ${currentSelected === FIRST_PAGE ?
            "cursor-not-allowed bg-bgray-300 text-bgray-550" :
            "cursor-pointer hover:bg-bgray-300 active:bg-bgray-400"}`}>
        &lt;&lt;
      </BButton>

      <BButton
        category="transparent"
        onClick={currentSelected > 1 ? () => movePosition(currentSelected - 1) : () => { }}
        className={`flex justify-center items-center rounded mr-1 
                  ${params.BTN_DIMENSION.width[widthType]} ${params.BTN_DIMENSION.height[widthType]} 
                  ${currentSelected === FIRST_PAGE ?
            "cursor-not-allowed bg-bgray-300 text-bgray-550" :
            "cursor-pointer hover:bg-bgray-300 active:bg-bgray-400"}`}>
        &lt;
      </BButton>

      {pagination.map((page, index) => {
        return (
          <BButton
            category="transparent"
            key={index}
            onClick={page === currentSelected ? () => { } : () => movePosition(page)}
            className={`min-w-fit flex justify-center items-center rounded mr-1 last:mr-0 
                      ${params.BTN_DIMENSION.width[widthType]} ${params.BTN_DIMENSION.height[widthType]} 
                      ${page === 0 ? "!cursor-default" : page === currentSelected ?
                "border border-primary-500 text-primary-500 bg-bgray-100 brightness-95 cursor-default" :
                "cursor-pointer hover:bg-bgray-300 active:bg-bgray-400"}`}>
            {page === 0 ? ". . ." : page}
          </BButton>
        )
      })}

      <BButton
        category="transparent"
        onClick={currentSelected < LAST_PAGE ? () => movePosition(currentSelected + 1) : () => { }}
        className={`flex justify-center items-center rounded mr-1 
                  ${params.BTN_DIMENSION.width[widthType]} ${params.BTN_DIMENSION.height[widthType]} 
                  ${currentSelected === LAST_PAGE ?
            "cursor-not-allowed bg-bgray-300 text-bgray-550" :
            "cursor-pointer hover:bg-bgray-300 active:bg-bgray-400"}`}>
        &gt;
      </BButton>

      <BButton
        category="transparent"
        onClick={currentSelected < LAST_PAGE ? () => movePosition(LAST_PAGE) : () => { }}
        className={`flex justify-center items-center rounded 
                  ${params.BTN_DIMENSION.width[widthType]} ${params.BTN_DIMENSION.height[widthType]} 
                  ${currentSelected === LAST_PAGE ?
            "cursor-not-allowed bg-bgray-300 text-bgray-550" :
            "cursor-pointer hover:bg-bgray-300 active:bg-bgray-400"}`}>
        &gt;&gt;
      </BButton>
    </div>
  )
})