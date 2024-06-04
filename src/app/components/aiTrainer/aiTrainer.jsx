import Image from 'next/image'

export default function AiTrainer(){
    return(
        <div className="flex flex-col items-center justify-center bg-transparent rounded-xl shadow-l border-2 mt-10 ml-10 mr-10 mb-5">
            <div className="flex flex-row items-center justify-center h-30 w-88 bg-lightblue mb-112 rounded-xl">
                <Image
                src='/AI-Assistant.png'
                alt="AI Assistant"
                className = 'rounded-full w-22 sm:w-24 md:w-28' 
                width={80} 
                height={80}
                />
                <h2 className="text-2xl sm:text-4xl md:text-5xl text-center  text-black">Your AI Personal Trainer</h2>
            </div>
        </div>
    )
}
