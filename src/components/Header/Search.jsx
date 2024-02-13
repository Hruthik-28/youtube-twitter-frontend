import React from "react";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllVideos } from "../../store/Slices/videoSlice";

function Search() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const search = (data) => {
        const query = data?.query;
        navigate(`/search/${query}`);
        dispatch(getAllVideos({ query }));
    };

    return (
        <>
            <form onSubmit={handleSubmit(search)}>
                <Input
                    placeholder="Search"
                    {...register("query")}
                />
            </form>
        </>
    );
}

export default Search;
