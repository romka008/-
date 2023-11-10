import {memo, useState} from "react";
import cn from "classnames";

import ArrowDownIcon from "@assets/icon/ArrowDownIcon.svg";
import LogoutIcon from "@assets/icon/Logout.svg";
import {AppLink} from "@components/AppLink/AppLink";
import {ISidebarItemType} from "../items";

import styles from "./SidebarItem.module.css";

interface ISidebarItemProps {
    item: ISidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({item, collapsed}: ISidebarItemProps) => {
    const [isShowSubItem, setIsShowSubItem] = useState(false);
    if (item.childrenPath) {
        return (
            <>
                <div
                    className={cn(styles.item, {[styles.collapsed]: !collapsed})}
                    onClick={() => setIsShowSubItem(prev => !prev)}>
                    <div className={isShowSubItem ? styles.subItem : styles.hideSubItem}>
                        <div className={styles.mainItem}>
                            <item.Icon className={styles.icon} />
                            <div className={styles.title}>{collapsed && item.text}</div>
                        </div>
                        <span className={styles.title}>
                            <ArrowDownIcon />
                        </span>
                    </div>
                </div>
                {item.childrenPath.map(el => {
                    return (
                        <div
                            key={el.text}
                            className={cn(styles.item, {
                                [styles.collapsed]: !collapsed,
                                [styles.hideDownItem]: !isShowSubItem
                            })}>
                            <AppLink className={cn(styles.item, {[styles.collapsed]: !collapsed})} to={el.path}>
                                <el.Icon className={styles.icon} />
                                <span className={styles.title}>{collapsed && el.text}</span>
                            </AppLink>
                        </div>
                    );
                })}
            </>
        );
    }
    return (
        <AppLink className={cn(styles.item, {[styles.collapsed]: !collapsed})} to={item.path}>
            <item.Icon className={styles.icon} />
            <span className={styles.title}>{item.text}</span>
        </AppLink>
    );
});

interface ILogoutButtonProps {
    collapsed: boolean;
}

export const LogoutButton = ({collapsed}: ILogoutButtonProps) => {
    return (
        <div className={cn(styles.item, {[styles.collapsed]: !collapsed})}>
            <LogoutIcon className={styles.icon} />
            <span className={styles.title}>Выход</span>
        </div>
    );
};
