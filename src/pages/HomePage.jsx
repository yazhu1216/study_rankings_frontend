import OptionCard from "../components/home/OptionCard";
import UniversityCard from "../components/home/UniversityCard";

const HomePage = () => {
    const options = [
        {
            title: "領域",
            subtitle: "依照學科科系、領域來搜尋學校",
        },
        {
            title: "國際牌名",
            subtitle: "依照國際牌名來搜尋學校",
        },
        {
            title: "地區",
            subtitle: "依照洲、領地來搜尋學校",
        },
    ];

    const data = [
        {
            imageSrc: "/images/university1.svg",
            schoolName: "The University of Melbourne",
            course_name: "Computer Science",
            rank: 1,
        },
        {
            imageSrc: "/images/university1.svg",
            schoolName: "James Cook University",
            course_name: "Bachelor of Engineering",
            rank: 2,
        },
        {
            imageSrc: "/images/university1.svg",
            schoolName: "University of Western Sydney",
            course_name: "Bachelor of Tourism",
            rank: 5,
        },
        {
            imageSrc: "/images/university1.svg",
            schoolName: "University of Western Sydney",
            course_name: "Bachelor of Tourism",
            rank: 5,
        },
    ];

    return (
        <div className="p-8 w-full flex flex-col items-center">
            {/* 問答區塊 */}
            <div className="w-2/3 p-8 border rounded-md shadow-md m-10 bg-slate-50 ">
                <h2 className="text-xl font-bold text-center mb-8">
                    要如何搜尋心目中理想的澳洲大學
                </h2>
                <div className="flex justify-center gap-8">
                    {options.map((item, key) => (
                        <OptionCard
                            key={key}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    ))}
                </div>
            </div>

            {/* 國際排名區塊 */}
            <div className="flex justify-between items-center mb-4 p-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                </svg>
                <div className="font-bold text-lg p-2">國際排名</div>
                <div className="grid grid-cols-4 gap-6 p-2">
                    {data.map((item, key) => (
                        <UniversityCard
                            key={key}
                            item={item}
                        />
                    ))}
                </div>
                <div className="p-6 font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer">
                    查看更多....
                </div>
            </div>
            <div className="flex justify-between items-center mb-4 p-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                </svg>
                <div className="font-bold text-lg p-2">熱門搜尋</div>
                <div className="grid grid-cols-4 gap-6 p-2">
                    {data.map((item, key) => (
                        <UniversityCard
                            key={key}
                            item={item}
                        />
                    ))}
                </div>
                <div className="p-6 font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer">
                    查看更多....
                </div>
            </div>
        </div>
    );
};

export default HomePage;
