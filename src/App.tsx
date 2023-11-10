import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";
import {Main} from "./components/Main";
import {ErrorBoundary} from "./components/providers/ErrorBoundary";

import "@styles/globals.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ErrorBoundary>
                    <Main />
                </ErrorBoundary>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
