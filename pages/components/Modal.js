import Button from "./Button";
import Script from "next/script";
import Input from "./Input";

export default function Modal({...props}) {
    return (
        <div id="defaultModal" tabIndex="-1" aria-hidden="true"
             className="hidden overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 md:inset-0 w-screen h-screen" {...props}>
            <div className="absolute w-screen h-screen">
                <div className="relative bg-white w-screen h-screen shadow dark:bg-gray-900">
                    <div className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700" data-modal-toggle="defaultModal">
                        <span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
                    </div>

                    <div className="p-6 space-y-6">
                        <Input></Input>
                        <Button>Submit</Button>
                    </div>
                </div>
            </div>

            <Script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"/>
        </div>
    )
}
