import React from "react";
import { Button } from "../index";

function ChannelHeader({
    coverImage,
    avatar,
    username,
    fullName,
    subscribersCount,
    subscribedCount,
}) {
    return (
        <>
            <div className="w-full text-white">
                {/* coverImage section */}
                <section className="w-full">
                    <img
                        src={coverImage}
                        className="sm:h-40 h-28 w-full object-cover"
                    />
                </section>
                {/*channel details section  */}
                <section className=" w-full sm:px-5 p-2 flex sm:flex-row flex-col items-start sm:gap-4">
                    <div className="relative h-12">
                        <div className="relative sm:w-32 w-28 sm:h-32 h-28">
                            <img
                                src={avatar}
                                className="rounded-full object-cover absolute sm:bottom-10 bottom-20 outline-none"
                            />
                        </div>
                    </div>
                    <div className="w-full md:h-24 sm:h-20 flex justify-between items-start px-1">
                        <div>
                            <h1 className="text-xl font-bold">{username}</h1>
                            <h3 className="text-sm text-slate-400">
                                @{fullName}
                            </h3>
                            <div className="flex gap-1">
                                <p className="text-xs text-slate-400">
                                    {subscribersCount} Subscribers
                                </p>
                                <p className="text-xs text-slate-400">
                                    {subscribedCount} Subscribed
                                </p>
                            </div>
                        </div>
                        <div>
                            <Button className="border-slate-500 hover:scale-110 transition-all text-black font-bold px-4 py-1 bg-purple-500">
                                Edit
                            </Button>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}

export default ChannelHeader;
