import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <section id="testimonials" className=" my-3">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-[#444]">
                Testimonials
            </h2>
            <Carousel
                responsive={responsive}
                arrows={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
            >
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </Carousel>
        </section>
    );
}
