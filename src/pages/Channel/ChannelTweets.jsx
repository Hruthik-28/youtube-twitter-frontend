import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTweets } from "../../store/Slices/tweetSlice";
import TweetList from "../../components/tweetList";


function ChannelTweets() {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user?.profileData?._id);
    const tweets = useSelector((state) => state.tweet?.tweets);

    useEffect(() => {
        if(userId) dispatch(getUserTweets(userId));
    }, [dispatch, userId])

    return (
        <>
            {
                tweets?.map((tweet) => (
                    <TweetList 
                        key={tweet?._id}
                        avatar={tweet?.ownerDetails?.avatar.url}
                        content={tweet?.content}
                        createdAt={tweet?.createdAt}
                        likesCount={tweet?.likesCount}
                        tweetId={tweet?._id}
                        username={tweet?.ownerDetails?.username} 
                        isLiked={tweet?.isLiked}   
                    />
                ))
            }
        </>
    );
}

export default ChannelTweets;
