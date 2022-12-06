import {HomeIcon
} from "@heroicons/react/24/outline";
import Button from "./Button";

export default function Join({className}) {
    return (
        <nav className={`${className} fixed right-0 top-[52px] rounded-lg drop-shadow-md sm:hidden md:hidden lg:block xl:block 2xl:block hidden p-3 w-64 h-screen`}>
            <div className="fixed right-0 top-0 bg-gray-50 dark:bg-gray-900 w-full h-screen">
                <div className="p-5">
                    <span className="bg-purple-100 text-blue text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">PRO</span>

                    <div className="mt-5">
                        <h3 className="text-3xl font-bold dark:text-white">Mobile Design</h3>

                        <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                            Track work across the enterprise through an open, collaborative platform.
                        </p>
                    </div>

                    <div className="mt-5">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                        3 days ago
                    </span>
                        <span className="bg-blue-700 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        2 minutes ago
                    </span>
                    </div>

                    <div className="flex -space-x-4 mt-14">
                        <img className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 placeholder" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"/>
                        <img className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"/>
                        <img className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"/>
                        <span className="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800">+420</span>
                    </div>

                    <ul className="mt-5">
                        <li className="w-full h-full flex">
                            <HomeIcon className="w-11 h-11 mr-10"/>
                            <div className="inline-flex flex-col w-full">
                                <label className="text-lg">12:00-13:00</label>
                                <label className="text-xs dark:text-gray-400">Time</label>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="fixed bottom-16 w-full">
                    <hr className="my-3 h-px bg-gray-400 border-0 dark:bg-gray-700"/>
                    <div className="flex justify-center">
                        <Button className="my-3">Join Live</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}