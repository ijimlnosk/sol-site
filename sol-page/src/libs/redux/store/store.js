import { configureStore } from "@reduxjs/toolkit";

const initState = {
    image: null,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_IMAGE":
            return { ...state, image: action.payload };
        case "REMOVE_IMAGE":
            return { ...state, image: null };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: reducer,
});

export default store;
