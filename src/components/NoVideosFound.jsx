import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const NoVideosFound = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white h-full">
            <FaPlayCircle
                size={50}
                className="text-purple-500"
            />
            <p className="mt-4 text-lg">
                There are no videos here available. 
            </p>
        </div>
    );
};

export default NoVideosFound;
