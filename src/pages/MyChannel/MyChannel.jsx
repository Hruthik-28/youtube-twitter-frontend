import React, { useEffect } from "react";
import { Channel } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { userChannelProfile } from "../../store/userSlice";

function MyChannel() {
    const dispatch = useDispatch();
    const channel = useSelector((state) => state.auth?.userData);
    const profile = useSelector((state) => state.user?.profileData);

    useEffect(() => {
        if (channel) {
            dispatch(userChannelProfile(channel?.username));
        }
    }, [dispatch, channel]);

    return (
        <>
            <Channel
                username={channel?.username}
                coverImage={profile?.coverImage.url}
                avatar={profile?.avatar.url}
                subscribedCount={profile?.channelsSubscribedToCount || 0}
                fullName={profile?.fullName}
                subscribersCount={profile?.subscribersCount || 0}
            >
            </Channel>
        </>
    );
}

export default MyChannel;
