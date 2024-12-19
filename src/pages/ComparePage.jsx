import CompareCard from '../components/CompareCard';

export default function ComparePage() {

    const data = [
        {
            imageSrc: '/images/university1.svg',
            schoolName: 'The University of Melbourne',
            course_name: 'Computer Science',
            tuition_fee: 98230,
            english_requirement: 'IELTS 6 ',
            location: 'Townsville',
            duration: '4 years full-time',
            au_rank: '12',
            world_rank: '85',
            ATAR: '58'
        },
        {
            imageSrc: '/images/university1.svg',
            schoolName: 'James Cook University',
            course_name: 'Bachelor of Engineering',
            tuition_fee: 41240,
            english_requirement: 'IELTS 6',
            location: 'Cairns',
            duration: '4 years full-time',
            au_rank: '40',
            world_rank: '105',
            ATAR: '58'
        },
        {
            imageSrc: '/images/university1.svg',
            schoolName: 'University of Western Sydney',
            course_name: "Bachelor of Tourism",
            tuition_fee: 38375,
            english_requirement: "IELTS 7",
            location: "Newcastle City",
            duration: "3 years",
            au_rank: '1',
            world_rank: '5',
            ATAR: '58'
        },
    ];
    return (
        <div className="flex flex-wrap items-center" style={{ height: '85vh' }}>
            <div className="w-30 p-4 rounded-md m-4 flex flex-col items-center text-center grid grid-rows-13" style={{ height: '100%' }}>
                <div className="w-full h-40 row-span-2.5">
                </div>
                <div>
                    <h2 className="text-lg font-bold row-span-2.5">學校</h2>
                </div>
                <div className="text-gray-600 row-span-1">科系</div>
                <div className="row-span-1">澳洲排名</div>
                <div className="row-span-1">世界排名</div>
                <div className="row-span-1">英文門檻</div>
                <div className="row-span-1">入學門檻</div>
                <div className="row-span-1">學費</div>
                <div className="row-span-1">學期區間</div>
                <div className="row-span-1">校區</div>
            </div>
            {data.map((item, index) => (
                <CompareCard key={index} item={item} />
            ))}
        </div>

    );
}