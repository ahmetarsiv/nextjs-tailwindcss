import Image from "next/image";
import noticeImage from "../../public/image-1@2x.jpg";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import UpcomingClasses from "./UpcomingClasses";
import UpNotice from "./UpNotice";

export default function Notice({className}) {
    return (
        <nav className={`${className} fixed right-0 top-[52px] rounded-lg drop-shadow-md sm:hidden md:hidden lg:block xl:block 2xl:block hidden p-3 w-64 h-screen`}>
            <div className="fixed right-0 top-0 bg-gray-50 dark:bg-gray-900 w-full h-screen overflow-auto">
                <div className="p-5">

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


                </div>
            </div>
        </nav>
    )
}