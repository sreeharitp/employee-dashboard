import React from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import Profile from "./Profile";

const Navbar = ({ Toggle, setToggle }) => {
    return (
        <div
            className={`w-full bg-white  h-[70px] flex items-center justify-between px-5 border-b border-[#e2e7f1] trans  fixed z-10 ${Toggle ? "lg:pl-[100px]" : "pl-5 lg:pl-[270px]"
                } `}
        >
            <HiMiniBars3
                size={18}
                className="cursor-pointer hidden lg:block"
                onClick={() => setToggle(!Toggle)}
            />
            <HiMiniBars3 size={18} className="cursor-pointer lg:hidden" />
            <Profile />
        </div>
    );
};

export default Navbar;
