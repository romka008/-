import React from "react";
import Button from "@components/Button/Button";

import styles from "./UnexpectedError.module.css";

const reloadPage = () => {
    window.location.reload();
};

export const UnexpectedError = () => {
    return (
        <div className={styles.container}>
            <div className={styles.error}>
                <div>Произошла непредвиденная ошибка</div>
                <Button value="Обновить страницу" onClick={reloadPage} icon="refresh" />
            </div>
        </div>
    );
};
