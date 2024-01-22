import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Slide({ imageUrl, text }) {
    const controls = useAnimation();

    const startAnimation = () => {
        controls.start({ x: 0 });
    };

    useEffect(() => {
        controls.start({ x: 0 });
    }, [imageUrl, text, controls]);

    return (
        <motion.div className="w-full cursor-pointer h-[100vh] bg-cover bg-no-repeat bg-center relative z-20 overflow-hidden">
            <img
                src={imageUrl}
                alt=""
                className="absolute z-[-1] w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-[70%] z-10"></div>
            <motion.div className="absolute w-full px-2 md:w-[50%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30">
                <motion.p
                    className="md:text-center font-semibold text-white font-roboto mb-5 tracking-wider md:text-lg lg:text-xl"
                    initial={{ y: 45 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Established with a passion for innovation and a commitment
                    to excellence. MB Developments stands at the forefront of
                    the ever-evolving technology landscape
                </motion.p>
                <motion.button
                    href="#"
                    className="rounded-full bg-blue-700 px-5 py-2.5 font-roboto font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 block md:m-auto"
                    initial={{ opacity: 0, x: 50 }}
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
