import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
    BellAlertIcon, BriefcaseIcon, ChevronRightIcon, CloudArrowUpIcon,
    HomeIcon, InformationCircleIcon, SquaresPlusIcon,
    UserIcon
} from "@heroicons/react/24/outline";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Alert from "./components/alert";

export default function Input() {
    return (
        <div>
            <Head>
                <title>Next.js Tailwind Css</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header children="input"/>

            <main className={styles.main}>
                <section className="container mx-auto">
                    <Alert type="Info alert!" message="You can get the input components here"/>

                    <div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-1 p-5">
                        <div className="mb-5">
                            <label className="cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-purple-400 p-6">
                                <CloudArrowUpIcon className="h-10 w-10 text-purple-800"/>
                                <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">Image File</h2>
                                <p className="mt-2 text-gray-500 tracking-wide">Upload or darg & drop your file SVG,
                                    PNG, JPG or GIF.</p>
                                <input type="file" className="hidden"/>
                            </label>
                        </div>

                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
                            <select multiple id="countries_multiple" className="overflow-hidden border border-dashed border-purple-400 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:border-purple-600 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500">
                                <option selected>Choose countries</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="purple-toggle" className="inline-flex relative items-center mr-5 cursor-pointer">
                                <input type="checkbox" id="purple-toggle" className="sr-only peer" checked/>
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                            </label>
                        </div>
                    </div>
                </section>
            </main>

            <Footer className={styles.footer}/>

            <Navbar/>
        </div>
)
}