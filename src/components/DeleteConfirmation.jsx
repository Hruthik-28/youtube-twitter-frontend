import React from "react";
import { ImBin } from "./icons.js";

function DeleteConfirmation({ onCancel, onDelete, comment, tweet, video }) {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="text-center sm:p-5 p-3 bg-black border-slate-700 border rounded-xl">
                        <div className="flex justify-center items-start p-3 flex-wrap gap-2 ">
                            <ImBin
                                color="red"
                                size={25}
                            />
                            <div className="flex flex-col flex-wrap items-start">
                                <h1 className="text-bold text-xl mb-1">
                                    Delete
                                    {`${comment ? "Comment" : ""} ${
                                        tweet ? "Tweet" : ""
                                    } ${video ? "Video" : ""}`}{" "}
                                </h1>
                                <p className="text-xs text-start text-semibold w-60">
                                    <span>
                                        Are you sure you want to delete this{" "}
                                        {`${comment ? "Comment" : ""} ${
                                            tweet ? "Tweet" : ""
                                        } ${video ? "Video" : ""}`}
                                        ?
                                    </span>{" "}
                                    <span>
                                        Once its deleted, you will not be able
                                        to recover it.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="font-normal flex gap-2 justify-center">
                            <button
                                onClick={onCancel}
                                className="bg-[#222222] py-1 px-3  rounded-lg sm:text-lg text-sm hover:bg-black cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onDelete}
                                className="bg-red-500 py-1 px-3 rounded-lg sm:text-lg text-sm hover:opacity-70 cursor-pointer"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeleteConfirmation;
