import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { togglePublishStatus } from "../store/Slices/videoSlice";

function TogglePublish({ videoId, isPublished }) {
    const [isChecked, setIsChecked] = useState(isPublished);
    const dispatch = useDispatch();

    const tooglePublishStatus = () => {
        dispatch(togglePublishStatus(videoId));
        setIsChecked((prev) => !prev)
    }

    return (
        <>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={isChecked}
                    onChange={tooglePublishStatus}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </>
    );
}

export default TogglePublish;
