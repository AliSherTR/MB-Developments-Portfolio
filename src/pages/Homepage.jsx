import ChosseUs from "../Components/ChosseUs";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Services from "../Components/Services";

export default function Homepage() {
    return (
        <div className="">
            <Header />
            <Hero />
            <main className="p-6 max-w-[1200px] m-auto mt-4 flex flex-col gap-5">
                <Services />
                <ChosseUs />
            </main>
        </div>
    );
}
