import {BellAlertIcon, BriefcaseIcon, HomeIcon, SquaresPlusIcon, UserIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

const Navbar = ({ className }) => (
    <div className={`${className} w-full h-16 sm:block md:blcok lg:hidden xl:hidden 2xl:hidden block`}>
        <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white dark:bg-gray-900 shadow">
            <div id="tabs" className="flex justify-between">
                <Link href="/">
                    <span className="w-full focus:text-blue hover:text-blue justify-center inline-block text-center p-3">
                        <HomeIcon className="inline-block" width="25" height="25"/>
                    </span>
                </Link>
                <Link href="">
                    <span className="w-full focus:text-blue hover:text-blue justify-center inline-block text-center p-3">
                        <BellAlertIcon className="inline-block" width="25" height="25"/>
                    </span>
                </Link>
                <Link href="">
                    <span className="w-full focus:text-blue hover:text-blue justify-center inline-block text-center p-3">
                        <SquaresPlusIcon className="inline-block" width="25" height="25"/>
                    </span>
                </Link>
                <Link href="">
                    <span className="w-full focus:text-blue hover:text-blue justify-center inline-block text-center p-3">
                        <BriefcaseIcon className="inline-block" width="25" height="25"/>
                    </span>
                </Link>
                <Link href="profile">
                    <span className="w-full focus:text-blue hover:text-blue justify-center inline-block text-center p-3">
                        <UserIcon className="inline-block" width="25" height="25"/>
                    </span>
                </Link>
            </div>
        </section>
    </div>
)

export default Navbar