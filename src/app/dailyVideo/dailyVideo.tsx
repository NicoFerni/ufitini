import Image from "next/image";


export default function DailyVideo() {
    return (
        <div className="flex items-center justify-center bg-white">
            <div className="flex flex-col items-start justify-center bg-white w-64 h-64 mt-5 rounded-xl">
                <h1 className="text-xl mb-2 text-black font-bold ">Power Up! Daily Video</h1>
                <div className="relative w-full h-full ">
                    <Image
                        src='/Motivational-Video.jpg'
                        alt="Motivational Video"
                        className='rounded-xl w-50 sm:w-50 md:w-50'
                        style={{objectFit:"cover"}}
                        fill
                    />
                </div>
            </div>

        </div>
    )
}