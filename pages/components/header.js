import {HomeIcon, UserIcon} from "@heroicons/react/24/outline";

const Header = ({ className, children }) => (
    <header className={`${className} bg-purple-800 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900`}>
        <div className="font-medium text-yellow-400 text-2xl text-center sm:block md:hidden lg:hidden xl:hidden 2xl:hidden block">
            <a href="#">{children}</a>
        </div>

        <div className="container mx-auto sm:hidden md:block lg:block xl:block 2xl:block hidden py-2.5">
            <div className="flex justify-between">
                <span className="font-medium text-yellow-400 text-2xl">{children}</span>
                <a href="#">
                    <div className="flex text-white bg-purple-700 hover:bg-purple-900 rounded-lg">
                        <UserIcon className="w-12 h-12 mr-2"/>
                        <div className="inline-flex flex-col w-full">
                            <span className="font-bold">Example Name</span>
                            <span className="text-yellow-400 font-bold">Account</span>
                        </div>
                    </div>
                </a>
            </div>
            <ul className="text-white font-bold text-base list-none flex">
                <li><a href="#" className="pr-12 hover:text-yellow-400">
                    <HomeIcon className="inline-block w-6 h-6 mb-1"/>
                </a></li>
                <li><a href="#" className="pr-12 hover:text-yellow-400">Notification</a></li>
                <li><a href="#" className="pr-12 hover:text-yellow-400">Exam</a></li>
                <li><a href="#" className="pr-12 hover:text-yellow-400">Company</a></li>
            </ul>
        </div>
    </header>
)

export default Header