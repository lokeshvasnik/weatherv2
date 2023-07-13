import React from "react";

const List = ({ data }) => {
    return (
        <>
            <li className="center" title="humidity">
                <span className="material-symbols-outlined">humidity_low</span>
                <p>{data.main.humidity}</p>
            </li>
            <li className="center" title="wind">
                <span className="material-symbols-outlined">air</span>
                <p>{data.wind.speed}</p>
                <span className="small__span">km/h</span>
            </li>
            <li className="center" title="max_temp">
                <span className="material-symbols-outlined">
                    device_thermostat
                </span>
                <p>{data.main.temp_max}</p>
            </li>
        </>
    );
};

export default List;
