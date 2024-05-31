import Image from 'next/image'

export default function AiTrainer(){
    return(
        <div className="flex flex-col items-center justify-center bg-aqua rounded-xl shadow-xl mt-5 ml-3 mr-3">
            <div className="flex flex-row items-center justify-center h-30 w-88 bg-lightblue mb-112 rounded-xl">
                <Image
                src='/AI-Assistant.png'
                alt="AI Assistant"
                className = 'rounded-full w-22 sm:w-24 md:w-28' 
                width={90} 
                height={90}
                />
                <h2 className="text-xl sm:text-4xl md:text-5xl text-black">Your AI Personal Trainer</h2>
            </div>
        </div>
    )
}
