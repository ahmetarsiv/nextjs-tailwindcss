import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Footer = ({className}) => (
    <footer className={`${className} ${styles.footer} static bottom-0 w-full`}>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
           className="relative"
           target="_blank"
           rel="noopener noreferrer">
            <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
            </span>
        </a>
    </footer>
)

export default Footer