import React from "react";

function Button({
    children,
    type = "button",
    bgColor = "blue",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            className={`${className} ${type} ${bgColor} ${textColor}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
