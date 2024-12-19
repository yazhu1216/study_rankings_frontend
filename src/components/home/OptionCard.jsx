const OptionCard = ({ title, subtitle }) => {
    return (
        <div className="mx-auto bg-white shadow-md rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:bg-slate-100 transition">
            <h1 className="text-xl font-bold text-gray-800">{title}</h1>
            <p className="text-sm text-gray-500 mt-2">{subtitle}</p>
        </div>
    );
};
export default OptionCard;



