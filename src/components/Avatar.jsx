import React from "react";
import { useNavigate } from "react-router-dom";

function Avatar({ src, channelName }) {
    const navigate = useNavigate();

    const handleAvatarClick = (e) => {
        e.stopPropagation()
        navigate(`/channel/${channelName}`);
    };
    return (
        <>
            <img
                src={src}
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover"
                onClick={handleAvatarClick}
            />
        </>
    );
}

export default Avatar;
