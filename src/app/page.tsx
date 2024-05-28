import  Carousel  from "./carousel";
import { EmblaOptionsType } from 'embla-carousel'
import "./globals.css"
import './css/embla.css'
import './css/base.css'
import TabBar from "./tabs";


const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <div>
      <Carousel slides={SLIDES} options={OPTIONS}/>
      <TabBar/>
    </div>
    
  );
}

