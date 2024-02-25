import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllVideos } from "../store/Slices/videoSlice";
import Input from "./Input";
import Button from "./Button";
import { IoCloseCircleOutline } from "react-icons/io5";

function SearchForSmallScreen() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const search = (data) => {
        const query = data?.query;
        navigate(`/search/${query}`);
        dispatch(getAllVideos({ query }));
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-900 h-screen w-full bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white bg-opacity-80 h-screen w-full p-8">
                        <div className="absolute top-0 right-0">
                            <IoCloseCircleOutline size={40} />
                        </div>
                        <form
                            onSubmit={handleSubmit(search)}
                            className="flex items-center mt-3"
                        >
                            <Input
                                type="text"
                                placeholder="Search"
                                className="px-4 py-2 border border-gray-300 focus:outline-none"
                                {...register("query", { required: true })}
                            />
                            <Button
                                type="submit"
                                className="px-4 py-2 bg-purple-500 text-white font-semibold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Search
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default SearchForSmallScreen;
