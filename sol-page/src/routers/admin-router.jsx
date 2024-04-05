import { useEffect } from "react";
import RootLayout from "../components/layout/layout";
import { getSessionToken } from "../libs/auth/storage-manager";
import { useLocation, useNavigate } from "react-router-dom";

const AdminRoute = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const sessionToken = getSessionToken();

    useEffect(() => {
        if (!sessionToken) {
            navigate("/signin");
            // navigate("/");
        } else {
            if (location.pathname === "/signin") {
                navigate("/");
            }
        }
    }, [navigate, location.pathname, sessionToken]);

    return <RootLayout />;
};
export default AdminRoute;
