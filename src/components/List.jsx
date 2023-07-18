import React from "react";

const List = ({ data }) => {
    const { humidity, speed, temp } = data;
    return (
        <>
            <li className="center" title="humidity">
                <span className="material-symbols-outlined">humidity_low</span>
                <p>{humidity}</p>
            </li>
            <li className="center" title="wind">
                <span className="material-symbols-outlined">air</span>
                <p>{speed}</p>
                <span className="small__span">km/h</span>
            </li>
            <li className="center" title="max_temp">
                <span className="material-symbols-outlined">
                    device_thermostat
                </span>
                <p>{temp}</p>
            </li>
        </>
    );
};

export default List;
