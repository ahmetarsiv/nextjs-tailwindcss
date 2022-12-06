import Input from "/pages/components/Input";
import Button from "/pages/components/Button";
import Script from "next/script";

export default function Modal({...props}) {
    return (
        <div id="defaultModal" tabIndex="-1" aria-hidden="true"
             className="hidden overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 md:inset-0 w-screen h-screen" {...props}>
            <div className="absolute w-screen h-screen">
                <div className="relative bg-white w-screen h-screen shadow dark:bg-gray-900">

                    <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Send Support
                        </h3>
                        <button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
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
