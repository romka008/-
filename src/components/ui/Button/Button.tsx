import React, {MouseEventHandler} from "react";
import cn from "classnames";

import styles from "./Button.module.css";

interface IButtonProps {
    value?: string;
    disabled?: true | false;
    title?: string;
    Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
    fontSize?: string;
    fontSizeValue?: string;
    blue?: boolean;
    red?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({value, disabled, Icon, fontSizeValue, title, blue, red, onClick}: IButtonProps) => {
    const buttonClassName = cn(styles.buttonIcon, {
        [styles.disabled]: disabled,
        [styles.blue]: blue,
        [styles.red]: red
    });

    return (
        <button className={buttonClassName} onClick={onClick} disabled={disabled} title={title}>
            {Icon && <Icon />}
            <div className={styles.buttonTitle} style={fontSizeValue ? {fontSize: fontSizeValue} : {fontSize: ""}}>
                {value}
            </div>
        </button>
    );
};

export default Button;
