import Head from 'next/head'
import Header from "./components/Header";
import Navbar from "./components/bar/Navbar";
import Input from "./components/Input";
import Button from "./components/Button";

export default function Table() {
    return (
        <div>
            <Head>
                <title>Next.js Tailwind Css</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header name="table"/>

            <main className="pt-16">
                <section className="container mx-auto">
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-1 p-5">
                        <form>
                            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                    <Input type="text" name="name" required/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                    <Input type="text" name="name" required/>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                    <Input type="text" name="name" required/>
                                </div>
                            </div>
                            <Button>Submit</Button>
                        </form>
                    </div>
                </section>
            </main>

            <Navbar/>
        </div>
    )
}