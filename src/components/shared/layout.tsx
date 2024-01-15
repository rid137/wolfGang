import { ReactNode } from "react";
import Sidebar from "./sidebar";
import avatar from '../../assets/avatar.jpg'

interface LayoutProps {
    child: ReactNode;
}
  
const Layout: React.FC<LayoutProps> = ({ child }) => {
    return(
        <div className="flex">
            <Sidebar />
            <div className="w-[80vw] bg-whiteBg py-10 px-14">
                <div className="flex justify-end">
                    <div className="flex__center gap-3">
                        <p className="font-bold">Dianell Russel</p>
                        <img src={avatar} className="rounded-full w-16 h-16" alt="" />
                    </div>
                </div>

                <div className="">{child}</div>
            </div>
        </div>
    );
};

export default Layout;