import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Services from "../Components/Services";

export default function Homepage() {
    return (
        <div className="">
            <Header />
            <Hero />
            <div className="p-6 max-w-[1300px] m-auto mt-4">
                <Services />
            </div>
        </div>
    );
}
