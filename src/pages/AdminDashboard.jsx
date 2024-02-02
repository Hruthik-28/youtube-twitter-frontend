import React, { useEffect, useState } from "react";
import { Button, Container, Navbar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import TogglePublish from "../components/TogglePublish";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { getChannelStats, getChannelVideos } from "../store/Slices/dashboard";
import UploadVideo from "../components/UploadVideo";

function AdminDashboard() {
    const username = useSelector((state) => state.auth.userData?.username);
    const dashboard = useSelector((state) => state.dashboard.channelStats);
    const videos = useSelector((state) => state.dashboard.channelVideos);
    const dispatch = useDispatch();
    const [uploadVideoPopup, setUploadVideoPopup] = useState(false);

    useEffect(() => {
        dispatch(getChannelStats());
        dispatch(getChannelVideos());
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <Container>
                <div className=" w-full relative h-screen text-white space-y-5 z-10">
                    {/* uploadVideoPopup */}
                    {uploadVideoPopup && (
                        <div className="absolute w-full z-20">
                            <UploadVideo setUploadVideoPopup={setUploadVideoPopup}/>
                        </div>
                    )}


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
                                onClick={() =>
                                    setUploadVideoPopup((prev) => !prev)
                                }
                            >
                                {" "}
                                Upload Video
                            </Button>
                        </div>
                    </section>

                    {/* channel stats section */}
                    <section className="grid sm:grid-cols-4 grid-cols-2 justify-evenly items-center gap-2">
                        <div className="border border-slate-500 sm:p-3 p-2">
                            <MdOutlineSlowMotionVideo
                                className="text-purple-500 mb-2"
                                size={30}
                            />
                            <p>Total Videos</p>
                            <span className="font-bold text-2xl">
                                {dashboard?.totalLikes}
                            </span>
                        </div>
                        <div className="border border-slate-500 sm:p-3 p-2">
                            <FaRegEye
                                className="text-purple-500 mb-2"
                                size={30}
                            />
                            <p>Total Views</p>
                            <span className="font-bold text-2xl">
                                {dashboard?.totalViews}
                            </span>
                        </div>
                        <div className="border border-slate-500 sm:p-3 p-2">
                            <RxAvatar
                                className="text-purple-500 mb-2"
                                size={30}
                            />
                            <p>Total subscribers</p>
                            <span className="font-bold text-2xl">
                                {dashboard?.totalSubscribers}
                            </span>
                        </div>
                        <div className="border border-slate-500 sm:p-3 p-2">
                            <FaRegHeart
                                className="text-purple-500 mb-2"
                                size={30}
                            />
                            <p>Total likes</p>
                            <span className="font-bold text-2xl">
                                {dashboard?.totalLikes}
                            </span>
                        </div>
                    </section>

                    <section className="mx-auto w-full overflow-x-scroll">
                        <table className="min-w-full border border-slate-500">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-slate-500">
                                        Toggle Publish
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
                                {videos?.map((video) => (
                                    <tr key={video?._id}>
                                        <td className="py-2 px-4 border-b border-slate-500">
                                            <TogglePublish
                                                isPublished={video?.isPublished}
                                                videoId={video?._id}
                                            />
                                        </td>
                                        <td className="py-2 px-4 border-b border-slate-500 ">
                                            {video?.isPublished ? (
                                                <span className="text-green-500 py-1 px-2 border border-green-500 rounded-full">
                                                    Published
                                                </span>
                                            ) : (
                                                <span className="text-orange-500 py-1 px-2 border border-orange-500 rounded-full">
                                                    UnPublished
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-2 px-4 border-b border-slate-500">
                                            {video?.title}
                                        </td>
                                        <td className="py-2 px-4 border-b border-slate-500">
                                            {video?.likesCount} likes
                                        </td>
                                        <td className="py-2 px-4 border-b border-slate-500">
                                            {video?.createdAt?.day}/
                                            {video?.createdAt?.month}/
                                            {video?.createdAt?.year}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </div>
            </Container>
        </>
    );
}

export default AdminDashboard;
