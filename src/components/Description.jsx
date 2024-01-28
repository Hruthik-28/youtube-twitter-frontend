import React, { useState } from "react";
import { timeAgo } from "../helpers/timeAgo";
import { Like, Button } from "./index";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSubscription } from "../store/Slices/subscriptionSlice";

function Description({
    title,
    views,
    createdAt,
    channelName,
    avatar,
    subscribersCount,
    likesCount,
    isSubscribed,
    description,
    isLiked,
    videoId,
    channelId,
}) {
    const [localIsSubscribed, setLocalIsSubscribed] = useState(isSubscribed);
    const [localSubscribersCount, setLocalSubscribersCount] = useState(subscribersCount);
    const dispatch = useDispatch();

    const handleSubscribe = () => {
        dispatch(toggleSubscription(channelId));
        setLocalIsSubscribed((prev) => !prev);
        if (localIsSubscribed) {
            setLocalSubscribersCount((prev) => prev - 1);
        } else {
            setLocalSubscribersCount((prev) => prev + 1);
        }
    };

    const handleSubsribe = () => {};
    return (
        <>
            <section className="sm:max-w-4xl w-full text-white sm:p-5 p-2 space-y-2">
                <div className="border-b border-slate-700">
                    <div className="space-y-2 mb-2">
                        <h1 className="sm:text-2xl font-semibold">{title}</h1>
                        <div className="flex items-center justify-between sm:justify-start sm:gap-5">
                            <div>
                                <span className="text-sm text-slate-400">
                                    {views} views .{" "}
                                </span>
                                <span className="text-sm text-slate-400">
                                    {timeAgo(createdAt)}
                                </span>
                            </div>
                            <div className=" rounded-full w-24 flex justify-center bg-[#222222] py-1">
                                <Like
                                    isLiked={isLiked}
                                    videoId={videoId}
                                    likesCount={likesCount}
                                    size={25}
                                />
                            </div>
                        </div>
                        <div className="flex gap-2 justify-between items-center">
                            <Link
                                to={`/channel/${channelName}/videos`}
                                className="flex gap-2"
                            >
                                <img
                                    src={avatar}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <h1 className="font-semibold">
                                        {channelName}
                                    </h1>
                                    <p className="text-xs text-slate-400">
                                        {localSubscribersCount} Subscribers
                                    </p>
                                </div>
                            </Link>
                            <div onClick={handleSubsribe}>
                                <Button
                                    onClick={handleSubscribe}
                                    className="border-slate-500 hover:scale-110 transition-all text-black font-bold px-4 py-1 bg-purple-500"
                                >
                                    {localIsSubscribed
                                        ? "Subscribed"
                                        : "Subscribe"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-xs bg-[#222222] rounded-lg p-2 outline-none">
                    {description}
                </p>
            </section>
        </>
    );
}

export default Description;
