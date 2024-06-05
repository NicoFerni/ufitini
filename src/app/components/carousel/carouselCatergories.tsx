'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const slideTexts = ['Yoga', 'Meals', 'Fitness', 'Motivational']

const CarouselCategories: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true, dragFree: true}, [ClassNames()])

    return (
        <div className="embla">
            <h2 className="flex justify-start font-bold items-center mt-8 ml-2 mb-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl">
                Categories
            </h2>
            <div className="overflow-x-scroll ml-3 " ref={emblaRef}>
                <div className="flex space-x- ml-slide*-1 pl-slide">
                    {slides.map((index) => (
                        <div className="max-w-3xl m-auto relative" key={index}>
                            <img
                                className="rounded-lg block object-cover h-height w-width"
                                src={`/categories-${index}.jpg`}
                                alt="Images"
                                style={{ height: 100, width: 100 }}
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

export default CarouselCategories
