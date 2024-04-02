import { useEffect } from "react";
import RootLayout from "../components/layout/layout";
import { getSessionToken } from "../libs/auth/storage-manager";
import { useNavigate } from "react-router-dom";

const AdminRoute = () => {
    const navigate = useNavigate();

    const sessionToken = getSessionToken();

    useEffect(() => {
        if (!sessionToken) {
            navigate("/signin");
        }
        if (sessionToken) {
            navigate("");
        }
    }, []);

    return <RootLayout />;
};
export default AdminRoute;
