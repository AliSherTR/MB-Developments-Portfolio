import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Hero() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        accessibility: false,
        arrows: false,
        autoplay: true,
    };
    return (
        <Slider {...settings}>
            <div className="w-full h-[90vh] bg-cover bg-no-repeat bg-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="text-2xl leading-10 text-white font-roboto relative z-20 flex  items-center justify-center h-full gap-8">
                    <p className=" text-center">
                        Established with a passion for innovation and a
                        commitment to excellence. MB Developments stands at the
                        forefront of the ever-evolving technology landscape
                        <button
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 block m-auto"
                        >
                            Get started
                        </button>
                    </p>
                </div>
            </div>

            {/* <div className="h-[90dvh] relative overflow-hidden">
                <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                    alt=""
                    className="absolute inset-0 -z-10 w-[100vw] h-[100vh]  block "
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="text-2xl leading-10 text-white font-roboto relative z-20 ms-8 flex flex-col items-center justify-center h-full gap-8">
                    <p className="md:w-[30%] ">
                        Established with a passion for innovation and a
                        commitment to excellence. MB Developments stands at the
                        forefront of the ever-evolving technology landscape
                    </p>
                    <a
                        href="#"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Get started
                    </a>
                </div>
            </div> */}
        </Slider>
    );
}
