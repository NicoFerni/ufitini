import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <Link href='' className="flex justify-start ">
            <Image
            src='/Ufitini-logo.png'
            alt='logo'
            className='ml-4 mt-3'
            width={150}
            height={150}
            />
        </Link>
    )
}