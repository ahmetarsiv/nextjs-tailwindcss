import {
    ChevronRightIcon,
    SquaresPlusIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

const MenuTable = ({ className, dateTime, examName, isActive }) => (
    <Link href="">
        <div className={`${className} flex items-center border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 focus:bg-gray-100 w-full h-full p-5`}>
            <SquaresPlusIcon className="text-blue w-12 h-12 mr-2"/>
            <div className="inline-flex flex-col w-full">
                <span className="text-blue">{dateTime}</span>
                <span className="text-gray-500">{examName}</span>
            </div>
            <label className="bg-blue-400 text-white rounded-lg text-xs font-medium p-1 mr-10">{isActive}</label>
            <ChevronRightIcon className="text-blue w-8 h-8"/>
        </div>
    </Link>
)

export default MenuTable