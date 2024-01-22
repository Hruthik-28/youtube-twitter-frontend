import React from "react";

function HomeSkeleton() {
    const loadingSkeletonStyle = "animate-pulse bg-[#222222] h-10 w-full mb-2";
    return (
        <>
            <div className="w-full grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-5 h-[80vh]">
                <div className={`${loadingSkeletonStyle} h-56 relative`}>
                    <div className="absolute bottom-1 border-slate-500 h-10 w-full border-t p-2">
                        <div className="absolute bottom-0 w-8 h-8 animate-pulse bg-gray-500 rounded-full space-y-2"></div>
                        <div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                        </div>
                    </div>
                </div>
                <div className={`${loadingSkeletonStyle} h-56 relative`}>
                    <div className="absolute bottom-1 border-slate-500 h-10 w-full border-t p-2">
                        <div className="absolute bottom-0 w-8 h-8 animate-pulse bg-gray-500 rounded-full space-y-2"></div>
                        <div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                        </div>
                    </div>
                </div>
                <div className={`${loadingSkeletonStyle} h-56 relative`}>
                    <div className="absolute bottom-1 border-slate-500 h-10 w-full border-t p-2">
                        <div className="absolute bottom-0 w-8 h-8 animate-pulse bg-gray-500 rounded-full space-y-2"></div>
                        <div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                        </div>
                    </div>
                </div>
                <div className={`${loadingSkeletonStyle} h-56 relative`}>
                    <div className="absolute bottom-1 border-slate-500 h-10 w-full border-t p-2">
                        <div className="absolute bottom-0 w-8 h-8 animate-pulse bg-gray-500 rounded-full space-y-2"></div>
                        <div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                        </div>
                    </div>
                </div>
                <div className={`${loadingSkeletonStyle} h-56 relative`}>
                    <div className="absolute bottom-1 border-slate-500 h-10 w-full border-t p-2">
                        <div className="absolute bottom-0 w-8 h-8 animate-pulse bg-gray-500 rounded-full space-y-2"></div>
                        <div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                        </div>
                    </div>
                </div>
                <div className={`${loadingSkeletonStyle} h-56 relative`}>
                    <div className="absolute bottom-1 border-slate-500 h-10 w-full border-t p-2">
                        <div className="absolute bottom-0 w-8 h-8 animate-pulse bg-gray-500 rounded-full space-y-2"></div>
                        <div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                        </div>
                    </div>
                </div>
                <div className={`${loadingSkeletonStyle} h-56 relative`}>
                    <div className="absolute bottom-1 border-slate-500 h-10 w-full border-t p-2">
                        <div className="absolute bottom-0 w-8 h-8 animate-pulse bg-gray-500 rounded-full space-y-2"></div>
                        <div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                        </div>
                    </div>
                </div>
                <div className={`${loadingSkeletonStyle} h-56 relative`}>
                    <div className="absolute bottom-1 border-slate-500 h-10 w-full border-t p-2">
                        <div className="absolute bottom-0 w-8 h-8 animate-pulse bg-gray-500 rounded-full space-y-2"></div>
                        <div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                        </div>
                    </div>
                </div>
                <div className={`${loadingSkeletonStyle} h-56 relative`}>
                    <div className="absolute bottom-1 border-slate-500 h-10 w-full border-t p-2">
                        <div className="absolute bottom-0 w-8 h-8 animate-pulse bg-gray-500 rounded-full space-y-2"></div>
                        <div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                            <div className="w-1/2 h-2 ml-10 bg-gray-500 rounded-xl mt-1"></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default HomeSkeleton;
