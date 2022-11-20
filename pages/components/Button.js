const Button = ({ type = 'submit', className, ...props}) => (
    <button
        type={type}
        className={`${className} text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800`}
        {...props}/>
)

export default Button