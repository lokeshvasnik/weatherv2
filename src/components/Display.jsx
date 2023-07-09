import React from "react";
import sun from "../assets/sun.svg";
import umbrella from "../assets/umbrella.svg";
import List from "./List";

const Display = ({ data, onWeatherDescription }) => {
    const weather = data.weather[0].main;
    onWeatherDescription(data.weather[0].main);
    return (
        <div className="flex">
            {weather === "Clouds" ? (
                <img src={sun} alt="weather" />
            ) : weather === "Rain" ? (
                <img src={umbrella} alt="weather" />
            ) : (
                <img src={sun} alt="weather" />
            )}

            {/* <span>{data ? data.main.temp : ""}</span> */}
            <span className="btn temp">{data.main.temp}</span>
            <ul>
                <List data={data} />
            </ul>
        </div>
    );
};

export default Display;
