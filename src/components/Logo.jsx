import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

function Logo({ size = "30" }) {
    return (
        <>
            <Link to={'/'} className="flex gap-2 items-center">
                <IoLogoYoutube
                    size={size}
                    color="#A855F7"
                />
                <span className="font-bold text-white">YOUTUBE</span>
            </Link>
        </>
    );
}

export default Logo;
