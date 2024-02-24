import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./Slide";
import { useEffect, useState } from "react";
import { fetchHeroes } from "../utils/helpers";
export default function Hero() {
    const [hereos, setHeroes] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await fetchHeroes();
            setHeroes(data);
        }
        fetchData();
    });
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

    if (!hereos?.length) {
        return (
            <Slider {...settings}>
                <Slide
                    imageUrl={
                        "https://media.istockphoto.com/id/1418475387/photo/robotic-hand-pressing-a-keyboard-on-a-laptop-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=SH8IT_AwvssL7wNgwQpl5PGo_IXt7aKd_TeV9UGFBic="
                    }
                    featureLine={"A New Future"}
                    text={"Defining the future with latest technology and"}
                />
                <Slide
                    imageUrl={
                        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmUlMjBjb21wYW55fGVufDB8fDB8fHww"
                    }
                    featureLine={"Full Stack"}
                    text={"The Best devs at work"}
                />
                <Slide
                    imageUrl={
                        "https://media.istockphoto.com/id/1419766496/photo/abstract-concepts-of-cybersecurity-technology-and-digital-data-protection-protect-internet.webp?b=1&s=170667a&w=0&k=20&c=ymHzOpQBTrldJ5egITZZAgfc7PGmxZ2bP83eo-KjARM="
                    }
                    featureLine={"Innovation"}
                    text={"Defining the future with latest technology and"}
                />
                <Slide
                    imageUrl={
                        "https://plus.unsplash.com/premium_photo-1678565202188-f69b2e593998?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvZnR3YXJlJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
                    }
                    featureLine={"A New Future"}
                    text={"Defining the future with latest technology and"}
                />
            </Slider>
        );
    }
    return (
        <>
            <Slider {...settings}>
                {hereos?.map((hero) => (
                    <Slide
                        imageUrl={hero.heroImage}
                        key={hero._id}
                        featureLine={hero.punchLine}
                        text={hero.description}
                    />
                ))}
            </Slider>
        </>
    );
}
