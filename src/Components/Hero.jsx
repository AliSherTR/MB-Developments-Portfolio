import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./Slide";
import { useState } from "react";
export default function Hero() {
    const [heroItems, setHeroItems] = useState([]);

    async function fetchHeroItems() {
        try {
            const res = await fetch(
                "http://localhost:1337/api/heroes?populate=*"
            );
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    fetchHeroItems();

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
                        "https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg"
                    }
                />
                <Slide
                    imageUrl={
                        "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705795200&semt=sph"
                    }
                />
            </Slider>
        </>
    );
}
