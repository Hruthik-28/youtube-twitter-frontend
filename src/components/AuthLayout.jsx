import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { LoginPopup } from "../components";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, authentication }) {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        if (!authentication && authStatus !== authentication) {
            return
        }
    }, [authStatus, authentication, navigate]);

    if (authentication && authStatus !== authentication) {
        return <LoginPopup />;
    }

    return children;
}

export default AuthLayout;
