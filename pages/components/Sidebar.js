import {BellAlertIcon, BriefcaseIcon, HomeIcon, SquaresPlusIcon, UserIcon} from "@heroicons/react/24/outline";

const Sidebar = ({ className }) => (
    <nav className={`${className} rounded-lg bg-white drop-shadow-md sm:hidden md:hidden lg:block xl:block 2xl:block hidden p-3 w-96 h-full`}>
        <div>
            <ul className="list-none text-lg">
                <a href="#" className="cursor-pointer">
                    <li className="w-full h-full p-5 hover:bg-slate-50 rounded-lg">
                        <HomeIcon className="inline-block w-6 h-6"/> <label>Home</label>
                    </li>
                </a>
                <a href="#" className="cursor-pointer">
                    <li className="w-full h-full p-5 hover:bg-slate-50 rounded-lg">
                        <BellAlertIcon className="inline-block w-6 h-6"/> <label>Notification</label>
                    </li>
                </a>
                <a href="#" className="cursor-pointer">
                    <li className="w-full h-full p-5 hover:bg-slate-50 rounded-lg">
                        <SquaresPlusIcon className="inline-block w-6 h-6"/> <label>Exam</label>
                    </li>
                </a>
                <a href="#" className="cursor-pointer">
                    <li className="w-full h-full p-5 hover:bg-slate-50 rounded-lg">
                        <BriefcaseIcon className="inline-block w-6 h-6"/> <label>Company</label>
                    </li>
                </a>
                <a href="#" className="cursor-pointer">
                    <li className="w-full h-full p-5 hover:bg-slate-50 rounded-lg">
                        <UserIcon className="inline-block w-6 h-6"/> <label>Account</label>
                    </li>
                </a>
            </ul>
        </div>
    </nav>
)

export default Sidebar