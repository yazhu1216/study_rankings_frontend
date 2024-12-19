import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function RegisterPage() {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        // verificationCode: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const isFormComplete = Object.values(formData).every((value) => value.trim() !== "");
    const isPhoneEntered = formData.phone.trim() !== "";

    const [timer, setTimer] = useState(0); // 倒數計時器

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // 清除對應欄位的錯誤訊息
        setErrors(prev => ({
            ...prev,
            [name]: ''
        }));
    };

    // 取得驗證碼
    const handleVerificationCode = (e) => {
        console.log("取得驗證碼");
        if (!isPhoneEntered) return;
        setTimer(30); // 設定倒數時間為 30 秒

    }
    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => {
                setTimer(timer - 1);
            }, 1000);

            return () => clearTimeout(countdown); // 清除計時器
        }
    }, [timer]);
    
    
    // 註冊
    const handleSubmit = async (e) => {

        e.preventDefault()
        const response = await register(formData);
        // 這個之後要改
        // if (response.success=true){
        if (!response.errors) {

            navigate("/verify-email");
        } else {
            setErrors(response.errors);

            console.log(response.errors);

            console.log("註冊失敗");

        }

        // 註冊成功後要去驗證email
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8 p-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Create an account
                </h2>
            </div>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900">
                            Name
                        </label>
                        <div className="mt-1">
                            <input
                                id="name"
                                name="name"
                                required
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.name}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900">
                            Phone
                        </label>
                        <div className="mt-1 flex items-center gap-2">
                            <input
                                id="phone"
                                name="phone"
                                required
                                onChange={handleChange}
                                className="w-3/4 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />

                            {timer > 0 ? <div className=" w-1/4 px-3 py-1.5 text-sm/6 font-semibold ">剩餘 {timer} 秒</div> : <button
                                type="button"
                                disabled={!isPhoneEntered}
                                onClick={handleVerificationCode}

                                className={` w-1/4 rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm ${isPhoneEntered
                                    ? "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    : "bg-gray-400 cursor-not-allowed"
                                    }`}
                            >Send

                            </button>}
                        </div>
                        {errors.phone && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.phone}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900">
                            Verification code
                        </label>
                        <div className="mt-1">
                            <input
                                id="verificationCode"
                                name="verificationCode"
                                required
                                // onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>

                    </div>
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900">
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900">
                            Confirm password
                        </label>
                        <div className="mt-1">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                        {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={!isFormComplete}
                            className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm ${isFormComplete
                                ? "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                : "bg-gray-400 cursor-not-allowed"
                                }`}
                        >
                            Create an account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}