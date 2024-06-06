import { EmblaOptionsType } from 'embla-carousel'
import "./globals.css"
import './css/embla.css'
import TabBar from "./tabs";
import DailyVideo from "./components/dailyVideo/dailyVideo";
import CarouselCategories from "./components/carousel/carouselCatergories";
import Header from "./header";
import Carousel from './components/carousel/carousel';
import TodaysRecipe from './components/todaysRecipe/todaysRecipe';

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-20 overflow-x-hidden overflow-hidden ">
      <Header/>
      <Carousel slides={SLIDES} options={OPTIONS} />
      <DailyVideo />
      <CarouselCategories slides={SLIDES} options={OPTIONS} />
      <TodaysRecipe/>
      <TabBar />
    </div>
  );
}

