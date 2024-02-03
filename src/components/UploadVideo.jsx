import React, { useState } from "react";
import { Button, Input2 } from "./index";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { publishAvideo, updateUploadState } from "../store/Slices/videoSlice";
import { IoCloseCircleOutline } from "./icons";
import UploadingVideo from "./UploadingVideo";

function UploadVideo({ setUploadVideoPopup }) {
    const [videoName, setVideoName] = useState("");
    const [videoSize, setVideoSize] = useState(0);
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const uploading = useSelector((state) => state.video.uploading);
    const uploaded = useSelector((state) => state.video.uploaded);

    const publishVideo = async (data) => {
        setVideoSize(Math.floor(data.videoFile[0].size / (1024 * 1024)));
        await dispatch(publishAvideo(data));
    };

    if (uploading) {
        return (
            <>
                <div className="flex w-full fixed justify-center">
                    <UploadingVideo
                        setUploadVideoPopup={setUploadVideoPopup}
                        videoFileName={videoName}
                        fileSize={videoSize}
                    />
                </div>
            </>
        );
    }

    if (uploaded) {
        return (
            <>
                <div className="flex w-full fixed justify-center">
                    <UploadingVideo
                        setUploadVideoPopup={setUploadVideoPopup}
                        videoFileName={videoName}
                        fileSize={videoSize}
                        uploaded={true}
                    />
                </div>
            </>
        );
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(publishVideo)}
                className="relative w-[95vw] sm:w-3/4 space-y-5 mx-auto text-white border h-screen overflow-y-scroll bg-black"
            >
                <section className="h-12 border-b w-full flex justify-between items-center px-3">
                    <div className="flex gap-1 items-center cursor-pointer">
                        <IoCloseCircleOutline
                            size={23}
                            onClick={() => setUploadVideoPopup((prev) => !prev)}
                        />
                        <h3 className="font-semibold">Upload Videos</h3>
                    </div>
                    <div>
                        <Button
                            className="bg-purple-500 py-1 px-2 font-bold"
                            textColor="text-black"
                            type="submit"
                        >
                            Save
                        </Button>
                    </div>
                </section>

                <section className="px-3">
                    <div className="w-full border border-dotted h-44 p-1 flex flex-col gap-3 justify-center items-center text-center">
                        <div>
                            <h1 className="font-medium text-sm">
                                Drag and drop video files to upload{" "}
                            </h1>
                            <p className="font-light text-xs">
                                Your videos will be private untill you publish
                                them.
                            </p>
                        </div>
                        <label
                            htmlFor="video-upload"
                            className="cursor-pointer bg-purple-500 text-black font-bold text-sm py-2 px-4"
                        >
                            Select Files
                        </label>
                        <input
                            id="video-upload"
                            type="file"
                            accept="video/*"
                            className="hidden"
                            {...register("videoFile", {
                                required: "VideoFile is required",
                                onChange: (e) =>
                                    setVideoName(e.target.files[0]?.name),
                            })}
                        />
                        <input
                            className="sm:w-3/4 w-full text-center h-10 bg-transparent text-white outline-none"
                            value={videoName}
                            readOnly
                        ></input>
                        <span className="text-red-500 text-xs">
                            {errors.videoFile?.message}
                        </span>
                    </div>
                    <div className="space-y-5 mt-2">
                        <Input2
                            type="file"
                            label="Thumbnail *"
                            accept="image/png, image/jpeg"
                            {...register("thumbnail", {
                                required: "Thumbnail is required",
                            })}
                        />
                        <span className="text-red-500 text-xs">
                            {errors.thumbnail?.message}
                        </span>
                        <Input2
                            type="text"
                            label="Title *"
                            className="mb-2"
                            {...register("title", {
                                required: "Title is required",
                            })}
                        />
                        <span className="text-red-500 text-xs">
                            {errors.title?.message}
                        </span>
                        <div>
                            <label>Description *</label>
                            <textarea
                                rows="5"
                                className="focus:bg-[#222222] bg-transparent outline-none border w-full mt-1 p-1"
                                {...register("description", {
                                    required: "Description is required",
                                })}
                            ></textarea>
                            <span className="text-red-500 text-xs">
                                {errors.description?.message}
                            </span>
                        </div>
                    </div>
                </section>
            </form>
        </>
    );
}

export default UploadVideo;
