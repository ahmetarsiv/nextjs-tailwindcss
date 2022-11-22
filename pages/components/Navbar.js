import {BellAlertIcon, BriefcaseIcon, HomeIcon, SquaresPlusIcon, UserIcon} from "@heroicons/react/24/outline";

const Navbar = ({ className }) => (
    <div className={`${className} w-full h-16 sm:block md:blcok lg:hidden xl:hidden 2xl:hidden block`}>
        <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white dark:bg-gray-900 shadow">
            <div id="tabs" className="flex justify-between">
                <a href="/"
                   className="w-full focus:text-purple-800 hover:text-purple-800 justify-center inline-block text-center pt-2 pb-1">
                    <HomeIcon className="inline-block mb-1" width="25" height="25"/>
                    <span className="tab tab-home block text-xs">Home</span>
                </a>
                <a href="#"
                   className="w-full focus:text-purple-800 hover:text-purple-800 justify-center inline-block text-center pt-2 pb-1">
                    <BellAlertIcon className="inline-block mb-1" width="25" height="25"/>
                    <span className="tab tab-kategori block text-xs">Notification</span>
                </a>
                <a href="#"
                   className="w-full focus:text-purple-800 hover:text-purple-800 justify-center inline-block text-center pt-2 pb-1">
                    <SquaresPlusIcon className="inline-block mb-1" width="25" height="25"/>
                    <span className="tab tab-explore block text-xs">Exam</span>
                </a>
                <a href="#"
                   className="w-full focus:text-purple-800 hover:text-purple-800 justify-center inline-block text-center pt-2 pb-1">
                    <BriefcaseIcon className="inline-block mb-1" width="25" height="25"/>
                    <span className="tab tab-whishlist block text-xs">Company</span>
                </a>
                <a href="profile"
                   className="w-full focus:text-purple-800 hover:text-purple-800 justify-center inline-block text-center pt-2 pb-1">
                    <UserIcon className="inline-block mb-1" width="25" height="25"/>
                    <span className="tab tab-account block text-xs">Account</span>
                </a>
            </div>
        </section>
    </div>
)

export default Navbar