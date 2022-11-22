export default function Avatar({ className }) {
    return(
        <div className="grid justify-items-center my-4">
            <div className={`${className} inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600`}>
                <span className="font-medium text-gray-600 dark:text-gray-300">ASA</span>
            </div>
            <span className="font-medium block text-xs my-2">Ahmet Sefa Arşiv</span>
        </div>
    )
}