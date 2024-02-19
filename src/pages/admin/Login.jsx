import { useState } from "react";
import Button from "../../Components/Button";
import logo from "../../assets/logo.jpg";
import { ToastContainer, toast } from "react-toastify";
export default function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" });

    function resetForm() {
        setFormData({ username: "", password: "" });
    }
    function handleSumbit() {
        if (!formData.username) {
            toast.error("OOPS");
            resetForm();
            return;
        }
        if (!formData.password) {
            resetForm();
            return;
        }
        console.log(formData.username);
        console.log(formData.password);
    }
    return (
        <main className=" min-h-screen flex items-center justify-center flex-col">
            <ToastContainer position="top-left" />
            <div className="p-10 border shadow-lg rounded-lg md:w-1/3">
                <form className=" flex flex-col gap-5  mb-4 ">
                    <img
                        src={logo}
                        alt=""
                        className="block m-auto w-20 h-20 rounded-full"
                    />
                    <h1 className="font-semibold text-xl mb-4 text-center ">
                        MB Developements
                    </h1>

                    <div className=" flex flex-col gap-3">
                        <label
                            htmlFor="username"
                            className=" px-3 font-semibold text-[#444]"
                        >
                            User Name
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="px-3 py-4 border rounded-md font-inter"
                            placeholder="Enter Your User Name"
                            value={formData.username}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    username: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className=" flex flex-col gap-3">
                        <label
                            htmlFor="password"
                            className=" px-3 font-semibold text-[#444]"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="px-3 py-4 border rounded-md font-inter"
                            placeholder="Enter Your User Name"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                </form>
                <Button
                    text="Login"
                    onClick={() => {
                        handleSumbit();
                    }}
                />
            </div>
        </main>
    );
}
