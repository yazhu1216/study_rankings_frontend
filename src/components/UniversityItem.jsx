
export default function UniversityItem({ icon, course, location, ielts, fee }) {
    return (
        <li className="flex items-center justify-between px-4 py-3 border rounded-lg mb-2 hover:shadow-md transition-shadow">
            {/* 左側圖標 */}
            <div className="flex-shrink-0 w-12 h-12 mr-4">
                {icon ? (
                    <img src={icon} alt="university icon" className="w-full h-full object-cover rounded-full" />
                ) : (
                    <svg className="w-full h-full text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3L1 9l11 6l11-6L12 3zm0 18c-5 0-9-2.24-11-5.5V17l11 6l11-6v-4.5C21 18.76 17 21 12 21z" />
                    </svg>
                )}
            </div>

            {/* 主要資訊 */}
            <div className="flex-grow grid grid-cols-4 gap-4">
                <div className="flex items-center">
                    <span className="font-medium">{course}</span>
                </div>
                <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    </svg>
                    <span>{location}</span>
                </div>
                <div className="flex items-center">
                    <span>IELTS {ielts}</span>
                </div>
                <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                    </svg>
                    <span>{fee}</span>
                </div>
            </div>

            {/* 右側按鈕 */}
            <div className="flex-shrink-0 flex gap-2 ml-4">
                <button className="flex items-center px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                    加入比較
                </button>
                <div className="flex gap-2">
                    <button className="flex items-center px-3 py-1 bg-pink-500 text-white rounded hover:bg-pink-600 transition">
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </button>
                    <button className="flex items-center px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                        <span className="sr-only">More</span>
                    </button>
                </div>
            </div>
        </li>
    );
}