import React from "react";
import {RoutePaths} from "../../config/routeConfig/routeConfig";
import HomeIcon from "@assets/icon/HomeIcon.svg";
import SearchIcon from "@assets/icon/SearchIcon.svg";
import TablesIcon from "@assets/icon/TablesIcon.svg";
import CalendarIcon from "@assets/icon/CalendarIcon.svg";
import MapLabelIcon from "@assets/icon/MapLabelIcon.svg";
import WidgetIcon from "@assets/icon/WidgetIcon.svg";
import SettingIcon from "@assets/icon/SettingIcon.svg";
import ProfileIcon from "@assets/icon/ProfileIcon.svg";
import FinancialManagementIcon from "@assets/icon/FinancialManagement.svg";

export interface ISidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    childrenPath?: {
        path: string;
        text: string;
        Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    }[];
}

export const SidebarItemsList: ISidebarItemType[] = [
    {
        path: RoutePaths.main,
        text: "Главная",
        Icon: HomeIcon
    },
    {
        path: RoutePaths.search,
        text: "Поиск адресов",
        Icon: SearchIcon
    },
    {
        path: RoutePaths.tables,
        text: "Таблицы",
        Icon: TablesIcon
    },
    {
        path: RoutePaths.calendar,
        text: "Календарь",
        Icon: CalendarIcon
    },
    {
        path: RoutePaths.maps,
        text: "Карты",
        Icon: MapLabelIcon
    },
    {
        path: RoutePaths.widgets,
        text: "Виджеты",
        Icon: WidgetIcon
    },
    {
        path: RoutePaths.profile_settings,
        childrenPath: [
            {
                path: RoutePaths.profile_settings,
                text: "Настройки профиля",
                Icon: ProfileIcon
            },
            {
                path: RoutePaths.financial_management,
                text: "Управление финансами",
                Icon: FinancialManagementIcon
            }
        ],
        text: "Настройки",
        Icon: SettingIcon
    }
];
