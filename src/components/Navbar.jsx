import React, { useState } from "react";
import { IoLogoYoutube } from "react-icons/io";
import Search from "./Search";
import Button from "./Button";
import { SlMenu } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { CiSettings } from "react-icons/ci";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <nav className="w-full bg-[#0E0F0F] flex justify-between items-center p-4 sm:gap-5 gap-2 border-b-2 border-gray-500 sticky top-0 z-50">
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                    <IoLogoYoutube
                        size={35}
                        color="red"
                    />
                    <span className="font-bold text-white">YOUTUBE</span>
                </div>

                {/* search for large screens */}
                <div className="w-full sm:w-1/3 hidden sm:block">
                    <Search />
                </div>

                {/* search for small screens */}
                <div className="text-white w-full inline-flex justify-end sm:hidden pr-4">
                    <CiSearch
                        size={30}
                        fontWeight={"bold"}
                    />
                </div>

                {/* login and signup buutons */}
                <div className="space-x-2 sm:block hidden">
                    <Button className="bg-[#222222] border hover:bg-black border-slate-500 sm:px-4 sm:py-2 p-2">
                        Login
                    </Button>
                    <Button className="font-semibold border hover:bg-[#222222] border-slate-500 sm:px-4 sm:py-2 ">
                        Sign up
                    </Button>
                </div>

                {/* hamburger for smaller screens */}
                <div className="sm:hidden block">
                    <div className="text-white ">
                        <SlMenu
                            size={30}
                            onClick={() => setToggleMenu((prev) => !prev)}
                        />
                    </div>
                </div>

                {/* Side panel for smaller screens */}
                {toggleMenu && (
                    <div className="fixed right-0 top-0 text-white flex flex-col border-l h-screen w-5/6 bg-[#0F0F0F] sm:hidden rounded-lg outline-none">
                        <div className="w-full border-b h-20 flex items-center mb-2 justify-between px-3">
                            <div className="flex items-center gap-2">
                                <IoLogoYoutube
                                    size={35}
                                    color="red"
                                />
                                <span className="text-lg font-bold">YOUTUBE</span>
                            </div>
                            <IoCloseCircleOutline
                                size={35}
                                onClick={() => setToggleMenu((prev) => !prev)}
                            />
                        </div>

                        <div className="flex flex-col justify-between h-full py-5 px-3">
                            <div className=" space-y-5">
                                <div className="flex items-center border border-slate-500 gap-5 px-3 py-1 hover:bg-purple-500">
                                    <BiLike size={25} />
                                    <span className="text-lg">
                                        Liked Videos
                                    </span>
                                </div>
                                <div className="flex items-center border border-slate-500 gap-5 px-3 py-1 hover:bg-purple-500">
                                    <HiOutlineVideoCamera size={25} />
                                    <span className="text-lg">My Content</span>
                                </div>
                                <div className="flex items-center border border-slate-500 gap-5 px-3 py-1 hover:bg-purple-500">
                                    <MdOutlineContactSupport size={25} />
                                    <span className="text-lg">Support</span>
                                </div>
                                <div className="flex items-center border border-slate-500 gap-5 px-3 py-1 hover:bg-purple-500">
                                    <CiSettings size={25} />
                                    <span className="text-lg">Settings</span>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-5 mb-3">
                                <Button className="bg-[#222222] border hover:bg-white hover:text-black border-slate-500 py-1 px-3">
                                    Login
                                </Button>
                                <Button className="font-semibold border border-slate-500 hover:bg-white hover:text-black py-1 px-3">
                                    Sign up
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
