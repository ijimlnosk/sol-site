import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/route";
import GlobalStyle from "./style/global-style";
import { Provider } from "react-redux";
import store from "./libs/redux/store/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <GlobalStyle />
                <RouterProvider router={router} />
            </Provider>
        </>
    );
}

export default App;
