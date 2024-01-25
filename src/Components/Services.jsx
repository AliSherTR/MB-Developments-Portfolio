import ServiceCard from "./ServiceCard";

const services = [
    {
        name: "Software Development",
        imageUrl:
            "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        list_items: [
            "Custom Software Development",
            "Backend Development",
            "Frontend Development",
            "Full Stack Development",
            "Wordpress Development",
        ],
    },
    {
        name: "Project Management",
        imageUrl:
            "https://img.freepik.com/free-vector/project-management-business-multitasking-concept-flat-line-art-icons_126523-2192.jpg",

        list_items: [
            "Project Planning",
            "Backend Development",
            "Team Coordination",
            "Risk Management",
        ],
    },
    {
        name: "Skill Development",
        imageUrl:
            "https://t4.ftcdn.net/jpg/01/31/96/99/360_F_131969925_4npM7jqii8Dlo76mRROdD0r285Oojc8d.jpg",
        list_items: ["Employee Training", "Knowledge Sharing"],
    },
];
export default function Services() {
    return (
        <div className=" flex-col">
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
            <a
                href="#"
                className=" items-start inline-block my-3 bg-[#125697] px-5 py-2.5 font-semibold text-white rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 font-inter "
            >
                See More &rarr;
            </a>
        </div>
    );
}
