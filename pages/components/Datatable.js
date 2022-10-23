import {
    ChevronRightIcon,
    SquaresPlusIcon
} from "@heroicons/react/24/outline";

const DataTable = ({ className, dateTime, examName, isActive }) => (
    <a href="#" className={`${className} border-b dark:border-gray-700 hover:bg-slate-50 focus:bg-slate-50 w-full h-full p-5`}>
        <div className="flex items-center">
            <SquaresPlusIcon className="text-purple-800 w-12 h-12 mr-2"/>
            <div className="inline-flex flex-col w-full">
                <span className="text-purple-800">{dateTime}</span>
                <span className="text-zinc-500">{examName}</span>
            </div>
            <label className="bg-yellow-400 text-purple-800 rounded-lg text-xs font-medium p-1 mr-10">{isActive}</label>
            <ChevronRightIcon className="text-purple-800 w-8 h-8"/>
        </div>
    </a>
)

export default DataTable