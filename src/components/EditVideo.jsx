import React, { useEffect } from "react";
import Input2 from "./Input2";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { updateAVideo, updateUploadState } from "../store/Slices/videoSlice";
import Spinner from "./Spinner";
import GetImagePreview from "./GetImagePreview";

function EditVideo({
    videoId,
    title,
    description,
    setEditVideoPopup,
    thumbnail,
}) {
    const {
        handleSubmit,
        register,
        formState: { errors },
        control,
        setValue,
    } = useForm();
    const dispatch = useDispatch();
    const uploading = useSelector((state) => state.video.uploading);

    const handleClosePopUp = () => {
        setEditVideoPopup((prev) => ({
            ...prev,
            uploadVideo: false,
            editVideo: false,
        }));
    };

    const updateVideo = async (data) => {
        await dispatch(updateAVideo({ videoId, data }));
        setEditVideoPopup((prev) => ({
            ...prev,
            uploadVideo: false,
            editVideo: false,
        }));
        dispatch(updateUploadState());
    };

    useEffect(() => {
        setValue("title", title);
        setValue("description", description);
    }, [title, description, setValue]);

    if (uploading) {
        return (
            <>
                <div className="w-52 border border-slate-600 bg-black flex gap-2 p-3">
                    <Spinner />
                    <span className="text-md font-bold">Updating video...</span>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="fixed mt-5 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
                <form
                    onSubmit={handleSubmit(updateVideo)}
                    className=" bg-black space-y-2 border h-[30rem] overflow-y-scroll outline-none p-2"
                >
                    <div className="sticky left-0 top-0 z-50 bg-[#222222] flex justify-between items-center border-b border-slate-500 px-3 py-1">
                        <div>
                            <h2 className="font-bold">Edit Video</h2>
                            <p className="text-xs mb-2">
                                Share where you`ve worked on your profile.
                            </p>
                        </div>
                        <IoCloseCircleOutline
                            size={23}
                            onClick={handleClosePopUp}
                            className="cursor-pointer"
                        />
                    </div>
                    <div className="p-2 grid lg:grid-cols-2 grid-cols-1 gap-5 z-40">
                        <div>
                            <GetImagePreview
                                name={"thumbnail"}
                                control={control}
                                label={"Thumbnail: "}
                                cameraIcon
                                cameraSize={30}
                                className={
                                    "object-contain w-full min-w-xl h-72 min-h-32"
                                }
                                image={thumbnail}
                            />
                            <span className="text-red-500 text-xs">
                                {errors.thumbnail?.message}
                            </span>
                        </div>

                        <div className="flex flex-col justify-between sm:gap-0 gap-2">
                            <Input2
                                type="text"
                                label="Title *"
                                // value={title}
                                {...register("title", {
                                    required: "Title is required",
                                })}
                            />
                            <span className="text-red-500 text-xs">
                                {errors.title?.message}
                            </span>
                            <div className="mb-4">
                                <label>Description *</label>
                                <textarea
                                    rows="4"
                                    className="focus:bg-[#222222] text-sm overflow-y-scroll bg-transparent outline-none border w-full mt-1 p-1"
                                    {...register("description", {
                                        required: "Description is required",
                                    })}
                                ></textarea>
                                <span className="text-red-500 text-xs">
                                    {errors.description?.message}
                                </span>
                            </div>
                            <div className="flex gap-3">
                                <Button
                                    className="flex-1 border p-2"
                                    onClick={handleClosePopUp}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    className="flex-1 bg-purple-500 p-2 font-bold"
                                    textColor="text-black"
                                    type="submit"
                                >
                                    Update
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default EditVideo;
