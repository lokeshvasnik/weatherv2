import React from "react";
import List from "./List";
import { fixedCelciesUpdater } from "../services/weatherService";

const Display = ({ data }) => {
    // CHANGE THIS CODE LOGIC TO API IMAGE PROVIDED
    const { details, temp } = data;

    let image = null;

    switch (details) {
        case "Clouds":
            image = "/cloudy.svg";
            break;

        case "Rain":
            image = "/umbrella.svg";
            break;

        case "Snow":
            image = "/snow.svg";
            break;

        case "Clear":
            image = "/sunny.svg";
            break;

        case "Mist":
            image = "/mist.svg";
            break;

        default:
            image = "";
            break;
    }

    return (
        <div className="flex">
            <img src={image} alt="error" />
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
