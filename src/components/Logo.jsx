import React from "react";
import { IoIosVideocam } from "react-icons/io";
import { Link } from "react-router-dom";

function Logo({ size = "30" }) {
    return (
        <>
            <Link to={'/'} className="flex gap-2 items-center">
                <IoIosVideocam
                    size={size}
                    color="#A855F7"
                />
                <span className="font-bold text-white">STREAMIFY</span>
            </Link>
        </>
    );
}

export default Logo;
