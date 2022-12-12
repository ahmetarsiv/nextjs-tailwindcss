import Link from "next/link";
import ApplicationLogo from "./ApplicationLogo";

const Footer = ({className}) => (
    <footer className={`${className} flex justify-center py-8 w-full`}>
        <Link href="/">
            <ApplicationLogo width={72} height={16}/>
        </Link>
    </footer>
)

export default Footer