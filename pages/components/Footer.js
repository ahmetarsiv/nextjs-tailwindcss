import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/imtihan-default.webp";

const Footer = ({className}) => (
    <footer className={`${className} flex justify-center py-8 w-full`}>
        <Link href="/">
            <>
                <Image src={Logo} placeholder="blur" width={72} height={16}/>
            </>
        </Link>
    </footer>
)

export default Footer