import Link from "next/link";

const Card = ({ className, href }) => (
    <Link href={href}>
        <div className={`${className} flex items-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg w-full h-52 sm:h-72 md:h-72 lg:h-52 xl:h-72 2xl:h-72 p-1`}>
            <h4 className="text-2xl font-bold truncate text-white select-all">
                Lorem Ipsum is simply dummy text
            </h4>
        </div>
    </Link>
)

export default Card