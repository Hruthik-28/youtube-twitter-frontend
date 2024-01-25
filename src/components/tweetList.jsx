import React, { useState } from "react";
import { BiSolidLike, BiSolidDislike } from "../components/icons";
import { toggleTweetLike } from "../store/Slices/likeSlice";
import { timeAgo } from "../helpers/timeAgo";
import { useDispatch, useSelector } from "react-redux";

function TweetList({
    tweetId,
    avatar,
    username,
    createdAt,
    content,
    likesCount=0,
    isLiked
}) {
    const dispatch = useDispatch();
    const [localIsLiked, setLocalIsLiked] = useState(isLiked);
    const [localLikesCount, setLocalLikesCount] = useState(likesCount);
    const avatar2 = useSelector(state => state.user?.profileData?.avatar.url);

    const handleLikeToggle = () => {
        if (localIsLiked) {
            setLocalLikesCount(prev => prev - 1);
        }else{
            setLocalLikesCount(prev => prev + 1);
        }
        setLocalIsLiked(prev => !prev);
        dispatch(toggleTweetLike(tweetId));
    }

    return (
        <>
            <div className="text-white w-full flex borde justify-start items-center sm:gap-5 gap-3 border-b border-slate-600 p-3 sm:p-5">
                <div className="w-10">
                    <img
                        src={avatar || avatar2}
                        className="w-10 h-10 object-cover rounded-full"
                    />
                </div>
                <div className="w-3/4 flex flex-col gap-1 ">
                    <div className="flex items-center gap-2">
                        <h2 className="text-xs">{username}</h2>
                        <span className="text-xs text-slate-400">
                            {timeAgo(createdAt)}
                        </span>
                    </div>
                    <p className="text-sm">{content}</p>
                    <div className="flex space-x-4 items-center">
                        <div className="flex items-center gap-1">
                            <BiSolidLike
                                size={20}
                                onClick={handleLikeToggle}
                                className={`cursor-pointer ${localIsLiked ? "text-purple-500": ""}`}
                            />
                            <span className="text-xs">{localLikesCount}</span>
                        </div>
                        <BiSolidDislike size={20} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TweetList;
