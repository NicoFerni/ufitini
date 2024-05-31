import Image from 'next/image'

export default function AiTrainer(){
    return(
        <div className="flex flex-col items-start justify-start bg-aqua rounded-xl shadow-xl mt-5 ml-slide ">
            <div className="flex flex-row items-center justify-center h-30 w-88 bg-lightblue ml-7.5 mr-7.5 mb-112 rounded-xl">
                <Image
                src='/AI-Assistant.png'
                alt="AI Assistant"
                className = 'rounded-full w-22 sm:w-24 md:w-28' 
                width={90} 
                height={90}
                />
                <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-black">Your AI Personal Trainer</h2>
            </div>
        </div>
    )
}
