import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos, makeVideosNull } from "../store/Slices/videoSlice";
import { VideoList, Container } from "../components";
import HomeSkeleton from "../skeleton/HomeSkeleton";
import InfiniteScroll from 'react-infinite-scroll-component';

function HomePage() {
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.video?.videos?.docs);
    const loading = useSelector((state) => state.video?.loading);
    const hasNextPage = useSelector(
        (state) => state.video?.videos?.hasNextPage
    );
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        dispatch(getAllVideos({ page: 1, limit: 10 }));

        return () => dispatch(makeVideosNull());
    }, [dispatch]);

    useEffect(() => {
        if (loading) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [loading]);

    const fetchMoreVideos = useCallback(() => {
        if (hasNextPage) {
            dispatch(getAllVideos({ page: page + 1, limit: 10 }))
                .then(() => {
                    setPage((prev) => prev + 1);
                })
                .catch((error) => {
                    console.error("Error loading more videos:", error);
                    setIsLoading(false);
                });
        }
    }, [page, hasNextPage, dispatch]);

    return (
        <Container>
            <InfiniteScroll
                dataLength={videos?.length || 0}
                next={fetchMoreVideos}
                hasMore={hasNextPage}
                loader={isLoading && <HomeSkeleton />}
                scrollableTarget="scrollable-container"
            >
                <div
                    className="text-white mb-20 sm:m-0 max-h-screen w-full grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 overflow-y-scroll"
                    id="scrollable-container"
                >
                    {videos?.map((video) => (
                        <VideoList
                            key={video._id}
                            avatar={video.ownerDetails?.avatar.url}
                            duration={video.duration}
                            title={video.title}
                            thumbnail={video.thumbnail?.url}
                            createdAt={video.createdAt}
                            views={video.views}
                            channelName={video.ownerDetails.username}
                            videoId={video._id}
                        />
                    ))}
                </div>
            </InfiniteScroll>
        </Container>
    );
}

export default HomePage;