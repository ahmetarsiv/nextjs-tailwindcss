import Link from "next/link";
import UpcomingClasses from "./UpcomingClasses";
import UpNotice from "./UpNotice";

export default function Notice({className}) {
    return (
        <nav className={`${className} fixed top-0 right-0 bg-gray-50 dark:bg-gray-900 rounded-lg drop-shadow-md sm:hidden md:hidden lg:block xl:block 2xl:block hidden overflow-auto w-64 h-screen my-4 pt-14 px-5`}>
            <div className="mt-5">
                <h3 className="text-xl font-bold dark:text-white"><Link href="">Upcoming Classes</Link></h3>
            </div>

            <div className="my-10">
                <span className="bg-purple-100 text-blue text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">31 december</span>
                <UpcomingClasses time="09:00" desc="GDM 2nd semester" title="One-line drawing method"/>
            </div>

            <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"/>

            <div className="mt-5">
                <h3 className="text-xl font-bold dark:text-white"><Link href="">Notice</Link></h3>
            </div>

            <div className="my-10">
                <UpNotice title="Art now series presents catherine burgess" time="3 days ago"/>
            </div>
        </nav>
    )
}