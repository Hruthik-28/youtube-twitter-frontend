import React from "react";
import { PiFilmReelFill } from "react-icons/pi";
import Spinner from "./Spinner";
import Button from "./Button";
import { IoCloseCircleOutline } from "./icons";

function UploadingVideo({
    videoFileName = "Dashboard prototype recording.mp4",
    fileSize = "16MB",
    setUploadVideoPopup,
}) {
    return (
        <>
            <div className="w-1/4 p-3 text-white border outline-none rounded-lg space-y-5 border-slate-700 bg-black">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-lg font-bold">
                            Uploading Video...
                        </h1>
                        <span className="text-xs text-slate-400">
                            Track your video uploading process.
                        </span>
                    </div>
                    <IoCloseCircleOutline
                        size={25}
                        className="cursor-pointer"
                        onClick={() => setUploadVideoPopup((prev) => !prev)}
                    />
                </div>
                <div className="border flex justify-start items-center p-1">
                    <div className="mr-2">
                        <PiFilmReelFill
                            size={25}
                            className="text-purple-500"
                        />
                    </div>
                    <div className="">
                        <h1 className="text-sm font-semibold">
                            {videoFileName}
                        </h1>
                        <p className="text-xs">{fileSize}</p>
                        <div className="flex gap-2 items-center mt-2">
                            <Spinner />
                            <span className="text-xs">Loading ...</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button
                        className="border flex-1 p-2"
                        onClick={() => setUploadVideoPopup((prev) => !prev)}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="flex-1 bg-purple-500 p-2"
                        textColor="text-black"
                        onClick={() => setUploadVideoPopup((prev) => !prev)}
                    >
                        Finish
                    </Button>
                </div>
            </div>
        </>
    );
}

export default UploadingVideo;
