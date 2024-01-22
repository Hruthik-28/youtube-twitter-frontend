import React, { useEffect } from "react";
import { VideoList } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../store/Slices/videoSlice";
import { Link } from "react-router-dom";

function MyChannelVideos() {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth?.userData?._id);
    const videos = useSelector((state) => state.video?.videos?.docs);

    useEffect(() => {
        dispatch(getAllVideos(userId));
    }, [dispatch, userId]);
    return (
        <>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 text-white border">
                {videos?.map((video) => (
                    <Link
                        to={`/watch/${video._id}`}
                        key={video._id}
                    >
                        <VideoList
                            avatar={video.avatar?.url}
                            duration={video.duration}
                            title={video.title}
                            thumbnail={video.thumbnail?.url}
                            createdAt={video.createdAt}
                            // views={video.}
                        />
                    </Link>
                ))}
            </div>
        </>
    );
}

export default MyChannelVideos;
