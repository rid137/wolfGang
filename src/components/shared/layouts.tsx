import { ReactNode, useState } from "react";
import Sidebar from "./sidebar";
import avatar from '../../assets/avatar.jpg'
import { IoMdMenu } from "react-icons/io";


interface LayoutProps {
    child: ReactNode;
}
  
const Layout: React.FC<LayoutProps> = ({ child }) => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    const handleClick = (): void => {
        setIsNavOpen(false)
    }

    return(
        <div className={`flex `}>
            
            <div onClick={() => setIsNavOpen(false)} className={`fixed ${isNavOpen? "block": "hidden " } w-[100%] lg:hidden ml-[60vw] h-[100%] top-0 left-0 right-0 bottom-0 bg-transBg z-40`}></div>

            <Sidebar isNavOpen={isNavOpen} handleClick={handleClick} />
            <div className="w-[100vw] lg:w-[80vw] bg-whiteBg lg:py-10 lg:px-14 p-2 xs:px-4">
            
                <div className="flex justify-between lg:justify-end items-center mb-4 lg:mb-0">

                    <div className="lg:hidden block text-xl cursor-pointer" onClick={() => setIsNavOpen(!isNavOpen)}>
                        <IoMdMenu />
                    </div>

                    <div className="flex__center gap-3 cursor-pointer">
                        <p className="font-bold hidden lg:block">Dianell Russel</p>
                        <img src={avatar} className="rounded-full w-14 h-14 md:w-16 md:h-16 " alt="" />
                    </div>

                </div>

                <div className="">{child}</div>
            </div>
        </div>
    );
};

export default Layout;