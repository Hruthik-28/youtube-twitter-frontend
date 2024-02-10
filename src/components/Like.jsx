import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BiSolidLike, BiSolidDislike } from "../components/icons";
import {
    toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
} from "../store/Slices/likeSlice";

function Like({ isLiked, likesCount = 0, tweetId, commentId, videoId, size }) {
    const dispatch = useDispatch();
    const [localIsLiked, setLocalIsLiked] = useState(isLiked);
    const [localLikesCount, setLocalLikesCount] = useState(likesCount);

    const handleLikeToggle = () => {
        if (localIsLiked) {
            setLocalLikesCount((prev) => prev - 1);
        } else {
            setLocalLikesCount((prev) => prev + 1);
        }

        setLocalIsLiked((prev) => !prev);

        if (tweetId) {
            dispatch(toggleTweetLike(tweetId));
        }
        if (commentId) {
            dispatch(toggleCommentLike(commentId));
        }
        if (videoId) {
            dispatch(toggleVideoLike(videoId));
        }
    };
    useEffect(() => {
        setLocalIsLiked(isLiked);
        setLocalLikesCount(likesCount);
    }, [isLiked, likesCount]);
    return (
        <>
            <div className="flex items-center gap-1">
                <BiSolidLike
                    size={size}
                    onClick={handleLikeToggle}
                    className={`cursor-pointer ${
                        localIsLiked ? "text-purple-500" : ""
                    }`}
                />
                <span className="text-xs mr-3">{localLikesCount}</span>
                <BiSolidDislike size={size} />
            </div>
        </>
    );
}

export default Like;
