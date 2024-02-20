import toast from "react-hot-toast";

export const BASE_URL = "https://backend-server-hero.onrender.com";

export const fetchHeroes = async () => {
    try {
        const res = await fetch(
            "https://backend-server-hero.onrender.com/hero"
        );
        const data = await res.json();
        return data;
    } catch (error) {
        toast.error(error.message);
    }
};

export const deleteHero = async (id, token) => {
    try {
        await fetch(`${BASE_URL}/hero?id=${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        toast.success("Successfully deleted!!!");
    } catch (error) {
        toast.error(error.message);
    }
};
