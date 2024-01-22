import Header from "../Components/Header";
import Hero from "../Components/Hero";

export default function Homepage() {
    return (
        <div className="max-w-[1500px] m-auto">
            <Header />
            <Hero />
            <div className=" h-screen"></div>
        </div>
    );
}
