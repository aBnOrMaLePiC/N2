import { memo, ReactNode, useEffect } from 'react'
import { BButton, BIcon, BHeading } from "./"

interface buttonType {
  category: string,
  name: string,
  onClick?: (arg: any) => void,
  disabled?: boolean,
}

type PropTypeModal = {
  className?: string,
  showModal: boolean,
  setShowModal: Function,
  // setShowModal: (showModal: boolean) => void, // refactor later: https://jira.rakuten-it.com/jira/browse/ECBS-54536
  hook?: Function,
  closeBtn?: boolean
  width?: string,
  header?: string | ReactNode,
  buttons?: Array<buttonType>
  buttonPosition?: string
  children?: ReactNode
}

export const BModal: React.FC<PropTypeModal> = memo((
  {
    className = "",
    showModal,
    setShowModal,
    hook = () => { },
    closeBtn = true,
    children,
    width = "md",
    header = "",
    buttons,
    buttonPosition = "justify-center"
  }) => {

  if (!showModal) {
    document.body.classList.remove('overflow-hidden')
    return <></>
  }

  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  const modalCloseHandler = () => {
    hook()
    setShowModal(false)
  }

  let classes = "fixed flex justify-center items-center z-50 inset-0 bg-backDrop "
  let modalClasses = "relative rounded shadow-lg bg-bgray-100 "
  let MAX_HEIGHT = "max-h-[calc(92vh-12px)]"

  if (!!header && !buttons) {
    MAX_HEIGHT = "max-h-[calc(92vh-70px)]"
  } else if (!header && !!buttons) {
    MAX_HEIGHT = "max-h-[calc(92vh-76px)]"
  } else if (!!header && !!buttons) {
    MAX_HEIGHT = "max-h-[calc(92vh-140px)]"
  }

  switch (width) {
    case "sm":
      modalClasses += "w-[300px]"
      break
    case "md":
      modalClasses += "w-[500px]"
      break
    case "lg":
      modalClasses += "w-[800px]"
      break
    case "xl":
      modalClasses += "w-[1140px]"
      break
    default:
      modalClasses += width
      break
  }

  classes += className
  return (
    <div className={classes}>
      <div
        className="m-auto"
        tabIndex={-1}
        aria-hidden="true">
        <div className={modalClasses}>
          {closeBtn && <span className="absolute transform translate-x-full -translate-y-full right-0 top-0 outline-none focus:outline-none">

            <BButton category='transparent'
              className='bg-bgray-100 px-1 hover:bg-bgray-300 rounded-full'
              onClick={modalCloseHandler}>
              <BIcon className='hover:text-akai-400' icon={["fas", "xmark"]} />
            </BButton>
          </span>}
          {/* header */}
          {!!header &&
            <BHeading className='flex items-center justify-center w-full text-center border-b h-20 border-bgray-300' element='h4'>
              {header}
            </BHeading>
          }

          <div className={`overflow-y-auto flex flex-col ${MAX_HEIGHT}`}>
            {/*body*/}
            <div>
              {children}
            </div>
          </div>

          {/*footer*/}
          {!!buttons &&
            <div className={`flex items-center p-4 ${buttonPosition}`}>

              {buttons.map((button, index) => {
                return <BButton
                  key={index}
                  className="min-w-fit w-32 ml-4 first-of-type:ml-0"
                  category={button.category}
                  onClick={!!button.onClick ? button.onClick : modalCloseHandler}
                  disabled={button.disabled}
                >
                  {button.name}
                </BButton>
              })}
            </div>
          }
        </div>
      </div>
    </div>
  )
})