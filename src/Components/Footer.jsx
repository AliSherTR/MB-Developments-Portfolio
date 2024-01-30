import { SocialIcon } from "react-social-icons";
import { HiChevronRight } from "react-icons/hi";

const socialUrl = [
    {
        name: "instagram",
        url: "https://instagram.com",
    },
    {
        name: "facebook",
        url: "https://facebook.com",
    },
    {
        name: "linkedin",
        url: "https://linkedin.com",
    },
    {
        name: "tiktok",
        url: "https://tiktok.com",
    },
];

const footerLinks = [
    {
        name: "Products",
        href: "#",
    },
    {
        name: "Features",
        href: "#",
    },
    {
        name: "Marketplace",
        href: "#",
    },
    {
        name: "Company",
        href: "#",
    },
];
console.log(socialUrl);

export default function Footer() {
    return (
        <footer
            style={{
                backgroundImage:
                    "url(https://wp.ditsolution.net/techno/wp-content/uploads/2022/08/footer-threee.jpg)",
            }}
        >
            <section
                id="footer"
                className="p-6 max-w-[1200px] m-auto grid md:grid-cols-3 gap-3 text-white"
            >
                <div>
                    <a
                        href="#"
                        className="block text-lg mb:text-xl lg:text-2xl font-bold font-inter mb-6"
                    >
                        MB Developements
                    </a>
                    <p className=" text-base lg:text-lg mb-4">
                        Completely strategize client-cent Phosfluorescently
                        iterate efficient internal or organic.
                    </p>
                    <h3 className=" text-lg font-semibold mb-6 ">Follow Us</h3>
                    <ul className=" flex items-center gap-3">
                        {socialUrl.map((media, i) => {
                            return (
                                <a href={media.url} target="blank" key={i}>
                                    <SocialIcon
                                        as="span"
                                        network={media.name}
                                        className="cursor-pointer w-1 h-1"
                                    />
                                </a>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <h3 className=" text-lg font-semibold mb-6 ">
                        Quick Links
                    </h3>
                    <ul className=" flex flex-col gap-6">
                        {footerLinks.map((link, i) => {
                            return (
                                <li
                                    className=" flex items-center gap-2 hover:underline ease-in-out duration-100"
                                    key={i}
                                >
                                    <HiChevronRight />
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <h3 className=" text-lg font-semibold mb-6 ">Contact Us</h3>
                </div>
            </section>
        </footer>
    );
}
