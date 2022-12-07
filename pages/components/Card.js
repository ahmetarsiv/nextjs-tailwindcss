import Link from "next/link";
import Image from "next/image";
import cardImage from "../../public/image-1@2x.jpg";

const Card = ({ className, href }) => (
    <Link href={href}>
        <div className={`${className} w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
            <Image src={cardImage} placeholder="blur" className="rounded-t-lg"/>

            <div className="p-5">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                    3 days ago
                </span>
                <span className="bg-blue-700 text-white text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    Notice
                </span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-light truncate">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </div>
        </div>
    </Link>
)

export default Card