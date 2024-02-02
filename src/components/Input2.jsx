import React, { useId } from "react";

const Input2 = React.forwardRef(function Input2(
    { label, type = "text", placeholder, className = "", ...props },
    ref
) {
    const id = useId();
    return (
        <div className="w-full">
            {label && (
                <label className="inline-block mb-1 pl-1" htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                className={`w-full border p-2 bg-transparent outline-none focus:bg-[#222222] ${className}`}
                {...props}
                ref={ref}
                id={id}
            />
        </div>
    );
});

export default Input2;
