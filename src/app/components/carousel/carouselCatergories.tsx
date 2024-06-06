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
    const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true }, [ClassNames()])

    return (
        <div className="embla">
            <h2 className="text-2xl ml-10 mb-2 text-black font-bold mt-8">
                Categories
            </h2>
            <div className="" ref={emblaRef}>
                <div className="backface-hidden flex space-x-4">
                    {slides.map((index) => (
                        <div className='embla__slide2  embla__class-names relative'  key={index}>
                            <div>
                                <img 
                                    className="rounded-l block object-cover h-full w-full"
                                    src={`/categories-${index}.jpg`}
                                    alt="Images"
                                    style={{ height: 180, width: 120}}
                                />
                            </div>
                            <p className=" text-center items-center text-xl font-bold text-black ">
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
