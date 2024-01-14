import React from "react";
import { RiHome6Line } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { BiHistory } from "react-icons/bi";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { IoFolderOutline } from "react-icons/io5";
import { TbUserCheck } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { MdOutlineContactSupport } from "react-icons/md";

function Sidebar() {
    return (
        <>
            <div className="text-white sm:block hidden sm:w-44 md:w-56 w-16 sm:p-3 p-2 border-slate-600 border-r xl:space-y-60 space-y-32 h-[93vh]">
                <div className="space-y-4 sm:pt-4 pt-1">
                    <div className="flex items-center gap-2 justify-center sm:justify-start hover:bg-purple-500 cursor-pointer py-1 px-2 border border-slate-600">
                        <RiHome6Line size={25} />
                        <span className="text-base hidden sm:block">Home</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 hover:bg-purple-500 cursor-pointer py-1 px-2 border border-slate-600">
                        <BiLike size={25} />
                        <span className="text-base hidden sm:block">
                            Liked Videos
                        </span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 hover:bg-purple-500 cursor-pointer py-1 px-2 border border-slate-600">
                        <BiHistory size={25} />
                        <span className="text-base hidden sm:block">
                            History
                        </span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 hover:bg-purple-500 cursor-pointer py-1 px-2 border border-slate-600">
                        <HiOutlineVideoCamera size={25} />
                        <span className="text-base hidden sm:block">
                            My Content
                        </span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 hover:bg-purple-500 cursor-pointer py-1 px-2 border border-slate-600">
                        <IoFolderOutline size={25} />
                        <span className="text-base hidden sm:block">
                            Collections
                        </span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 hover:bg-purple-500 cursor-pointer py-1 px-2 border border-slate-600">
                        <TbUserCheck size={25} />
                        <span className="text-base hidden sm:block">
                            Subscribers
                        </span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-2 justify-center sm:justify-start hover:bg-purple-500 cursor-pointer py-1 px-2 border border-slate-600">
                        <MdOutlineContactSupport size={25} />
                        <span className="text-base hidden sm:block">
                            Support
                        </span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start hover:bg-purple-500 cursor-pointer py-1 px-2 border border-slate-600">
                        <CiSettings size={25} />
                        <span className="text-base hidden sm:block">
                            Settings
                        </span>
                    </div>
                </div>
            </div>

            {/* for mobile sidebar is bottom bar*/}
            <div className="border-t-2 text-white h-16 sm:hidden p-1 w-full flex justify-around fixed bottom-0 bg-[#0E0F0F]">
                <div className="flex flex-col items-center gap-1 cursor-pointer p-1">
                    <RiHome6Line size={25} />
                    <span className="text-sm">Home</span>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer p-1">
                    <BiHistory size={25} />
                    <span className="text-sm">History</span>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer p-1">
                    <IoFolderOutline size={25} />
                    <span className="text-sm">Collections</span>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer p-1">
                    <TbUserCheck size={25} />
                    <span className="text-sm">Subscribers</span>
                </div>
                
            </div>
        </>
    );
}

export default Sidebar;
