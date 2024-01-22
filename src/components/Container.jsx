import React from "react";

function Container({ children }) {
    return (
        <div className="w-full sm:px-5 px-1 sm:mt-5 mt-2">
            {children}
        </div>
    );
}

export default Container;
