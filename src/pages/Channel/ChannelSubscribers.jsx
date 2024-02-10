import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserChannelSubscribers } from "../../store/Slices/subscriptionSlice";
import { Avatar, Button } from "../../components";
import { Link } from "react-router-dom";

function ChannelSubscribers() {
    const dispatch = useDispatch();
    const channelId = useSelector((state) => state.user.profileData?._id);
    const subscribers = useSelector(
        (state) => state.subscription.channelSubscribers
    );

    useEffect(() => {
        if (channelId) {
            dispatch(getUserChannelSubscribers(channelId));
        }
    }, [dispatch, channelId]);

    return (
        <>
            {subscribers?.map((subscriber) => (
                <Link
                    key={subscriber?.subscriber?._id}
                    className="flex border-b border-slate-500 px-3 py-1 justify-between items-center text-white"
                >
                    <div className="flex gap-3 items-center">
                        <Avatar
                            src={subscriber?.subscriber?.avatar.url}
                            channelName={subscriber?.subscriber?.username}
                        />
                        <div>
                            <h5 className="text-sm">
                                {subscriber?.subscriber?.username}
                            </h5>
                            <span className="text-xs text-slate-400">
                                {subscriber?.subscriber?.subscribersCount}{" "}
                                Subscribers
                            </span>
                        </div>
                    </div>
                    <div>
                        <Button className="bg-purple-500 text-black text-xs py-1 px-2">
                            {subscriber?.subscriber?.subscribedToSubscriber
                                ? "Subscribed"
                                : "subscribe"}
                        </Button>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default ChannelSubscribers;
