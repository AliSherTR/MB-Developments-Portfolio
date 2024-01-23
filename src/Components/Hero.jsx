import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./Slide";
import { useState } from "react";
export default function Hero() {
    // const [heroItems, setHeroItems] = useState([]);

    // async function fetchHeroItems() {
    //     try {
    //         const res = await fetch(
    //             "http://localhost:1337/api/heroes?populate=*"
    //         );
    //         const data = await res.json();
    //         console.log(data);
    //     } catch (error) {
    //         console.error(error.message);
    //     }
    // }

    // fetchHeroItems();

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
        <>
            <Slider {...settings}>
                <Slide
                    imageUrl={
                        "https://media.istockphoto.com/id/1418475387/photo/robotic-hand-pressing-a-keyboard-on-a-laptop-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=SH8IT_AwvssL7wNgwQpl5PGo_IXt7aKd_TeV9UGFBic="
                    }
                />
                <Slide
                    imageUrl={
                        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmUlMjBjb21wYW55fGVufDB8fDB8fHww"
                    }
                />
                <Slide
                    imageUrl={
                        "https://media.istockphoto.com/id/1419766496/photo/abstract-concepts-of-cybersecurity-technology-and-digital-data-protection-protect-internet.webp?b=1&s=170667a&w=0&k=20&c=ymHzOpQBTrldJ5egITZZAgfc7PGmxZ2bP83eo-KjARM="
                    }
                />
                <Slide
                    imageUrl={
                        "https://plus.unsplash.com/premium_photo-1678565202188-f69b2e593998?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvZnR3YXJlJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
                    }
                />
            </Slider>
        </>
    );
}
