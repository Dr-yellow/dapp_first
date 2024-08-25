
import React, { useState } from 'react';
import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

import logoPng from "../assets/images/logo.png";

interface NavBarItemProps {
    title: string;
    classprops: string;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ title, classprops }) => <li className={`mx-4 cursor-pointer ${classprops}`}>
    {title}
</li>

const NavList: string[] =
    ["Home", "About", "Roadmap", "Showcase", "Team", "FAQ"]

const Havbar: React.FC = () => {

    const [toggleMenu, setToggleMenu] = useState(false);



    return (
        // 顶部导航栏
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            {/*左边 logo */}
            <div className='md:flex-[0.5] flex-initial justify-between items-center'>
                <img src={logoPng} alt='logo' className='w-32 cursor-pointer' />
            </div>

            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {/* 捣毁栏 */}
                {NavList.map((item, index) => (
                    <NavBarItem key={item + index} title={item} classprops={"mx-4 cursor-pointer"} />
                )
                )}
                {/*     连接钱包登陆 */}
                <button type='button' className='flex-initial bg-[#2952e3] px-4 py-2 text-white rounded-full cursor-pointer'>
                    Login
                </button>
            </ul>

            <div className='flex relative'>
                {!toggleMenu && (
                    <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />
                )}
                {toggleMenu && (
                    <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
                )}
                {toggleMenu && (
                    <ul className='z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
                        <li className='w-full h-16 flex justify-end items-center text-xl font-bold'>
                            <AiOutlineClose
                                onClick={() => setToggleMenu(false)}
                            />
                        </li>
                        {NavList.map((item, index) => (
                            <NavBarItem key={item + index} title={item} classprops={"my-2 text-lg"} />
                        ))}
                    </ul>
                )}
            </div>


        </nav>
    )
}



export default Havbar;