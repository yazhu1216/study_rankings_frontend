import SearchInput from "../components/SearchInput";
import UniversityList from "../components/UniversityList";
import { useState } from "react";


export default function SearchPage() {
    const [searchValues, setSearchValues] = useState({
        university: '',
        course: '',
        location: '',
        englishRequirement: '',
        minTuitionFee: '',
        maxTuitionFee: ''
    });

    const handleInputChange = (key) => (value) => {
        setSearchValues(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto p-8">
                <h1 className="text-2xl font-bold mb-8 text-center">Search Page</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="grid grid-cols-3 gap-6">
                        <SearchInput
                            labelName="university"
                            value={searchValues.university}
                            onChange={handleInputChange('university')}
                        />
                        <SearchInput
                            labelName="course"
                            value={searchValues.course}
                            onChange={handleInputChange('course')}
                        />
                        <SearchInput
                            labelName="location"
                            value={searchValues.location}
                            onChange={handleInputChange('location')}
                        />
                        <SearchInput
                            labelName="english requirement"
                            value={searchValues.englishRequirement}
                            onChange={handleInputChange('englishRequirement')}
                        />
                        <SearchInput
                            labelName="min tuition fee"
                            value={searchValues.minTuitionFee}
                            onChange={handleInputChange('minTuitionFee')}
                        />
                        <SearchInput
                            labelName="max tuition fee"
                            value={searchValues.maxTuitionFee}
                            onChange={handleInputChange('maxTuitionFee')}
                        />
                    </div>
                </div>
                <div className="w-full flex justify-end my-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            // 在這裡處理比較邏輯
                            console.log('開始比較');
                        }}
                    >
                        開始比較
                    </button>
                </div>
                <UniversityList />
            </div>
        </div>


    );
}