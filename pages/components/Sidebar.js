import {
    ArrowLeftOnRectangleIcon,
    BellAlertIcon,
    BriefcaseIcon,
    HomeIcon,
    SquaresPlusIcon,
    UserIcon
} from "@heroicons/react/24/outline";
import Avatar from "./Avatar";

const Sidebar = ({ className }) => (
    <nav className={`${className} fixed left-0 top-[52px] float-left rounded-lg drop-shadow-md sm:hidden md:hidden lg:block xl:block 2xl:block hidden p-3 w-64`}>
        <div className="fixed left-0 top-0 bg-gray-50 dark:bg-gray-900 w-full h-screen">
            <Avatar className="block"/>
            <ul className="list-none text-lg">
                <a href="/" className="cursor-pointer">
                    <li className="w-full h-full p-5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                        <HomeIcon className="inline-block w-6 h-6"/> <label>Home</label>
                    </li>
                </a>
                <a href="#" className="cursor-pointer">
                    <li className="w-full h-full p-5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                        <BellAlertIcon className="inline-block w-6 h-6"/> <label>Notification</label>
                    </li>
                </a>
                <a href="#" className="cursor-pointer">
                    <li className="w-full h-full p-5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                        <SquaresPlusIcon className="inline-block w-6 h-6"/> <label>Exam</label>
                    </li>
                </a>
                <a href="#" className="cursor-pointer">
                    <li className="w-full h-full p-5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                        <BriefcaseIcon className="inline-block w-6 h-6"/> <label>Company</label>
                    </li>
                </a>
                <a href="profile" className="cursor-pointer">
                    <li className="w-full h-full p-5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                        <UserIcon className="inline-block w-6 h-6"/> <label>Account</label>
                    </li>
                </a>
                <a href="#" className="cursor-pointer absolute bottom-16 w-full">
                    <li className="w-full h-full p-5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                        <ArrowLeftOnRectangleIcon className="inline-block w-6 h-6"/> <label>Log out</label>
                    </li>
                </a>
            </ul>
        </div>
    </nav>
)

export default Sidebar