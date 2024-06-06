'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import Image from 'next/image'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true }, [ClassNames()])
  const slideTexts = ['Cardio', 'Planks', 'Legs-Day', 'Time-Interval']
  const slidePhrase = ['Start your day with a good sweat!', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']

  return (
    <div className="embla overflow-x-hidden">
      <div className= "flex items-center justify-start mt-3 mb-4 p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <Image
          src='/todays-workout-icon.png'
          alt='todays workout '
          className="ml-10"
          width={40}
          height={40}
        />
        <h1 className='ml-2 text-white font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl ' >
          Today's workout
        </h1>
      </div>
      <div className="overflow-hidden	 ml-3" ref={emblaRef}>
        <div className="backface-hidden flex ml-slide* -1">
          {slides.map((index) => (
            <div className="embla__slide embla__class-names relative" key={index}>
              <div className='absolute mt-2 ml-2'>
                <p className='text-xl text-bold text-white font-bold'>
                  {slidePhrase[index]}
                </p>
              </div>
              <img
                className="rounded-lg block object-cover"
                src={`/carousel-${index}.jpg`}
                alt="Images"
                style={{ height: 250, width: '100%' }}
              />
              <div className='absolute bottom-2 right-2 bg-[#3E8DDE] rounded-2xl m-2 p-1'>
                <p className='text-xl text-bold shadow-2xl text-white  font-bold p-1'>
                  {slideTexts[index]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel

