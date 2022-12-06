import Image from "next/image";
import cardImage from "../../public/image-1@2x.jpg";

const Single = () => (
    <div className="p-5">
        <div className="mb-2.5 float-right">
                            <span className="bg-gray-100 text-gray-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                                3 days ago
                            </span>
            <span className="bg-blue-700 text-white text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                                Notice
                            </span>
        </div>

        <Image src={cardImage} className="max-w-full h-auto rounded-lg duration-300 filter grayscale hover:grayscale-0"/>

        <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"/>

        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue from-purple-400">Better Data</span>
        </h1>

        <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
            Track work across the enterprise through
            an open, collaborative platform. Link issues across Jira and ingest data from other software
            development tools, so your IT support and operations teams have richer contextual information to
            rapidly respond to requests, incidents, and changes.
        </p>
    </div>
)

export default Single