import {RouteProps} from "react-router-dom";
import {SearchPage} from "@views/Search";
import {NewsPage} from "@views/News";

export enum AppRoutes {
    MAIN = "main",
    SEARCH_ADDRESS = "search",
    TABLES = "tables",
    CALENDAR = "calendar",
    MAPS = "maps",
    WIDGETS = "widgets",
    PROFILE_SETTINGS = "profile_settings",
    FINANCIAL_MANAGEMENT = "financial_management"
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "",
    [AppRoutes.SEARCH_ADDRESS]: "/address",
    [AppRoutes.TABLES]: "/tables",
    [AppRoutes.CALENDAR]: "/calendar",
    [AppRoutes.MAPS]: "/maps",
    [AppRoutes.WIDGETS]: "/widgets",
    [AppRoutes.PROFILE_SETTINGS]: "/profile_settings",
    [AppRoutes.FINANCIAL_MANAGEMENT]: "/financial_management"
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <NewsPage />
    },
    [AppRoutes.SEARCH_ADDRESS]: {
        path: RoutePaths.search,
        element: <SearchPage />
    },
    [AppRoutes.TABLES]: {
        path: RoutePaths.tables,
        element: <SearchPage />
    },
    [AppRoutes.CALENDAR]: {
        path: RoutePaths.calendar,
        element: <SearchPage />
    },
    [AppRoutes.MAPS]: {
        path: RoutePaths.maps,
        element: <SearchPage />
    },
    [AppRoutes.WIDGETS]: {
        path: RoutePaths.widgets,
        element: <SearchPage />
    },
    [AppRoutes.PROFILE_SETTINGS]: {
        path: RoutePaths.profile_settings,
        element: <SearchPage />
    },
    [AppRoutes.FINANCIAL_MANAGEMENT]: {
        path: RoutePaths.financial_management,
        element: <SearchPage />
    }
};
