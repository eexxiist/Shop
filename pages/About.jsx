import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/About.module.css";

const About = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Hello, About</p>
            <button className={styles.backBtn} onClick={() => navigate(-1)}>
                Назад
            </button>
        </div>
    );
};

export default About;
