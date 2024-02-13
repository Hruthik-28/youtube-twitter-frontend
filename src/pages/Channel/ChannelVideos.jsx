import React, { useEffect } from "react";
import { NoVideosFound, VideoList } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../store/Slices/videoSlice";

function ChannelVideos() {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user?.profileData?._id);
    const videos = useSelector((state) => state.video?.videos?.docs);

    useEffect(() => {
        dispatch(getAllVideos({ userId }));
    }, [dispatch, userId]);

    if (videos?.length == 0) {
        return <NoVideosFound />;
    }

    return (
        <>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 text-white">
                {videos?.map((video) => (
                    <VideoList
                        key={video._id}
                        avatar={video.avatar?.url}
                        duration={video.duration}
                        title={video.title}
                        thumbnail={video.thumbnail?.url}
                        createdAt={video.createdAt}
                        views={video.views}
                        videoId={video._id}
                    />
                ))}
            </div>
        </>
    );
}

export default ChannelVideos;
