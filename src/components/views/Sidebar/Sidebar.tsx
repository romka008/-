import cn from "classnames";

import {useAppSelector} from "@store/hooks";
import {SidebarItemsList} from "./items";
import {LogoutButton, SidebarItem} from "./SidebarItem/SidebarItem";

import styles from "./Sidebar.module.css";

export const Sidebar = () => {
    const {openMenu: showMenu} = useAppSelector(state => state.sidebar);

    return (
        <nav className={showMenu ? styles.nav : styles.navMin}>
            <div className={styles.items} style={{display: "flex", justifyContent: "space-between"}}>
                <div className={styles.items}>
                    <div className={cn(styles.header, {[styles.collapsed]: !showMenu})}>Меню</div>
                    {SidebarItemsList.map(item => {
                        return <SidebarItem key={item.path} item={item} collapsed={showMenu} />;
                    })}
                    <LogoutButton collapsed={showMenu} />
                </div>
            </div>
        </nav>
    );
};
