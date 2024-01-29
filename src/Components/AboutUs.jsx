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
                    <ul className=" text-base md:text-lg">
                        <li className=" mb-3">Latest Technology</li>
                        <li>Marketing Management</li>
                    </ul>
                </div>
                <div className=" flex-1 md:order-3 order-1">
                    <figure>
                        <img
                            src="https://img.freepik.com/free-vector/software-developers-programming-computer-with-script_74855-6661.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700352000&semt=ais"
                            alt=""
                            className="w-full h-full rounded-lg"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}
