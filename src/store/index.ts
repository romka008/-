import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import sidebarReducer from "./sidebarReducer";
import {searchApi} from "./api/searchApi";

const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    [searchApi.reducerPath]: searchApi.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([searchApi.middleware])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
