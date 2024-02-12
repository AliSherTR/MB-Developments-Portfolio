import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PageBanner from "../Components/PageBanner";
import SmallSolutionsCard from "../Components/SmallSolutionsCard";
import { smallSolutionsCard } from "../data";
import Loader from "../Components/Loader";

export default function AboutUsPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);
    if (loading)
        return (
            <div className=" h-screen flex items-center justify-center">
                <Loader />
            </div>
        );
    return (
        <div className=" relative">
            <Header />
            <PageBanner
                imageUrl={
                    "https://media.istockphoto.com/id/1418475387/photo/robotic-hand-pressing-a-keyboard-on-a-laptop-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=SH8IT_AwvssL7wNgwQpl5PGo_IXt7aKd_TeV9UGFBic="
                }
                page_link={"/about-us"}
                page_link_text={"About Us"}
            />
            <main className="p-6 max-w-[1200px] m-auto mt-4 flex flex-col gap-5">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-[#444] ">
                    About Us
                </h2>
                <div className="flex flex-col md:flex-row gap-y-4">
                    <div className=" mt-4 flex-1 pe-6">
                        <p className=" text-base md:text-lg text-[#444] ">
                            At MB Developments, we are more than just a software
                            house, we are the architects of cutting-edge
                            solutions that redefine possibilities. Established
                            with a passion for innovation and a commitment to
                            excellence, MB Developments stands at the forefront
                            of the ever-evolving technology landscape.
                        </p>
                    </div>
                    <div className=" flex-1">
                        <img
                            src="https://miro.medium.com/v2/resize:fit:848/0*vafo6t1qd2yv_g9O.png"
                            alt=""
                            className=" md:w-3/4 w-full block m-auto "
                        />
                    </div>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-[#444]">
                    Our Mission
                </h2>
                <div className="flex flex-col md:flex-row gap-y-4">
                    <div className=" mt-4 flex-1 pe-6">
                        <p className=" text-base md:text-lg text-[#444] ">
                            Our mission is to empower businesses and individuals
                            through tailored software solutions that seamlessly
                            integrate technology and creativity. We believe in
                            not just meeting but exceeding expectations, and our
                            team of dedicated professionals is driven by a
                            shared commitment to pushing the boundaries of
                            {` what's`} possible.
                        </p>
                    </div>
                    <div className=" flex-1">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ResKvW1RT7vIhnuhw8CKI3fzrhsqShwvzwfbROopv9tjDvtF6VqyNzAF-epNHm5S8K4&usqp=CAU"
                            alt=""
                            className=" md:w-3/4 w-full block m-auto "
                        />
                    </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-center text-[#444]">
                    Soultions tailored to your business
                </h2>
                <div className="grid lg:grid-cols-2 gap-y-4 gap-x-3">
                    {smallSolutionsCard.map((sol, i) => (
                        <SmallSolutionsCard
                            key={i}
                            heading={sol.heading}
                            text={sol.description}
                            imageUrl={sol.imageUrl}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
