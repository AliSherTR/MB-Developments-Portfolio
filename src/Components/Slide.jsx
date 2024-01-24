import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Slide({ imageUrl, text, featureLine }) {
    const controls = useAnimation();

    const startAnimation = () => {
        controls.start({ x: 0 });
    };

    useEffect(() => {
        controls.start({ x: 0 });
    }, [imageUrl, text, controls]);

    return (
        <motion.div className="w-full cursor-pointer md:h-[100vh] h-[50vh] bg-cover bg-no-repeat bg-center relative z-20 overflow-hidden">
            <img
                src={imageUrl}
                alt=""
                className="absolute block z-[-1] w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-[30%] z-10"></div>
            <motion.div className="absolute w-full px-2 md:w-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30">
                <motion.p
                    className="md:text-center font-semibold text-white font-roboto leading-6 lg:leading-[90.34px] mb-5 tracking-wider md:text-2xl lg:text-6xl"
                    initial={{ y: 300 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {text}{" "}
                    <span className=" px-2 py-[0.3px] bg-white rounded-md text-[#FF4C54] font-bold text-base md:text-2xl lg:text-6xl">
                        {" "}
                        {featureLine}
                    </span>{" "}
                </motion.p>
                <motion.button
                    href="#"
                    className="rounded-md bg-[#125697] px-5 py-2.5 font-semibold text-white focus-visible:outline focus-visible:outline-2 text-lg font-inter focus-visible:outline-offset-2 focus-visible:outline-blue-[#125697
                    ] block md:m-auto text-sm md:text-base"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    onClick={startAnimation}
                >
                    Get started
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
