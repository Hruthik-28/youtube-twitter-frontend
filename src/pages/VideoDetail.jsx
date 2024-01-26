import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideoById } from "../store/Slices/videoSlice";
import { CommentList, TweetAndComment, Video } from "../components";
import Description from "../components/Description";
import { getVideoComments } from "../store/Slices/commentSlice";

function VideoDetail() {
    const dispatch = useDispatch();
    const { videoId } = useParams();
    const userId = useSelector((state) => state.auth?.userData?._id);
    const video = useSelector((state) => state.video?.video);
    const comments = useSelector((state) => state.comment?.comments);

    useEffect(() => {
        if (videoId && userId) {
            dispatch(getVideoById({ videoId, userId }));
            dispatch(getVideoComments({ videoId }));
        }
    }, [dispatch, videoId, userId]);

    return (
        <>
            <div className="">
                <Video
                    src={video?.videoFile?.url}
                    poster={video?.thumbnail?.url}
                />
            </div>
            <Description
                avatar={video?.owner?.avatar.url}
                channelName={video?.owner?.username}
                createdAt={video?.createdAt}
                description={video?.description}
                isSubscribed={video?.owner?.isSubscribed}
                likesCount={video?.likesCount}
                subscribersCount={video?.owner?.subscribersCount}
                title={video?.title}
                views={video?.views}
                key={video?._id}
                isLiked={video?.isLiked}
                videoId={video?._id}
                channelId={video?.owner?._id}
            />
            <TweetAndComment
                comment={true}
                videoId={video?._id}
            />
            <div className="w-full sm:max-w-4xl border-r">
                {comments?.map((comment) => (
                    <CommentList
                        key={comment?._id}
                        avatar={comment?.owner?.avatar?.url}
                        commentId={comment?._id}
                        content={comment?.content}
                        createdAt={comment?.createdAt}
                        fullName={comment?.owner?.fullName}
                        isLiked={comment?.isLiked}
                        likesCount={comment?.likesCount}
                        username={comment?.owner?.username}
                    />
                ))}
            </div>
        </>
    );
}

export default VideoDetail;
