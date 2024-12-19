import React from "react";

export default function VerifyEmailPage() {
    const handleResendEmail = () => {
        alert("Verification email has been resent.");
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center  flex  flex-col items-center justify-center ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-16 mx-auto mb-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                    />
                </svg>

                <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Verify your email address
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                    Please click on the link in the email we just sent you to confirm your email address.
                </p>
                <button
                    onClick={handleResendEmail}
                    className="text-indigo-600 font-medium hover:underline mb-4 block"
                >
                    Resend Email
                </button>
            </div>
        </div>
    );
}
