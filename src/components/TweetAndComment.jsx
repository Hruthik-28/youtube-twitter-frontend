import React from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createTweet } from "../store/Slices/tweetSlice";
import { createAComment } from "../store/Slices/commentSlice";

function TweetAndComment({ tweet, comment, videoId }) {
    const { register, handleSubmit, setValue } = useForm();
    const dispatch = useDispatch();

    const sendContent = async (data) => {
        if (data) {
            if (tweet) {
                await dispatch(createTweet(data));
            } else if (comment) {
                await dispatch(
                    createAComment({ content: data.content, videoId })
                );
            }
            setValue("content", "");
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(sendContent)}
                className="sm:p-5 p-3 sm:max-w-4xl w-full relative"
            >
                <textarea
                    placeholder={`${
                        tweet ? "Write a tweet" : "Add a Comment"
                    }`}
                    className="sm:h-28 h-16 p-2 text-sm focus:border-white  text-white border border-slate-500 bg-[#222222] outline-none w-full"
                    {...register("content", { required: true })}
                />
                <Button
                    type="submit"
                    className="bg-purple-500 px-2 py-1 text-black hover:scale-110 transition-all ease-in absolute sm:bottom-10 sm:right-10 bottom-7 right-5 text-xs sm:text-base"
                >
                    Send
                </Button>
            </form>
        </>
    );
}

export default TweetAndComment;
