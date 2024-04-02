import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/route";
import GlobalStyle from "./style/global-style";

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
