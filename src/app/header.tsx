import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <Link href='' className="mt-2 flex items-center">
            <Image
            src='/Ufitini-logo.png'
            alt='logo'
            width={300}
            height={500}
            />
        </Link>
    )
}