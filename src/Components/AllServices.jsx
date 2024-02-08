import { useEffect } from "react";
import ServiceCard from "./ServiceCard";

const services = [
    {
        name: "Web Development",
        imageUrl:
            "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        list_items: [
            "Backend Development",
            "Frontend Development",
            "Full Stack Development",
            "Wordpress Development",
            "MERN Stack Development",
        ],
    },
    {
        name: "Project Management",
        imageUrl:
            "https://img.freepik.com/free-vector/project-management-business-multitasking-concept-flat-line-art-icons_126523-2192.jpg",

        list_items: [
            "Project Planning",
            "Team Coordination",
            "Risk Management",
        ],
    },
    {
        name: "Marketing",
        imageUrl:
            "https://t4.ftcdn.net/jpg/01/31/96/99/360_F_131969925_4npM7jqii8Dlo76mRROdD0r285Oojc8d.jpg",
        list_items: ["Employee Training", "Knowledge Sharing"],
    },
    {
        name: "Search Engine Optimization (SEO)",
        imageUrl:
            "https://www.ampfluence.com/wp-content/uploads/2021/04/Pinterest-SEO-Effective-Ways-to-Optimize-Pinterest-Profile.png",
        list_items: [
            "Google Analytics",
            "Google Search Score",
            "Moz Pro",
            "Yoast SEO",
        ],
    },
    {
        name: "Graphic Design",
        imageUrl:
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",

        list_items: [
            "Adobe Illustrator",
            "Adobe Photoshop",
            "Adobe After Effects",
            "Logo Designing",
        ],
    },
    {
        name: "UI/UX Design",
        imageUrl: "https://segwitz.com/wp-content/uploads/5757453-scaled.jpg",
        list_items: [
            "Figma",
            "Mobile App Desing",
            "Website Design",
            "Application Design",
        ],
    },
];
export default function AllServices() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on load
    }, []);

    return (
        <main
            className="p-6 max-w-[1200px] m-auto mt-4 flex flex-col gap-5"
            id="#services"
        >
            <div className="p-2 font-inter text-[#444]">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
                    Our Services
                </h2>
                <p className=" text-base md:text-lg ">
                    At MB Developments, we offer a spectrum of services that
                    span the entire software development lifecycle. From
                    conceptualization to deployment and beyond, we specialize
                    in:
                </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-3">
                {services.map((service, i) => (
                    <ServiceCard
                        key={i}
                        name={service.name}
                        listItems={service.list_items}
                        imageUrl={service.imageUrl}
                    />
                ))}
            </div>
        </main>
    );
}
