import React from "react";
import styles from "../styles/Login.module.css";

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Регистрация</h1>
            <button className={styles.button}>Зарегистрироваться</button>
        </div>
    );
};

export default Login;
