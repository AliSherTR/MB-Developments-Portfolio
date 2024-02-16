import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";

export default function Careers() {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchCareers() {
            try {
                setLoading(true);
                const res = await fetch(
                    "https://backend-server-hero.onrender.com/career"
                );
                const data = await res.json();
                console.log(data);
                setCareers(data);
                setLoading(false);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchCareers();
    }, []);

    if (loading)
        return (
            <div className=" h-full flex items-center justify-center">
                <Loader />
            </div>
        );
    return (
        <div className="relative overflow-x-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 md:my-12 text-[#444] ">
                Careers Section
            </h2>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-12 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Heading
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Edit
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {careers.map((career, i) => {
                        return (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                key={i}
                            >
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900  dark:text-white max-w-lg "
                                >
                                    {career.heading}
                                </td>
                                <td className="px-6 py-4 max-w-lg">
                                    {career.description}
                                </td>

                                <td className="px-6 py-4">Edit</td>
                                <td className="px-6 py-4">Delete</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
