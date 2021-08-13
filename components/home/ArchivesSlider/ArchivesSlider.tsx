import React, { FC, useEffect } from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'

// interface Keen {
//   sliderRef: HTMLDivElement
//   slider: KeenSlider
// }

const ArchivesSlider: FC = () => {
  const [pause, setPause] = React.useState(false)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 4500)
    return () => {
      clearInterval(timer)
    }
  }, [pause, slider])

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <Image
          quality={85}
          src="/assets/home/archive-1.jpg"
          layout="responsive"
          width={1920}
          height={1360}
        />
      </div>
      <div className="keen-slider__slide number-slide2">
        <Image
          quality={85}
          src="/assets/home/archive-2.jpg"
          layout="responsive"
          width={1920}
          height={1360}
        />
      </div>
      <div className="keen-slider__slide number-slide3">
        <Image
          quality={85}
          src="/assets/home/archive-3.jpg"
          layout="responsive"
          width={1920}
          height={1360}
        />
      </div>
    </div>
  )
}

export default ArchivesSlider
