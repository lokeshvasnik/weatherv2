import React, { useEffect } from "react";
import sun from "../assets/sun.svg";
import umbrella from "../assets/umbrella.svg";
import List from "./List";

const Display = ({ data }) => {
    const weather = data.weather[0].main;

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
            <div className="center" title="temperature">
                <span className="temp">{data.main.temp}</span>
                <span className="small__span">
                    its's {data.weather[0].main}
                </span>
            </div>
            <ul>
                <List data={data} />
            </ul>
        </div>
    );
};

export default Display;
