const Header = ({ className, children }) => (
    <header className={`${className} fixed w-full bg-blue border-gray-200 px-2 sm:px-4 py-2.5`}>
        <div className="font-medium text-white text-2xl text-center sm:block md:blcok lg:blcok xl:blcok 2xl:blcok block">
            <a href="/">{children}</a>
        </div>

        {/*<div className="container mx-auto sm:hidden md:hidden lg:block xl:block 2xl:block hidden py-2.5">
            <div className="flex justify-between">
                <span className="font-medium text-white text-2xl">{children}</span>
                <a href="#">
                    <div className="flex text-white bg-blue-700 hover:bg-blue-900 rounded-lg">
                        <UserIcon className="w-12 h-12 mr-2"/>
                        <div className="inline-flex flex-col w-full">
                            <span className="font-bold">Example Name</span>
                            <span className="text-white- font-bold">Account</span>
                        </div>
                    </div>
                </a>
            </div>
            <ul className="text-white font-bold text-base list-none flex">
                <li><a href="#" className="pr-12 hover:text-blue-400">
                    <HomeIcon className="inline-block w-6 h-6 mb-1"/>
                </a></li>
                <li><a href="#" className="pr-12 hover:text-blue-400">Notification</a></li>
                <li><a href="#" className="pr-12 hover:text-blue-400">Exam</a></li>
                <li><a href="#" className="pr-12 hover:text-blue-400">Company</a></li>
            </ul>
        </div>*/}
    </header>
)

export default Header