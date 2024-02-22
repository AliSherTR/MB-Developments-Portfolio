export default function AddHeroForm({ onclick }) {
    return (
        <div className="modal-background">
            <div className="modal-content">
                <div className=" flex justify-between mb-4">
                    <h1 className=" text-lg font-bold text-[#444]">
                        Add Hero form
                    </h1>
                    <button className="" onClick={onclick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <form className="flex flex-col gap-5 mb-4">
                    <div>
                        <label
                            htmlFor="herodescription"
                            className=" mb-2 block"
                        >
                            Description
                        </label>
                        <textarea
                            type="text"
                            id="herodescription"
                            placeholder="Description"
                            className=" border rounded-md px-3 w-full"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="herodescription"
                            className=" mb-2 block"
                        >
                            Puncline
                        </label>
                        <input
                            type="text"
                            placeholder="Punchline"
                            className=" border rounded-md px-3 py-2 w-full "
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="herodescription"
                            className=" mb-2 block"
                        >
                            Image
                        </label>
                        <input
                            type="file"
                            placeholder="Punchline"
                            className=" block"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
