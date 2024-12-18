import UniversityItem from "./UniversityItem"

// 模擬資料
const universities = [
    {
        id: 1,
        icon: "/images/university1.svg",
        course: "Computer Science",
        location: "London, UK",
        ielts: "6.5",
        fee: "40,000"
    },
    {
        id: 2,
        icon: "/images/university1.svg",
        course: "Computer Science",
        location: "London, UK",
        ielts: "6.5",
        fee: "40,000"
    },
    {
        id: 3,
        icon: "/images/university1.svg",
        course: "Computer Science",
        location: "London, UK",
        ielts: "6.5",
        fee: "40,000"
    },
    {
        id: 4,
        icon: "/images/university1.svg",
        course: "Computer Science",
        location: "London, UK",
        ielts: "6.5",
        fee: "40,000"
    },
    {
        id: 5,
        icon: "/images/university1.svg",
        course: "Computer Science",
        location: "London, UK",
        ielts: "6.5",
        fee: "40,000"
    },
];

export default function UniversityList() {
    return (
        <div className="container mx-auto px-4 py-8">
            <ul className="space-y-4">
                {universities.map((university) => (
                    <UniversityItem
                        key={university.id}
                        icon={university.icon}
                        course={university.course}
                        location={university.location}
                        ielts={university.ielts}
                        fee={university.fee}
                    />
                ))}
            </ul>
        </div>
    )
}