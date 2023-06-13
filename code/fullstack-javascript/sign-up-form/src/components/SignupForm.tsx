import { useState } from "react";

const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="selection:bg-indigio-500 selection:text-white">
            <div className="flex justify-center items-center">
                <div className="p-8 flex-1">
                    <div className="mx-auto overflow-hidden">
                        <div className="p-8">
                            <h1 className="text-5xl font-bold text-indigo-600">
                                Create account
                            </h1>

                            <form action="" method="POST" className="mt-12">
                                <div className="relative">
                                    <input type="text" id="name" className="peer h-10 w-full border-b-2 bprder-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600" placeholder="name" />
                                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all"></label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default SignupForm;