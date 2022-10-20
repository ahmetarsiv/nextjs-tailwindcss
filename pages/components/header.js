const Header = ({ className, children }) => (
    <header className={`${className} bg-purple-800 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 text-center`}>
        <span className="text-white font-medium text-yellow-400 text-2xl">
            <a href="#">{children}</a>
        </span>
    </header>
)

export default Header