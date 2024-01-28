import React from "react";
import { Link } from "react-router-dom";

function Avatar({ src, channelName }) {
    return (
        <>
            <Link to={`/channel/${channelName}`}>
                <img
                    src={src}
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover"
                />
            </Link>
        </>
    );
}

export default Avatar;
