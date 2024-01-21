import React from "react";
import { VideoList } from "../../components";

function MyChannelVideos() {
    return (
        <>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2">
                <VideoList/>
            </div>
        </>
    );
}

export default MyChannelVideos;
