import React, { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import Profile from "./Profile";
import { sidemenu } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import { FiX } from "react-icons/fi";



const Navbar = ({ Toggle, setToggle }) => {

    const [Menu, setMenu] = useState(false)

    const location = useLocation();
    const currentUrl = location.pathname;

    const isMenuItemActive = (menuItemUrl) => {
        return (
            currentUrl === menuItemUrl || currentUrl.startsWith(`${menuItemUrl}/`)
        );
    };

    return (
        <>
            <div
                className={`w-full bg-white  h-[70px] flex items-center justify-between px-5 border-b border-[#e2e7f1] trans  fixed top-0 z-10 ${Toggle ? "lg:pl-[100px]" : "pl-5 lg:pl-[270px]"
                    } `}
            >
                <HiMiniBars3
                    size={18}
                    className="cursor-pointer hidden lg:block"
                    onClick={() => setToggle(!Toggle)}
                />
                <HiMiniBars3 size={18} className="cursor-pointer lg:hidden" onClick={() => setMenu(!Menu)} />
                <Profile />
            </div>
            <div className={` trans bg-[#212125]  h-full min-h-screen fixed w-[300px] top-0 z-20 ${Menu ? '-translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between px-5">
                    <div className='h-[70px] text-white flex  items-center'>Logo</div>
                    <FiX onClick={() => setMenu(!Menu)} className="text-[#AAB6C7]" />
                </div>
                <ul className='px-4 mt-10'>
                    {sidemenu.map((menus) => (
                        <Link key={menus.id} to={menus.url} >
                            <li className={`flex items-center gap-4  px-4 h-[40px] my-5 rounded-[4px] hover:text-white ${isMenuItemActive(menus.url) ? 'text-white bg-[#2E2E36]' : 'text-[#AAB6C7]'} `} >
                                <span className='w-5'>   {menus.icon}</span>
                                <span className={` trans overflow-hidden`}>{menus.title}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
