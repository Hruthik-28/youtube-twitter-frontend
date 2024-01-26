import React, { useEffect } from "react";
import { ChannelHeader } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { userChannelProfile } from "../../store/Slices/userSlice.js";
import ChannelNavigate from "../../components/channel/ChannelNavigate.jsx";
import { Outlet, useParams } from "react-router-dom";

function Channel() {
    const dispatch = useDispatch();
    const { username } = useParams();

    const channel = useSelector((state) => state.user?.profileData);

    useEffect(() => {
        dispatch(userChannelProfile(username));
    }, [dispatch, username]);

    return (
        <>
            <ChannelHeader
                username={username}
                coverImage={channel?.coverImage.url}
                avatar={channel?.avatar.url}
                subscribedCount={channel?.channelsSubscribedToCount}
                fullName={channel?.fullName}
                subscribersCount={channel?.subcribersCount}
            />
            <ChannelNavigate username={username} />
            <div className="overflow-y-scroll h-[32rem] sm:h-96 mb-20 sm:mb-0">
                <Outlet />
            </div>
        </>
    );
}

export default Channel;
