import React from "react";
import "./index.css";
import TuitsList from "../tuits/tuit-list"
import WhatsHappening from "./whats-happening"
const HomeComponent = () => {
    return(
        <div>
            <WhatsHappening/>
            <TuitsList/>
        </div>
    );
};
export default HomeComponent;