import { Link } from "react-router-dom"; // 如果使用 React Router

const UniversityCard = ({ item }) => {
    return (
        <Link
            // to={`/university/${item.schoolName}`}
            className="w-30 bg-white shadow-md rounded-lg border border-gray-200 p-4 flex flex-col items-center hover:shadow-lg hover:bg-slate-100 transition"
        >
            <div className="w-full h-24 mb-2" >
                <img
                    src={item.imageSrc}
                    alt={item.schoolName}
                    className="w-full h-full object-contain rounded-md"
                />
            </div>
            <p className="text-center font-semibold">{item.schoolName}</p>
            <p className="text-sm text-gray-500">{item.course_name}</p>
        </Link>
    );
};
export default UniversityCard;

