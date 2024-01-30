export default function TestimonialCard() {
    return (
        <div className=" font-inter border me-2 p-6 text-center rounded-md text-[#444] hover:bg-blue-900 hover:text-white hover:translate-y-[-10px] ease-in-out duration-500">
            <p className=" text-sm md:text-base font-inter ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                expedita. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sit sunt nulla libero, nemo incidunt tempora deserunt!
                Eligendi aut aliquid tempore porro maxime, laudantium quibusdam
                eius iure impedit sint ducimus itaque.
            </p>
            <img
                src="https://bebopbusiness.no/wp-content/uploads/2016/12/spearker_1-300x300.jpg"
                alt=""
                className=" w-10 h-10 rounded-full block m-auto mt-10"
            />
            <span className=" block m-auto mt-2">John Green</span>
        </div>
    );
}
