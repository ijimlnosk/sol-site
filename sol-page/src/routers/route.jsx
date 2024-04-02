import { createBrowserRouter } from "react-router-dom";
import MainPage from "../page/main";
import SignInPage from "../page/signin";
import AdminRoute from "./admin-router";

const ADMIN_ROUTER = {
    element: <AdminRoute />,
    children: [
        {
            path: "",
            element: <MainPage />,
        },
    ],
};

const PUBLIC_ROUTER = [
    {
        path: "/signin",
        element: <SignInPage />,
    },
];

const router = createBrowserRouter([
    {
        children: [...PUBLIC_ROUTER, ADMIN_ROUTER],
    },
]);
export default router;
