import React from "react";
import List from "./List";
import { fixedCelciesUpdater, iconUrl } from "../services/weatherService";

const Display = ({ data }) => {
    // CHANGE THIS CODE LOGIC TO API IMAGE PROVIDED
    const { details, temp, icon } = data;

    return (
        <div className="flex">
            <img src={iconUrl(icon)} alt="error" />
            <div className="center" title="temperature">
                <span className="temp">{fixedCelciesUpdater(temp)}</span>
                <span className="small__span">its's {details}</span>
            </div>
            <ul>
                <List data={data} />
            </ul>
        </div>
    );
};

export default Display;
