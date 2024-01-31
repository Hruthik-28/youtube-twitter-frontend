import React from "react";
import { Button, Container, Navbar } from "../components";
import {  useSelector } from "react-redux";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import TogglePublish from "../components/TogglePublish";

function AdminDashboard() {
    const username = useSelector((state) => state.auth.userData?.username);
    return (
        <>
            <Navbar />
            <Container>
                <div className=" w-full h-screen text-white space-y-5">
                    <section className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                        <div>
                            <h1 className="sm:text-2xl text-xl font-bold">
                                Welcome Back, {username}{" "}
                            </h1>
                            <p className="text-xs font-light text-slate-400 ">
                                Seamless Video Management, Elevated Results.
                            </p>
                        </div>
                        <div>
                            <Button
                                className="bg-purple-500 p-2 font-semibold"
                                textColor="text-black"
                            >
                                {" "}
                                Upload Video
                            </Button>
                        </div>
                    </section>

                    <section className="grid sm:grid-cols-3 grid-cols-1 justify-evenly items-center gap-5">
                        <div className="border border-slate-500 p-3">
                            <FaRegEye
                                className="text-purple-500"
                                size={30}
                            />
                            <p>Total Views</p>
                            <span className="font-bold">{25000}</span>
                        </div>
                        <div className="border border-slate-500 p-3">
                            <RxAvatar
                                className="text-purple-500"
                                size={30}
                            />
                            <p>Total subscribers</p>
                            <span className="font-bold">{25000}</span>
                        </div>
                        <div className="border border-slate-500 p-3">
                            <FaRegHeart
                                className="text-purple-500"
                                size={30}
                            />
                            <p>Total likes</p>
                            <span className="font-bold">{25000}</span>
                        </div>
                    </section>

                    <section className="mx-auto w-full overflow-x-scroll">
                        <table className="min-w-full border border-slate-500">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-slate-500">
                                        Toggle Status
                                    </th>
                                    <th className="py-2 px-4 border-b border-slate-500">
                                        Status
                                    </th>
                                    <th className="py-2 px-4 border-b border-slate-500">
                                        Uploaded
                                    </th>
                                    <th className="py-2 px-4 border-b border-slate-500">
                                        Rating
                                    </th>
                                    <th className="py-2 px-4 border-b border-slate-500">
                                        Date Uploaded
                                    </th>
                                    <th className="py-2 px-4 border-b border-slate-500"></th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td className="py-2 px-4 border-b border-slate-500">
                                        <TogglePublish isPublished={false}/>
                                    </td>
                                    <td className="py-2 px-4 border-b border-slate-500 ">
                                        Published
                                    </td>
                                    <td className="py-2 px-4 border-b border-slate-500">
                                        JavaScript Fundamentals: Variables and
                                        Data Types
                                    </td>
                                    <td className="py-2 px-4 border-b border-slate-500">
                                        921 Likes
                                    </td>
                                    <td className="py-2 px-4 border-b border-slate-500">
                                        9/22/2023
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </Container>
        </>
    );
}

export default AdminDashboard;
