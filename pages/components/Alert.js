import {InformationCircleIcon} from "@heroicons/react/24/outline";

const Alert = ({ className, type, message }) => (
    <div className={`${className} w-full mx-auto bm-12`}>
        <div className="flex bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700" role="alert">
            <InformationCircleIcon className="w-5 h-5 inline mr-3"/>
            <div>
                <span className="font-medium">{type} </span>
                {message}
            </div>
        </div>
    </div>
)

export default Alert