import React, { useState } from "react";
import { MdClose, MdOutlineCloudUpload } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { updateAvatar, updateCoverImg } from "../store/Slices/authSlice";

function EditAvatar({ cover }) {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const upload = (data) => {
        setIsOpen(false);
        const formData = new FormData();
        formData.append(`${cover ? "coverImage" : "avatar"}`, data.avatar[0]);

        if (data) {
            if (cover) {
                dispatch(updateCoverImg(formData));
            } else {
                dispatch(updateAvatar(formData));
            }
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(upload)}
                className="relative"
            >
                {/* Popup */}
                <MdOutlineCloudUpload
                    className="hover:text-gray-200 text-black rounded-md bg-white opacity-80 hover:opacity-100 p-1 cursor-pointer"
                    size={35}
                    onClick={() => setIsOpen((prev) => !prev)}
                />
                {isOpen && (
                    <div className="fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70">
                        <div className="bg-black p-8 relative border shadow-lg w-full max-w-md">
                            {/* Close button */}
                            <button
                                className="absolute top-5 right-5 text-white hover:text-gray-200"
                                onClick={() => setIsOpen(false)}
                            >
                                <MdClose size={20} />
                            </button>

                            {/* Content */}
                            <h2 className="text-lg font-bold text-white mb-4">
                                Change {cover ? "Cover" : "Profile"} Picture
                            </h2>
                            <div className="flex flex-col sm:flex-row items-center">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="bg-black border text-white p-2 mt-2 mr-2 w-full sm:w-auto"
                                    {...register("avatar", {
                                        required: "image is required",
                                    })}
                                />
                                <button
                                    type="submit"
                                    className="bg-purple-500 text-white px-4 py-2 mt-4 sm:mt-2 max-sm:w-full"
                                >
                                    Upload
                                </button>
                            </div>
                            {errors.avatar && (
                                <span className="text-red-500">
                                    {errors.avatar.message}
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </form>
        </>
    );
}

export default EditAvatar;
