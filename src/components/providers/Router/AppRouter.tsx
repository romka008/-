import {memo, Suspense, useCallback} from "react";
import {Route, RouteProps, Routes} from "react-router-dom";

import {useAppSelector} from "@store/hooks";
import {PreLoader} from "@components/PreLoader/PreLoader";

import {routeConfig} from "../../config/routeConfig/routeConfig";

import styles from "./AppRouter.module.css";

const AppRouter = () => {
    const openMenu = useAppSelector(state => state.sidebar.openMenu);
    const contentClassName = openMenu ? styles.content : `${styles.content} ${styles.hiddenBar}`;
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = <Suspense fallback={<PreLoader />}>{route.element}</Suspense>;

        return <Route key={route.path} path={route.path} element={element} />;
    }, []);

    return (
        <div className={contentClassName}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </div>
    );
};

export default memo(AppRouter);
