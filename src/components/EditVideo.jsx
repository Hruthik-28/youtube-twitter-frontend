import React, { useEffect } from "react";
import Input2 from "./Input2";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { updateAVideo, updateUploadState } from "../store/Slices/videoSlice";
import Spinner from "./Spinner";

function EditVideo({ videoId, title, description, setEditVideoPopup }) {
    const {
        handleSubmit,
        register,
        formState: { errors },
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
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
                <form
                    onSubmit={handleSubmit(updateVideo)}
                    className=" bg-black space-y-2 border outline-none p-2"
                >
                    <div className="flex justify-between items-center border-b border-slate-500 px-3 py-1">
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
                    <div className="p-2 space-y-2">
                        <Input2
                            type="file"
                            label="Thumbnail *"
                            accept="image/png, image/jpeg"
                            {...register("thumbnail", {
                                required: "Thumbnail is required ",
                            })}
                        />
                        <span className="text-red-500 text-xs">
                            {errors.thumbnail?.message}
                        </span>
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
                                rows="5"
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
                </form>
            </div>
        </>
    );
}

export default EditVideo;
