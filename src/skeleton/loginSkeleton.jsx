import React from "react";

function LoginSkeleton() {
    const loadingSkeletonStyle =
        "animate-pulse bg-slate-500 h-10 w-full rounded mb-2";
    return (
        <>
            <div className="flex justify-center mt-20 w-full">
                <div className="border border-slate-500 h-96 w-96  text-center text-white font-bold text-xl p-5 space-y-8">
                    <h1>Registering...</h1>
                    <input className={`${loadingSkeletonStyle} outline-none`} readOnly/>
                    <input className={`${loadingSkeletonStyle} outline-none`} readOnly/>
                    <input className={`${loadingSkeletonStyle} outline-none`} readOnly/>
                    <button className={`${loadingSkeletonStyle} outline-none w-1/2`} readOnly/>
                </div>
            </div>
        </>
    );
}

export default LoginSkeleton;
