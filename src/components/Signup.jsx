import React from "react";
import { Logo, Button, Input } from "./index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../store/Slices/authSlice.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function SignUp() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submit = async (data) => {
        dispatch(createAccount(data));
        navigate('/login');
    };

    return (
        <>
            <div className="w-full h-screen text-white p-3 flex justify-center items-start sm:mt-8">
                <div className="flex max-w-5xl flex-col space-y-5 justify-center items-center border border-slate-600 p-3">
                    <div className="flex items-center gap-2 mt-5">
                        <Logo />
                    </div>
                    <form
                        onSubmit={handleSubmit(submit)}
                        className="space-y-5 p-2"
                    >
                        <Input
                            label="Username: "
                            type="text"
                            placeholder=""
                            {...register("username", {
                                required: true,
                            })}
                        />
                        {errors.username && (
                            <span className="text-white">
                                {errors.username.message}
                            </span>
                        )}
                        <Input
                            label="Email: "
                            type="email"
                            placeholder=""
                            {...register("email", {
                                required: true,
                            })}
                        />
                        {errors.email && (
                            <span className="text-white">
                                {errors.email.message}
                            </span>
                        )}
                        <Input
                            label="Fullname: "
                            type="text"
                            placeholder=""
                            {...register("fullName", {
                                required: true,
                            })}
                        />
                        {errors.fullname && (
                            <span className="text-white">
                                {errors.fullname.message}
                            </span>
                        )}
                        <Input
                            label="Password: "
                            type="password"
                            placeholder=""
                            {...register("password", {
                                required: true,
                            })}
                        />
                        {errors.password && (
                            <span>{errors.password.message}</span>
                        )}
                        <Input
                            label="Profile Picture: "
                            type="file"
                            placeholder=""
                            {...register("avatar", {
                                required: true,
                            })}
                            accept="image/png, image/jpeg"
                        />
                        {errors.password && (
                            <span>{errors.avatar.message}</span>
                        )}

                        <Button
                            type="submit"
                            bgColor="bg-purple-500"
                            className="w-full sm:py-3 py-2 hover:bg-purple-700 text-lg"
                        >
                            Signup
                        </Button>

                        <p className="text-center text-sm">
                            Already have an account?{" "}
                            <Link
                                to={"/login"}
                                className="text-purple-600 cursor-pointer hover:opacity-70"
                            >
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;
