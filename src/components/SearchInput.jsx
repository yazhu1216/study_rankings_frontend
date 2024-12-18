
export default function SearchInput({
    labelName,
    placeholder = '',
    value = '',
    onChange
}) {
    return (
        <div className="flex flex-col gap-2 mb-4 w-full max-w-md">
            <label
                htmlFor={labelName}
                className="text-sm font-medium text-gray-700 capitalize"
            >
                {labelName}
            </label>
            <input
                type="text"
                id={labelName}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md 
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                          hover:border-gray-400 transition-colors
                          text-sm"
            />
        </div>
    );
}