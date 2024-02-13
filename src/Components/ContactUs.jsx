import Button from "./Button";

export default function ContactUs() {
    return (
        <section className="py-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-[#444]">
                Contact Us
            </h2>
            <form action="" className="flex flex-col md:flex-row">
                <div className=" flex-1 self-center flex flex-col pe-6 gap-y-3">
                    <p className=" text-base text-[#444] ">
                        Hey there! 🚀 Ready to take the next step? Drop us a
                        line! Whether you have questions, ideas, or just want to
                        say hello, {"we're"} all ears. Fill out the form below,
                        and {"let's"} start a conversation that could lead to
                        something amazing. Your thoughts matter to us, and we
                        {" can't"} wait to hear from you! 📝💬
                    </p>
                    <div className=" flex md:flex-row flex-col gap-3">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="border px-2 py-4 flex-1 rounded-sm"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="border px-2 py-4 flex-1 rounded-sm"
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        className="border px-2 py-4 flex-1 rounded-sm"
                    />
                    <textarea
                        placeholder="Write your queries here"
                        className=" border px-2 py-4 flex-1 rounded-sm"
                    />
                    <div>
                        <Button text={"Submit"} />
                    </div>
                </div>
                <div className=" flex-1">
                    <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-5795988-4849052.png?f=webp"
                        alt=""
                        className=" w-10/12 block m-auto"
                    />
                </div>
            </form>
        </section>
    );
}
