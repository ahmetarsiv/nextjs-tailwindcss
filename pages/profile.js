import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
    ArrowRightOnRectangleIcon, BellAlertIcon,
    BookmarkIcon, BriefcaseIcon, CalendarDaysIcon,
    ChatBubbleLeftRightIcon, ChevronRightIcon, ComputerDesktopIcon,
    DevicePhoneMobileIcon, DocumentCheckIcon,
    EnvelopeOpenIcon, HomeIcon, MapPinIcon,
    PencilSquareIcon, SquaresPlusIcon,
    UserIcon
} from "@heroicons/react/24/outline";

export default function Profile() {
    return (
        <div>
            <Head>
                <title>Next.js Tailwind Css</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className="bg-purple-800 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 text-center">
                <span className="text-white font-medium text-yellow-400 text-2xl">
                    <a href="#">profile</a>
                </span>
            </header>

            <main className={styles.main}>
                <section className="container mx-auto">
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-1 shadow-md pl-5">
                        <div>
                            <div className="bg-white shadow-md rounded-lg w-10 h-10 absolute right-5 md:right-44 p-2">
                                <PencilSquareIcon className="text-purple-800 w-6 h-6"/>
                            </div>
                            <label className="mr-2">
                                <UserIcon className="text-purple-800 w-12 h-12 float-left"/>
                            </label>
                            <span className="text-xl font-medium">Example Name</span>
                        </div>

                        <hr className="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"/>

                        <div>
                            <label className="mr-2">
                                <EnvelopeOpenIcon className="text-purple-800 w-6 h-6 float-left"/>
                            </label>
                            <span className="text-zinc-500">user@example.com</span>
                        </div>

                        <hr className="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"/>

                        <div className="mb-5">
                            <label className="mr-2">
                                <DevicePhoneMobileIcon className="text-purple-800 w-6 h-6 float-left"/>
                            </label>
                            <span className="text-zinc-500">+90 555 555 55 55</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-1 shadow-md mt-20 pl-5">
                        <div>
                            <label className="mr-2">
                                <ChatBubbleLeftRightIcon className="text-purple-800 w-6 h-6 float-left"/>
                            </label>
                            <span className="text-zinc-500">Destek</span>
                            <span
                                className="bg-yellow-400 text-purple-800 rounded-lg text-xs font-medium p-1 ml-10">Yeni</span>
                            <label>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </label>
                        </div>

                        <hr className="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"/>

                        <div>
                            <label className="mr-2">
                                <MapPinIcon className="text-purple-800 w-6 h-6 float-left"/>
                            </label>
                            <span className="text-zinc-500">Adreslerim</span>
                            <label>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </label>
                        </div>

                        <hr className="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"/>

                        <div>
                            <label className="mr-2">
                                <BookmarkIcon className="text-purple-800 w-6 h-6 float-left"/>
                            </label>
                            <span className="text-zinc-500">Derslerim</span>
                            <label>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </label>
                        </div>

                        <hr className="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"/>

                        <div>
                            <label className="mr-2">
                                <DocumentCheckIcon className="text-purple-800 w-6 h-6 float-left"/>
                            </label>
                            <span className="text-zinc-500">Sonuçlarım</span>
                            <label>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </label>
                        </div>

                        <hr className="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"/>

                        <div>
                            <label className="mr-2">
                                <CalendarDaysIcon className="text-purple-800 w-6 h-6 float-left"/>
                            </label>
                            <span className="text-zinc-500">Randevularım</span>
                            <span
                                className="bg-yellow-400 text-purple-800 rounded-lg text-xs font-medium p-1 ml-10">Yeni</span>
                            <label>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </label>
                        </div>

                        <hr className="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"/>

                        <div>
                            <label className="mr-2">
                                <ComputerDesktopIcon className="text-purple-800 w-6 h-6 float-left"/>
                            </label>
                            <span className="text-zinc-500">Canlı Derslerim</span>
                            <label>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </label>
                        </div>

                        <hr className="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"/>

                        <div className="mb-5">
                            <label className="mr-2">
                                <ArrowRightOnRectangleIcon className="text-purple-800 w-6 h-6 float-left"/>
                            </label>
                            <span className="text-zinc-500">Çıkış Yap</span>
                            <label>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-1 shadow-md mt-20 pl-5">
                        <label className="text-zinc-500 text-xs">Language - Dil</label>
                        <div className="my-5">
                            <span className="text-zinc-500">Türkçe</span>
                            <label>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-1 shadow-md mt-5 pl-5">
                        <label className="text-zinc-500 text-xs">Versiyon</label>
                        <div className="my-5">
                            <span className="text-zinc-500">2.13.12</span>
                            <label>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </label>
                        </div>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                   target="_blank"
                   rel="noopener noreferrer">
                    <span className={styles.logo}><Image src="/vercel.svg" alt="Vercel Logo" width={72}
                                                         height={16}/></span>
                </a>
            </footer>

            <div className="w-full h-screen">
                <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
                    <div id="tabs" className="flex justify-between">
                        <a href="#"
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
                        <a href="#"
                           className="w-full focus:text-purple-800 hover:text-purple-800 justify-center inline-block text-center pt-2 pb-1">
                            <UserIcon className="inline-block mb-1" width="25" height="25"/>
                            <span className="tab tab-account block text-xs">Account</span>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}