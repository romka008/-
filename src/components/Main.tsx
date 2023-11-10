import {Toolbar} from "@views/Toolbar/Toolbar";

import AppRouter from "./providers/Router/AppRouter";
import {Sidebar} from "@views/Sidebar/Sidebar";

export const Main = () => {
    return (
        <div style={{display: "flex"}}>
            <Toolbar />
            <div style={{display: "flex", marginTop: "80px", flex: "1 0", width: "100%"}}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};
