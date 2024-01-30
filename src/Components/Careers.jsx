export default function Careers() {
    return (
        <section
            id="careers"
            className=" my-3 text-white font-inter p-6 rounded-md"
            style={{
                backgroundImage:
                    "url(https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg)",
            }}
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 ">
                Careers
            </h2>
            <p className="mb-4 text-base md:text-lg">
                We Currently have no job/internship opening but you can send
                your resume to{" "}
                <a href="mailTo:xyz@gmail.com">
                    <b>xyz@gmail.com</b>
                </a>{" "}
                and we will get back to you in case there is an opening or we
                might create a new position for you who knows!!
            </p>
        </section>
    );
}
