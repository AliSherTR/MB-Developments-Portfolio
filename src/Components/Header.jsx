export default function Header() {
    return (
        <header className=" px-3 h-14 flex items-center justify-between bg-white relative z-20 ">
            <div className="font-bold text-lg font-roboto cursor-pointer">
                MB Developments
            </div>
            <ul className=" flex items-center justify-between gap-10 font-roboto">
                <li>Home</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Career</li>
            </ul>
        </header>
    );
}
