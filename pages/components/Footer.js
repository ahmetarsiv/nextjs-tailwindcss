import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = ({className}) => (
    <footer className={`${className} flex justify-center py-8 w-full`}>
        <Link href="/">
            <span className={styles.logo}>
                <Image src="/vercel.svg" width={72} height={16}/>
            </span>
        </Link>
    </footer>
)

export default Footer