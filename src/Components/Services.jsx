import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <>
            <div className="p-2 font-inter text-[#444]">
                <h2 className=" text-5xl font-bold  mb-4">Our Services</h2>
                <p className="text-lg ">
                    At MB Developments, we offer a spectrum of services that
                    span the entire software development lifecycle. From
                    conceptualization to deployment and beyond, we specialize
                    in:
                </p>
            </div>
            <div className="grid grid-cols-3 gap-5 p-2">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </>
    );
}
