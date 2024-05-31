import Carousel from "./carousel/carousel";
import { EmblaOptionsType } from 'embla-carousel'
import "./globals.css"
import './css/embla.css'
import './css/base.css'
import TabBar from "./tabs";
import AiTrainer from "./aiTrainer/aiTrainer"
import DailyVideo from "./dailyVideo/dailyVideo";
import CarouselCategories from "./carousel/carouselCatergories";
import Header from "./header";

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const SLIDE_COUNT2 = 4
const SLIDES2 = Array.from(Array(SLIDE_COUNT2).keys())

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-20 ">
      <Header/>
      <Carousel slides={SLIDES} options={OPTIONS} />
      <AiTrainer />
      <DailyVideo />
      <CarouselCategories slides={SLIDES2} options={OPTIONS} />
      <TabBar />
    </div>
  );
}

