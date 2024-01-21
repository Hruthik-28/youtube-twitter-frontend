import React from "react";

function VideoList({
    thumbnail,
    duration,
    title,
    views,
    avatar,
    channelName,
    description,
    createdAt,
}) {
    return (
        <>
            <div className="w-full p-2">
                <div className="relative">
                    <img
                        src={thumbnail}
                        className="object-cover"
                    />
                    <span className="absolute bottom-2 right-2 rounded-lg text-sm bg-black py-1 px-2">{duration}</span>
                </div>
                <div className="flex items-center py-1 px-2 gap-2">
                    {avatar && (
                        <img
                            src={avatar}
                            className="w-10 h-10 rounded-full"
                            alt=""
                        />
                    )}
                    <div>
                        <h2 className="font-medium">{title}</h2>
                        <div className="text-xs space-x-1 text-slate-400">
                            <span>{views} Views</span> .
                            <span>{createdAt} years ago</span>
                        </div>
                        {channelName && (
                            <h2 className="text-xs space-x-1 text-slate-200">
                                {channelName}
                            </h2>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideoList;
