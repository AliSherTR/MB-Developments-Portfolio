import { Link } from "react-router-dom";
import Button from "./Button";

export default function AboutUs() {
    return (
        <section id="about-us" className="text-[#444] p-2 my-3 flex flex-col">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
                About Us
            </h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-5 ">
                <div className=" col-span-2 text-center py-8">
                    <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">
                        We’re Leading Software Developers & Publisher!
                    </h2>
                    <p className=" text-[#444] p-8  ">
                        Established with a passion for innovation and a
                        commitment to excellence, MB Developments stands at the
                        forefront of the ever-evolving technology landscape.
                        Driven by a culture of continuous learning and
                        adaptability, we thrive on challenges and strive to
                        exceed industry standards with each endeavor
                    </p>
                </div>
                <div className=" md:col-start-1 md:col-end-1 col-span-2 p-8 border">
                    <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/wireless-technology-4152285-3457276.png?f=webp"
                        alt=""
                        className=" w-1/4 block mb-3"
                    />
                    <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">
                        Latest Technology
                    </h2>{" "}
                    At MB Developemnts, we are pioneers in harnessing the latest
                    technological advancements to drive innovation and transform
                    businesses. With a proven track record of delivering
                    cutting-edge software solutions, we stand at the forefront
                    of the digital revolution. Our team of experts possesses a
                    deep understanding of emerging technologies, enabling us to
                    craft tailored solutions that propel our clients ahead of
                    the competition. Partner with us and experience the
                    difference.
                </div>
                <div className=" py-8 p-8 border">
                    <img
                        src="https://assets-global.website-files.com/63c5e29f1b5bc83fe0af2489/63c5e29f1b5bc8df8daf2ac3_2.png"
                        alt=""
                        className=" w-1/4 block mb-3"
                    />
                    <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">
                        Marketing Management
                    </h2>{" "}
                    At MB Developemnts, we are industry leaders in marketing
                    management, leveraging the latest strategies and
                    technologies to drive unparalleled success for our clients.
                    Our team of seasoned marketers possesses a wealth of
                    experience and expertise, guiding businesses to navigate the
                    ever-evolving landscape of digital marketing with precision
                    and innovation. From data-driven insights to cutting-edge
                    marketing automation tools, we stay ahead of the curve.
                </div>
            </div>
            <div className=" self-end">
                <Button location={"/about-us"} text={"Learn More"} />
            </div>

            {/* <div className="flex flex-col md:flex-row font-inter gap-y-3">
                <div className="flex-1 self-center pe-4 order-2">
                    <p className="text-base md:text-xl font-bold mb-5">
                        We’re Leading Software Developers & Publisher!
                    </p>
                    <p className=" mb-4 text-base md:text-lg">
                        Established with a passion for innovation and a
                        commitment to excellence, MB Developments stands at the
                        forefront of the ever-evolving technology landscape.
                    </p>
                    <ul className=" text-base md:text-lg ">
                        <li className=" mb-2 flex items-center gap-2">
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#444"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 12.75 6 6 9-13.5"
                                />
                            </svg>{" "}
                            Latest Technology
                        </li>
                        <li className="mb-2 flex items-center gap-2">
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#444"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 12.75 6 6 9-13.5"
                                />
                            </svg>{" "}
                            Marketing Management
                        </li>
                    </ul>
                    <div>
                        <Button location={"/about-us"} text={"Learn More"} />
                    </div>
                </div>
                <div className=" flex-1 md:order-3 order-1 relative min-h-[60vh] overflow-hidden">
                    <figure>
                        <img
                            src="https://img.freepik.com/free-vector/software-developers-programming-computer-with-script_74855-6661.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700352000&semt=ais"
                            alt=""
                            className=" absolute w-[50%] h-full rounded-lg z-0"
                        />
                    </figure>
                    <figure>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQB6CB1e3UvxQfqPNSQ532jlKi9lUY9PCnA&usqp=CAU"
                            alt=""
                            className="absolute inset-0 top-[50%] w-[70%] left-[70%] translate-x-[-50%] translate-y-[-50%] h-[150px] z-10 rounded-lg"
                        />
                    </figure>
                </div>
            </div> */}
        </section>
    );
}
