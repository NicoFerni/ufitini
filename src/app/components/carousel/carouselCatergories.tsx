'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const CarouselCategories: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true }, [ClassNames()])

    return (
        <div className="embla">
            <h1 className="flex justify-start items-center mb-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl">
                Categories
            </h1>
            <div className="embla__viewport ml-3" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide embla__class-names" key={index}>
                            <img
                                className="embla__slide__img"
                                src={`/categories-${index}.jpg`}
                                alt="Images"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CarouselCategories
