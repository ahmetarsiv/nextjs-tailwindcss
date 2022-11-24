import {
    ChevronRightIcon,
    SquaresPlusIcon
} from "@heroicons/react/24/outline";

const MenuTable = ({ className, dateTime, examName, isActive }) => (
    <a href="#" className={`${className} border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 focus:bg-gray-100 w-full h-full p-5`}>
        <div className="flex items-center">
            <SquaresPlusIcon className="text-blue w-12 h-12 mr-2"/>
            <div className="inline-flex flex-col w-full">
                <span className="text-blue">{dateTime}</span>
                <span className="text-gray-500">{examName}</span>
            </div>
            <label className="bg-blue-400 text-white rounded-lg text-xs font-medium p-1 mr-10">{isActive}</label>
            <ChevronRightIcon className="text-blue w-8 h-8"/>
        </div>
    </a>
)

export default MenuTable