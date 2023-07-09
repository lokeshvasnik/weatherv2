import React from "react";

const List = ({ data }) => {
    return (
        <>
            <li className="flex">
                <span className="material-symbols-outlined">humidity_low</span>
                <p>{data.main.humidity}</p>
            </li>
            <li className="flex">
                <span className="material-symbols-outlined">air</span>
                <p>
                    {data.wind.speed} <span>km/h</span>
                </p>
            </li>
            <li className="flex">
                <span className="material-symbols-outlined">
                    device_thermostat
                </span>
                <p>{data.main.temp_max}</p>
            </li>
        </>
    );
};

export default List;
