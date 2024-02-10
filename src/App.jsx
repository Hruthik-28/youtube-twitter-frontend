import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {Login, SignUp} from "./components/index";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/Slices/authSlice";
import {
    History,
    Channel,
    ChannelVideos,
    ChannelTweets,
    LikedVideos,
    VideoDetail,
    ChannelSubscribers,
    MySubscriptions,
    AdminDashboard,
    EditChannel,
    HomePage
} from "./pages";
import {EditPersonalInfo, ChangePassword, Layout} from "./components";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch])

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<HomePage />}/>
                    <Route path="/channel/:username" element={<Channel />}>
                        <Route path="videos" element={<ChannelVideos />}/>
                        <Route path="playlists" element={""}/>
                        <Route path="tweets" element={<ChannelTweets />}/>
                        <Route path="subscribed" element={<ChannelSubscribers />}/>
                    </Route>
                    <Route path="/history" element={<History />}/>
                    <Route path="/liked-videos" element={<LikedVideos />}/>
                    <Route path="/subscriptions" element={<MySubscriptions />}/>
                    <Route path="/edit" element={<EditChannel />}> 
                        <Route path="personalInfo" element={<EditPersonalInfo /> } />    
                        <Route path="password" element={<ChangePassword />} />    
                    </Route>
                </Route>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/watch/:videoId" element={<VideoDetail />}/>
            <Route path="/collections" element={<AdminDashboard />}/>
            </Routes>
            
            <Toaster
                position="top-right"
                reverseOrder={true}
                toastOptions={{
                    error: {
                        style: { borderRadius: "0", color: "red",},
                    },
                    success: {
                        style: { borderRadius: "0", color: "green" },
                    },
                    duration: 2000
                }}
            />
        </>
    );
}

export default App;
