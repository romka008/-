import {ReactNode, memo} from "react";
import {LinkProps, NavLink} from "react-router-dom";
import cn from "classnames";

import styles from "./AppLink.module.css";

interface IAppLinkProps extends LinkProps {
    to: string;
    children: ReactNode;
    className?: string;
}

export const AppLink = memo(({to, className, children}: IAppLinkProps) => {
    return (
        <NavLink className={({isActive}) => cn(styles.appLink, [className], {[styles.itemActive]: isActive})} to={to}>
            {children}
        </NavLink>
    );
});
