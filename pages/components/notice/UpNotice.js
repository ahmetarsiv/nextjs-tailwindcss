export default function UpNotice({ time, title }) {
    return (
        <div className="p-3">
            <h3 className="dark:text-gray-300 truncate">{title}</h3>
            <span
                className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
            {time}
        </span>
        </div>
    )
}