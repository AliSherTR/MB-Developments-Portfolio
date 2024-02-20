import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useUser } from "../../context/UserContext";

export default function Dashboard() {
    const { logout } = useUser();
    return (
        <div className=" grid grid-cols-12 grid-rows-12 h-screen overflow-y-hidden ">
            <header className=" col-start-3 col-span-full shadow-md border-b flex items-center px-3">
                <p className=" mx-5 font-semibold ms-auto">Welcome Back!!</p>
                <button
                    className=" mx-3 px-3 py-2 bg-blue-900 text-white rounded-lg flex gap-3 items-center"
                    onClick={() => logout()}
                >
                    Logout{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                        />
                    </svg>
                </button>
            </header>
            <aside className="col-start-1 col-end-3 row-start-1 h-screen border flex items-center flex-col px-4 py-4 bg-slate-400">
                <Link to="/" className="text-center py-3 border-b self-stretch">
                    <img
                        src={logo}
                        alt="MB Developments"
                        className=" w-24 h-24 rounded-full block m-auto mb-4"
                    />
                    <p>MB Developments</p>
                </Link>
                <div className=" self-stretch flex flex-col text-center gap-9 py-5">
                    <NavLink to="/admin/heros" className="py-2">
                        Heroes
                    </NavLink>
                    <NavLink to="/admin/careers/">Careers</NavLink>
                </div>
            </aside>
            <main className="col-start-3 col-span-full h-screen  overflow-y-scroll p-3">
                <Outlet />
            </main>
        </div>
    );
}
