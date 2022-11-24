import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Footer = ({className}) => (
    <footer className={`${className} py-8 w-full`}>
        <a href="/"
           className="flex justify-center"
           target="_blank"
           rel="noopener noreferrer">
            <span className={styles.logo}>
                <Image src="/vercel.svg" width={72} height={16}/>
            </span>
        </a>
    </footer>
)

export default Footer