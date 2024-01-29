export default function AboutUs() {
    return (
        <section id="about-us" className="text-[#444] p-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
                About Us
            </h2>
            <div className="flex flex-col md:flex-row font-inter gap-y-3">
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

                    <a
                        href="#"
                        className="my-3 inline-block bg-[#125697] px-5 py-2.5 font-semibold text-white rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 font-inter "
                    >
                        Learn More &rarr;
                    </a>
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
            </div>
        </section>
    );
}
