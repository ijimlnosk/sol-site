import { createBrowserRouter } from "react-router-dom";
import MainPage from "../page/main";
import SignInPage from "../page/signin";
import AdminRoute from "./admin-router";
import Mobi from "../page/mobi";
import AddProject from "../page/addProject";

const ADMIN_ROUTER = {
    element: <AdminRoute />,
    children: [
        {
            path: "",
            element: <MainPage />,
        },
        {
            path: "/mobi",
            element: <Mobi />,
        },
        {
            path: "/addProject",
            element: <AddProject />,
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
