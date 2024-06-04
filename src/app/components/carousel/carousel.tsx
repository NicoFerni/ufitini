'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true }, [ClassNames()])
  const slideTexts = ['Cardio', 'Planks', 'Legs-Day', 'Time-Interval']

  return (
    <div className="embla">
      <h2 className="flex justify-start font-bold items-center ml-2 mb-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl">
        Today's workout
      </h2>
      <div className="embla__viewport ml-3" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide embla__class-names relative" key={index}>
              <img
                className="embla__slide__img"
                src={`/carousel-${index}.jpg`}
                alt="Images"
              />
            <p className="absolute bottom-2 right-2 text-2xl text-bold shadow-2xl text-black m-2">
              {slideTexts[index]}
            </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel

