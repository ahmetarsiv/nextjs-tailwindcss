const UpcomingClasses = ({ time, title, desc }) => (
    <div className="flex p-3">
        <div className="text-white font-medium text-2xl float-left">{time}</div>
        <div className="border-r-4 border-purple-700 rounded mx-1.5"></div>
        <div className="grid grid-col">
            <span className="dark:text-gray-300 text-xs font-light truncate">{desc}</span>
            <span className="dark:text-gray-300 truncate">{title}</span>
        </div>
    </div>
)

export default UpcomingClasses