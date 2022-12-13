import Link from "next/link";
import ApplicationLogo from "./ApplicationLogo";

export default function Footer({ className }) {
    return (
        <footer className={`${className} flex justify-center py-8 w-full`}>
            <Link href="/">
                <>
                    <ApplicationLogo width={72} height={16}/>
                </>
            </Link>
        </footer>
    )
}