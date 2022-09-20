import {configureStore} from "@reduxjs/toolkit";
import moneyReducer from "./moneyslice";

export const store = configureStore({
    reducer: {
        credit: moneyReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
