import Image from "next/image";

export default function TodaysRecipe() {
    return (
        <div className="flex flex-col  mt-8 items-center">
            <div className="text-left w-full pl-4 pb-2">
                <h2 className="text-2xl font-bold">Today's Recipe</h2>
            </div>
            <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-128 lg:h-128">
                <Image
                    src='/Recipe.jpg'
                    alt="Today's recipe"
                    className='rounded-xl object-cover'
                    fill
                />
            </div>
        </div>
    )
}