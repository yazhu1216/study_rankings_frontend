export default function CompareCard({ item }) {
    return (
        <div className="w-64 p-4 border rounded-md shadow-md m-4 flex flex-col items-center text-center grid grid-rows-13" style={{ height: '100%' }}>
            <div className="w-full h-40 row-span-2.5">
                <img src={item.imageSrc} alt={item.schoolName} className="w-full h-full object-contain rounded-md" />
            </div>
            <div>
                <h2 className="text-lg font-bold row-span-2.5">{item.schoolName}</h2>
            </div>
            <div className="text-gray-600 row-span-1">{item.course_name}</div>
            <div className="row-span-1">澳洲 {item.au_rank}</div>
            <div className="row-span-1">世界 {item.world_rank}</div>
            <div className="row-span-1">{item.english_requirement}</div>
            <div className="row-span-1">ATAR {item.ATAR}</div>
            <div className="row-span-1">AUD {item.tuition_fee}</div>
            <div className="row-span-1">{item.duration}</div>
            <div className="row-span-1">{item.location}</div>
        </div>
    );
}