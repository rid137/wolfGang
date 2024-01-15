import { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import wolfgang from "../../assets/wolfgangLogo.png"


const Sidebar = () => {
    const [active, setActive] = useState("dashboard")

    return (
        <div className="bg-primary min-w-[20vw] h-[100vh] py-8 text-white overflow-hidde sticky left-0 top-0">
            <div className="text-center text-white mb-16 flex items-center justify-center ">
                <img src={wolfgang} className="cursor-pointer" alt="logo" />

            </div>

            <h1 className="uppercase tracking-wide ml-5 text-gray-300 text-md font-bold">Master menu</h1>

            <ul className="flex flex-col gap-4 mt-10 pr-14">
                
                <li>
                    <Link to={"/dashboard"} className={`flex gap-3 items-center cursor-pointer py-4 rounded-r-full hover:bg-white hover:text-primary pl-10 ${active === "dashboard" && "bg-white text-primary" }`} onClick={() => setActive("dashboard")}>
                        <MdDashboard className="text-[1.8rem] " />
                        <p className="text-md">Dashboard</p>
                    </Link>
                </li>
                <li>
                    <Link to={"/payment"} className={`flex gap-3 items-center cursor-pointer py-4 rounded-r-full hover:bg-white hover:text-primary pl-10 ${active === "payment" && "bg-white text-primary" }`} onClick={() => setActive("payment")}>
                        <MdOutlinePayment className="text-[1.8rem]" />
                        <p className="text-md">Payment</p>
                    </Link>
                </li>
                <li>
                    <Link to={"/notifications"} className={`flex gap-3 items-center cursor-pointer py-4 rounded-r-full hover:bg-white hover:text-primary pl-10 ${active === "notifications" && "bg-white text-primary" }`} onClick={() => setActive("notifications")}>
                        <IoMdNotificationsOutline className="text-[1.8rem]" />
                        <p className="text-md">Notifications</p>
                    </Link>
                </li>
                <li>
                    <Link to={"/settings"} className={`flex gap-3 items-center cursor-pointer py-4 rounded-r-full hover:bg-white hover:text-primary pl-10 ${active === "settings" && "bg-white text-primary" }`} onClick={() => setActive("settings")}>
                        <IoSettingsOutline className="text-[1.8rem]" />
                        <p className="text-md">Settings</p>
                    </Link>
                </li>
                
            </ul>
        </div>
    );
};

export default Sidebar;
