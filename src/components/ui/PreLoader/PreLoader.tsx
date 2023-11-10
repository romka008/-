import styles from "./PreLoader.module.css";

export const PreLoader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.circle}></div>
        </div>
    );
};
