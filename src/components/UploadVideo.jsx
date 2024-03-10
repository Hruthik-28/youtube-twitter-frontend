import React, { useState } from "react";
import { Button, Input2, UploadingVideo } from "./index";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { publishAvideo } from "../store/Slices/videoSlice";
import { IoCloseCircleOutline } from "./icons";
import GetImagePreview from "./GetImagePreview";

function UploadVideo({ setUploadVideoPopup }) {
    const [videoName, setVideoName] = useState("");
    const [videoSize, setVideoSize] = useState(0);
    const {
        handleSubmit,
        register,
        control,
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
                <UploadingVideo
                    setUploadVideoPopup={setUploadVideoPopup}
                    videoFileName={videoName}
                    fileSize={videoSize}
                />
            </>
        );
    }

    if (uploaded) {
        return (
            <>
                <UploadingVideo
                    setUploadVideoPopup={setUploadVideoPopup}
                    videoFileName={videoName}
                    fileSize={videoSize}
                    uploaded={true}
                />
            </>
        );
    }

    return (
        <>
            <div className="fixed top-5 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-30">
                <div className="relative w-[95vw] sm:w-3/4 h-[80vh] sm:h-[80vh] mx-auto text-white border overflow-y-scroll bg-black">
                    <form
                        onSubmit={handleSubmit(publishVideo)}
                        className="space-y-5"
                    >
                        <section className="h-12 sticky top-0 z-50 border-b w-full bg-[#222222] flex justify-between items-center px-3">
                            <div className="flex gap-1 items-center cursor-pointer">
                                <IoCloseCircleOutline
                                    size={23}
                                    onClick={() =>
                                        setUploadVideoPopup((prev) => !prev)
                                    }
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

                        <section className="px-6 py-2">
                            <div className="w-full border border-dotted h-44 p-1 flex flex-col gap-3 justify-center items-center text-center">
                                <div>
                                    <h1 className="font-medium text-sm">
                                        Drag and drop video files to upload{" "}
                                    </h1>
                                    <p className="font-light text-xs">
                                        Your videos will be private untill you
                                        publish them.
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
                                            setVideoName(
                                                e.target.files[0]?.name
                                            ),
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
                            <div className="space-y-5 mt-2 w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-10 justify-start items-start">
                                {/* THUMBNAIL */}
                                <div className="w-full">
                                    <GetImagePreview
                                        name="thumbnail"
                                        control={control}
                                        label="Thumbnail *"
                                        className={
                                            "w-full h-56 border object-contain"
                                        }
                                        cameraIcon={true}
                                        cameraSize={40}
                                    />
                                    <span className="text-red-500 text-xs">
                                        {errors.thumbnail?.message}
                                    </span>
                                </div>

                                <div className="w-full">
                                    {/* TITLE */}
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

                                    {/* DESCRIPTION */}
                                    <div>
                                        <label>Description *</label>
                                        <textarea
                                            rows="5"
                                            className="focus:bg-[#222222] bg-transparent outline-none border w-full mt-1 p-1"
                                            {...register("description", {
                                                required:
                                                    "Description is required",
                                            })}
                                        ></textarea>
                                        <span className="text-red-500 text-xs">
                                            {errors.description?.message}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UploadVideo;
