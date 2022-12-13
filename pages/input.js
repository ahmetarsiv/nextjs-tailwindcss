import Head from 'next/head'
import {
    CloudArrowUpIcon
} from "@heroicons/react/24/outline";
import Footer from "./components/Footer";
import Navbar from "./components/bar/Navbar";
import Header from "./components/Header";
import Alert from "./components/Alert";

export default function Input() {
    return (
        <div>
            <Head>
                <title>Next.js Tailwind Css</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header name="input"/>

            <main className="pt-16">
                <section className="container mx-auto">
                    <Alert type="Info alert!" message="You can get the input components here"/>

                    <div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-1 p-5">
                        <div className="mb-5">
                            <label
                                className="cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-purple-400 p-6">
                                <CloudArrowUpIcon className="h-10 w-10 text-blue"/>
                                <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">Image File</h2>
                                <p className="mt-2 text-gray-500 tracking-wide">Upload or darg & drop your file SVG,
                                    PNG, JPG or GIF.</p>
                                <input type="file" className="hidden"/>
                            </label>
                        </div>
                    </div>
                </section>
            </main>

            <Navbar/>
        </div>
    )
}