import React from "react";
import Input from "./Input";
import Display from "./Display";
import { SyncLoader } from "react-spinners";
const Weather = ({ setQuery, query, weather, isLoading }) => {
    return (
        <div className="app">
            <Input setQuery={setQuery} query={query} />
            <div>
                {weather.length === 0 ? (
                    ""
                ) : query.length === 0 ? (
                    " "
                ) : isLoading ? (
                    <SyncLoader color="#4dbfd9" />
                ) : (
                    <Display data={weather} />
                )}
            </div>
        </div>
    );
};

export default Weather;
