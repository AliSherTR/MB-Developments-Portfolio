import { Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className=" grid grid-cols-12 grid-rows-12 h-screen overflow-y-hidden ">
            <header className=" col-start-3 col-span-full bg-red-400 "></header>
            <aside className=" col-start-1 col-end-3 row-start-1 h-screen bg-green-600"></aside>
            <main className=" bg-orange-400 col-start-3 col-span-full h-screen  overflow-y-scroll">
                <Outlet />
            </main>
        </div>
    );
}
