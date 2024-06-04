import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <Link href='' className="flex justify-center border ">
            <Image
            src='/Ufitini-logo2.png'
            alt='logo'
            width={130}
            height={200}
            />
        </Link>
    )
}