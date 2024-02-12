import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PageBanner from "../Components/PageBanner";

export default function ContactUsPage() {
    return (
        <div className=" relative">
            <Header />
            <PageBanner
                imageUrl={
                    "https://media.istockphoto.com/id/1418475387/photo/robotic-hand-pressing-a-keyboard-on-a-laptop-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=SH8IT_AwvssL7wNgwQpl5PGo_IXt7aKd_TeV9UGFBic="
                }
                page_link={"/contact-us"}
                page_link_text={"Contact Us"}
            />
            <main className="p-6 max-w-[1200px] m-auto mt-4 ">
                <ContactUs />
            </main>

            <Footer />
        </div>
    );
}
