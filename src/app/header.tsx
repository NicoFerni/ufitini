import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <Link href='' className="flex justify-center border-2">
            <Image
            src='/Ufitini-logo2.png'
            alt='logo'
            width={200}
            height={250}
            />
        </Link>
    )
}