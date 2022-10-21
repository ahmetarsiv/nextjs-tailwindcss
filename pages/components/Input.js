const Input = ({ disabled = false, className, ...props}) => (
    <input
        disabled={disabled}
        className={`${className} border border-purple-700 focus:border-purple-100 text-sm rounded-lg w-full p-2.5`}
        {...props}
    />
)

export default Input