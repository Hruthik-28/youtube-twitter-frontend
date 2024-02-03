import React, { useEffect, useState } from "react";
import {
    Button,
    Container,
    DeleteConfirmation,
    Navbar,
    Spinner,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { TogglePublish, UploadVideo } from "../components";
import {
    MdOutlineSlowMotionVideo,
    ImBin,
    GrEdit,
    RxAvatar,
    FaRegEye,
    FaRegHeart,
} from "../components/icons";
import { getChannelStats, getChannelVideos } from "../store/Slices/dashboard";
import EditVideo from "../components/EditVideo";
import { deleteAVideo } from "../store/Slices/videoSlice";

function AdminDashboard() {
    const username = useSelector((state) => state.auth.userData?.username);
    const dashboard = useSelector((state) => state.dashboard.channelStats);
    const videos = useSelector((state) => state.dashboard.channelVideos);
    const uploaded = useSelector((state) => state.video.uploaded);
    const publishToggled = useSelector((state) => state.video.publishToggled);
    const deleting = useSelector((state) => state.video.loading);

    const dispatch = useDispatch();
    const [videoDetails, setVideoDetails] = useState(null);
    const [popUp, setPopUp] = useState({
        uploadVideo: false,
        editVideo: false,
        deleteVideo: false,
    });

    const handleDeleteVideo = async () => {
        dispatch(deleteAVideo(videoDetails?._id));
        setPopUp((prev) => ({
            ...prev,
            deleteVideo: !prev.deleteVideo,
        }));
    };

    useEffect(() => {
        dispatch(getChannelStats());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getChannelVideos());
    }, [dispatch, uploaded, publishToggled, deleting]);

    return (
        <>
            <Navbar />
            <Container>
                <div className=" w-full relative h-screen text-white space-y-5 z-10">
                    {/* uploadVideoPopup */}
                    {popUp.uploadVideo && (
                        <div className="absolute w-full z-20">
                            <UploadVideo setUploadVideoPopup={setPopUp} />
                        </div>
                    )}

                    {/* editVideoPopup */}
                    {popUp.editVideo && (
                        <div className="w-full flex justify-center top-24 fixed z-20">
                            <EditVideo
                                setEditVideoPopup={setPopUp}
                                title={videoDetails?.title}
                                description={videoDetails?.description}
                                videoId={videoDetails?._id}
                            />
                        </div>
                    )}

                    {/* deleteVideoPopup */}
                    {popUp.deleteVideo && (
                        <div className="w-full fixed top-52 flex justify-center z-20">
                            <DeleteConfirmation
                                video={true}
                                onCancel={() =>
                                    setPopUp((prev) => ({
                                        ...prev,
                                        deleteVideo: !prev.deleteVideo,
                                    }))
                                }
                                onDelete={handleDeleteVideo}
                            />
                        </div>
                    )}

                    {deleting && (
                        <div className="w-full fixed top-20 flex justify-center z-20">
                            <div className="w-52 border border-slate-600 bg-black flex gap-2 p-3">
                                <Spinner />
                                <span className="text-md font-bold">
                                    Deleting video...
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Dashboard Header */}
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
                                    setPopUp((prev) => ({
                                        ...prev,
                                        uploadVideo: !prev.uploadVideo,
                                    }))
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

                    {/* Table for managing channel videos */}
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
                                        <td className="border-b border-slate-500">
                                            <span className="border rounded-lg outline-none px-2 bg-green-200 text-green-600">
                                                {video?.likesCount} likes
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-slate-500">
                                            {video?.createdAt?.day}/
                                            {video?.createdAt?.month}/
                                            {video?.createdAt?.year}
                                        </td>
                                        <td className="py-2 border-b border-slate-500">
                                            <span className="flex gap-3 justify-start">
                                                <ImBin
                                                    size={20}
                                                    className="cursor-pointer"
                                                    onClick={() => {
                                                        setPopUp((prev) => ({
                                                            ...prev,
                                                            deleteVideo:
                                                                !prev.deleteVideo,
                                                        }));
                                                        setVideoDetails(video);
                                                    }}
                                                />
                                                <GrEdit
                                                    size={20}
                                                    className="cursor-pointer"
                                                    onClick={() => {
                                                        setPopUp((prev) => ({
                                                            ...prev,
                                                            editVideo:
                                                                !prev.editVideo,
                                                        }));
                                                        setVideoDetails(video);
                                                    }}
                                                />
                                            </span>
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
