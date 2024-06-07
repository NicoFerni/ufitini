import Image from "next/image";


const cards = [
    {
        title: 'Your AI Personal Trainer',
        imageSrc: '/ai-assistant.png',
        altText: 'AI Personal Trainer',
        icon: '/ai-assistant-icon.png'
    },
    {
        title: 'Power Up! Daily Video',
        imageSrc: '/motivational-video.jpg',
        altText: 'Daily Video',
        icon: '/power-icon.png'
    },
]

export default function DailyVideo() {
    return (
        <div className="flex flex-col items-center justify-center bg-white mt-2">
            {cards.map((card, index) => (
                <div className="flex flex-col items-start justify-center bg-white w-full h-64 mt-5 rounded-xl" key={index}>
                    <div className="flex items-center ml-10">
                        <Image
                            src={card.icon}
                            alt={card.altText}
                            className="mb-2"
                            width={35}
                            height={35}
                        />
                        <h1 className="text-2xl ml-2 mb-2 text-black font-bold">{card.title}</h1>
                    </div>
                    <div className="relative w-full h-full">
                        <Image
                            src={card.imageSrc}
                            alt={card.altText}
                            className='w-full sm:w-50 md:w-50'
                            style={{ objectFit: "cover" }}
                            fill
                        />
                        {card.title === 'Your AI Personal Trainer' && (
                            <button className="absolute bottom-4 right-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl">
                                Start New Chat
                            </button>
                        )}
                        {card.title === 'Power Up! Daily Video' && (
                            <p className="relative text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white m-2">
                                Get Inspired
                                <br />Get Powered Up!
                            </p>
                        )}</div>
                </div>
            ))}
        </div>
    )
}