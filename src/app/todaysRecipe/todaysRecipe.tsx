import Image from "next/image";

export default function todaysRecipe() {
    return (
        <div>
            <div>
                <h2>Today's Recipe </h2>
                <div>
                    <Image
                        src='/Recipe.jpg'
                        alt="Today's recipe"
                        className='rounded-xl w-50 sm:w-50 md:w-50'
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>

        </div>
    )
}