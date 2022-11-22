import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
    ArrowRightOnRectangleIcon,
    BookmarkIcon, CalendarDaysIcon,
    ChatBubbleLeftRightIcon, CheckCircleIcon, ChevronRightIcon, ComputerDesktopIcon,
    DevicePhoneMobileIcon, DocumentCheckIcon,
    EnvelopeOpenIcon, MapPinIcon,
    PencilSquareIcon,
    UserIcon
} from "@heroicons/react/24/outline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";

export default function Profile() {
    return (
        <div>
            <Head>
                <title>Next.js Tailwind Css</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header children="profile"/>

            <main className={styles.main}>
                <section className="container mx-auto">
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-1 shadow-md">
                        <div className="border-b dark:border-gray-700 p-5">
                            <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg w-10 h-10 absolute right-5 md:right-44 p-2">
                                <PencilSquareIcon className="text-purple-800 w-6 h-6"/>
                            </div>
                            <UserIcon className="text-purple-800 w-12 h-12 mr-2 float-left"/>
                            <span className="text-xl font-medium">Example Name</span>
                        </div>

                        <div className="border-b dark:border-gray-700 p-5">
                            <EnvelopeOpenIcon className="text-purple-800 w-6 h-6 mr-2 float-left"/>
                            <span className="text-zinc-500">user@example.com</span>
                            <CheckCircleIcon className="text-purple-800 w-6 h-6  float-right"/>
                        </div>

                        <div className="p-5">
                            <DevicePhoneMobileIcon className="text-purple-800 w-6 h-6 mr-2 float-left"/>
                            <span className="text-zinc-500">+90 555 555 55 55</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-1 shadow-md mt-20">
                        <Modal></Modal>
                        <a href="#" data-modal-toggle="defaultModal" className="border-b dark:border-gray-700 hover:bg-slate-50 focus:bg-slate-50 dark:hover:bg-gray-900 dark:focus:bg-gray-900 w-full h-full p-5">
                            <div>
                                <ChatBubbleLeftRightIcon className="text-purple-800 w-6 h-6 mr-2 float-left"/>
                                <span className="text-zinc-500">Destek</span>
                                <span className="bg-yellow-400 text-purple-800 rounded-lg text-xs font-medium p-1 ml-10">Yeni</span>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </div>
                        </a>

                        <a href="#" className="border-b dark:border-gray-700 hover:bg-slate-50 focus:bg-slate-50 dark:hover:bg-gray-900 dark:focus:bg-gray-900 w-full h-full p-5">
                            <div>
                                <MapPinIcon className="text-purple-800 w-6 h-6 mr-2 float-left"/>
                                <span className="text-zinc-500">Adreslerim</span>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </div>
                        </a>

                        <a href="#" className="border-b dark:border-gray-700 hover:bg-slate-50 focus:bg-slate-50 dark:hover:bg-gray-900 dark:focus:bg-gray-900 w-full h-full p-5">
                            <div>
                                <BookmarkIcon className="text-purple-800 w-6 h-6 mr-2 float-left"/>
                                <span className="text-zinc-500">Derslerim</span>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </div>
                        </a>

                        <a href="#" className="border-b dark:border-gray-700 hover:bg-slate-50 focus:bg-slate-50 dark:hover:bg-gray-900 dark:focus:bg-gray-900 w-full h-full p-5">
                            <div>
                                <DocumentCheckIcon className="text-purple-800 w-6 h-6 mr-2 float-left"/>
                                <span className="text-zinc-500">Sonuçlarım</span>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </div>
                        </a>

                        <a href="#" className="border-b dark:border-gray-700 hover:bg-slate-50 focus:bg-slate-50 dark:hover:bg-gray-900 dark:focus:bg-gray-900 w-full h-full p-5">
                            <div>
                                <CalendarDaysIcon className="text-purple-800 w-6 h-6 mr-2 float-left"/>
                                <span className="text-zinc-500">Randevularım</span>
                                <span className="bg-yellow-400 text-purple-800 rounded-lg text-xs font-medium p-1 ml-10">Yeni</span>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </div>
                        </a>

                        <a href="#" className="border-b dark:border-gray-700 hover:bg-slate-50 focus:bg-slate-50 dark:hover:bg-gray-900 dark:focus:bg-gray-900 w-full h-full p-5">
                            <div>
                                <ComputerDesktopIcon className="text-purple-800 w-6 h-6 mr-2 float-left"/>
                                <span className="text-zinc-500">Canlı Derslerim</span>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </div>
                        </a>

                        <a href="#" className="border-b dark:border-gray-700 hover:bg-slate-50 focus:bg-slate-50 dark:hover:bg-gray-900 dark:focus:bg-gray-900 w-full h-full p-5">
                            <div>
                                <ArrowRightOnRectangleIcon className="text-purple-800 w-6 h-6 mr-2 float-left"/>
                                <span className="text-zinc-500">Çıkış Yap</span>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </div>
                        </a>
                    </div>


                    <div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-1 shadow-md mt-5">
                        <label className="text-zinc-500 text-xs pl-5">Versiyon</label>
                        <a href="#" className="border-b dark:border-gray-700 hover:bg-slate-50 focus:bg-slate-50 dark:hover:bg-gray-900 dark:focus:bg-gray-900 w-full h-full p-5">
                            <div>
                                <span className="text-zinc-500">2.13.12</span>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </div>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-1 shadow-md mt-20">
                        <label className="text-zinc-500 text-xs pl-5">Language - Dil</label>
                        <a href="#" className="border-b dark:border-gray-700 hover:bg-slate-50 focus:bg-slate-50 dark:hover:bg-gray-900 dark:focus:bg-gray-900 w-full h-full p-5">
                            <div>
                                <span className="text-zinc-500">Türkçe</span>
                                <ChevronRightIcon className="text-purple-800 w-6 h-6 float-right"/>
                            </div>
                        </a>
                    </div>
                </section>
            </main>

            <script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"/>

            <Footer className={styles.footer}/>

            <Navbar/>
        </div>
    )
}