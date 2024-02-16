import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";

export default function Heroes() {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchHeroes() {
            try {
                setLoading(true);
                const res = await fetch(
                    "https://backend-server-hero.onrender.com/hero"
                );
                const data = await res.json();
                console.log(data);
                setHeroes(data);
                setLoading(false);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchHeroes();
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
                Heroes Section
            </h2>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Punchline
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
                    {heroes.map((hero, i) => {
                        return (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                key={i}
                            >
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <img
                                        src={hero.heroImage}
                                        alt=""
                                        className=" w-14 h-14 rounded-full border-white box-content"
                                    />
                                </td>
                                <td className="px-6 py-4 max-w-lg">
                                    {hero.description}
                                </td>
                                <td className="px-6 py-4 max-w-lg">
                                    {hero.punchLine}
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
