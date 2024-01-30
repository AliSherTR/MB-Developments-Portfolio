import AboutUs from "../Components/AboutUs";
import Careers from "../Components/Careers";
import ChosseUs from "../Components/ChosseUs";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import OurTeam from "../Components/OurTeam";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";

export default function Homepage() {
    return (
        <div className="">
            <Header />
            <Hero />
            <main className="p-6 max-w-[1200px] m-auto mt-4 flex flex-col gap-5">
                <AboutUs />
                <Services />
                <ChosseUs />
                <Careers />
                <OurTeam />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
}
