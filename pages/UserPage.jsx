import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
    const { id } = useParams();

    console.log(id);

    return <div>User Page number {id}</div>;
};

export default UserPage;
