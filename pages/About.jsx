import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    console.log(navigate);

    return (
        <div>
            <p>Hello, About</p>
            <button onClick={() => navigate(-1)}>Назад</button>
        </div>
    );
};

export default About;
