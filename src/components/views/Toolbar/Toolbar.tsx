import {useState} from "react";
import {NavLink} from "react-router-dom";

import {useAppDispatch} from "@store/hooks";
import {editShowMenu} from "@store/sidebarReducer";
import LogoIcon from "@assets/icon/LogoIcon.svg";
import HeaderProfileIcon from "@assets/icon/HeaderProfileIcon.svg";

import styles from "./Toolbar.module.css";

export const Toolbar = () => {
    const [toogleMenu, setToogleMenu] = useState(false);
    const dispatch = useAppDispatch();

    const toogleShowMenu = () => {
        setToogleMenu(prevState => !prevState);
        dispatch(editShowMenu(toogleMenu));
    };

    return (
        <div className={styles.toolbar}>
            <div className={styles.toolbarLeft}>
                <button className={styles.icon} onClick={toogleShowMenu}>
                    <div className={styles.iconMenu}>
                        <span></span>
                    </div>
                </button>
                <LogoIcon />
                <div className={styles.title}>
                    <NavLink to="/">
                        <div className={styles.title}>Wrench CRM</div>
                    </NavLink>
                </div>
            </div>
            <div className={styles.toolbarRight}>
                <HeaderProfileIcon />
                <div>Имя Фамилия</div>
            </div>
        </div>
    );
};
