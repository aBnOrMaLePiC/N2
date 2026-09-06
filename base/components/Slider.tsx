import React, { memo, useEffect, useRef } from 'react'

type PropType = {
  className?: string,
  width: string,
  height: string,
  imageSrcList: string[],
  sliderTimeInterval?: number,
  onClick?: any,
  setCurrentIndex: (arg: number) => void,
}

export const BSlider: React.FC<PropType> = memo((
  {
    className,
    width,
    height,
    imageSrcList = [],
    sliderTimeInterval = 0,
    onClick = null,
    setCurrentIndex = () => { },
  }) => {
  const numberOfImages = imageSrcList.length
  const sliderRef: any = useRef(null)

  useEffect(() => {
    if (sliderTimeInterval) {
      const sliderInterval = setInterval(sliderBtnHandler, sliderTimeInterval)
      if (numberOfImages === 1) {
        clearInterval(sliderInterval)
        setCurrentIndex(0)
      }
      return () => {
        clearInterval(sliderInterval)
      }
    }
  }, [imageSrcList])

  const sliderBtnHandler = () => {
    const slideWidth = sliderRef.current.offsetWidth
    const maxScroll = slideWidth * numberOfImages

    const scrollPosition = (sliderRef.current.scrollLeft + slideWidth) % maxScroll
    const currentIndex = Math.round(scrollPosition / slideWidth)

    sliderRef.current.scrollLeft = scrollPosition
    setCurrentIndex(currentIndex > numberOfImages - 1 ? numberOfImages - 1 : currentIndex)
  }

  return (
    <div className={`${width} ${height} ${className} relative group`}>
      <div
        ref={sliderRef}
        onClick={onClick}
        className={`h-full w-full flex overflow-hidden snap-x snap-mandatory scroll-smooth no-scrollbar ${!!onClick && "cursor-pointer"}`}>
        {imageSrcList.map((src, index) => {
          return (
            <div
              key={index}
              className={`snap-center snap-always min-w-full min-h-full bg-no-repeat bg-contain bg-center`}
              style={{
                backgroundImage: `url(${src})`
              }} />
          )
        })}
      </div>
    </div>
  )
})