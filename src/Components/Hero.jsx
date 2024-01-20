import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Hero() {
    const settings = {
        dots: false,
        fade: true,
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
        <Slider {...settings} className="">
            <div className="h-[90dvh] relative overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBtZWV0aW5nfGVufDB8fDB8fHww"
                    alt=""
                    className="absolute inset-0 -z-10 w-screen h-100 block "
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="text-2xl leading-10 text-white font-roboto relative z-20 ms-8 flex flex-col items-start justify-center h-full gap-8">
                    <p className=" w-[30%]">
                        Established with a passion for innovation and a
                        commitment to excellence. MB Developments stands at the
                        forefront of the ever-evolving technology landscape
                    </p>
                    <button>Get Started</button>
                </div>
            </div>

            <div className="h-[90dvh] relative overflow-hidden">
                <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                    alt=""
                    className="absolute inset-0 -z-10 w-screen h-100 block "
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="text-2xl leading-10 text-white font-roboto relative z-20 ms-8 flex flex-col items-start justify-center h-full gap-8">
                    <p className=" w-[30%]">
                        Established with a passion for innovation and a
                        commitment to excellence. MB Developments stands at the
                        forefront of the ever-evolving technology landscape
                    </p>
                    <button>Get Started</button>
                </div>
            </div>

            <div className="h-[90dvh] relative overflow-hidden">
                <img
                    src="https://st2.depositphotos.com/2001755/5443/i/450/depositphotos_54431143-stock-photo-beautiful-landscape.jpg"
                    alt=""
                    className="absolute inset-0 -z-10 w-screen h-100 block "
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="text-2xl leading-10 text-white font-roboto relative z-20 ms-8 flex flex-col items-start justify-center h-full gap-8">
                    <p className=" w-[30%]">
                        Established with a passion for innovation and a
                        commitment to excellence. MB Developments stands at the
                        forefront of the ever-evolving technology landscape
                    </p>
                    <button>Get Started</button>
                </div>
            </div>
        </Slider>
    );
}
