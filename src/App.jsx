import React, { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import Input from "./components/Input";
import Display from "./components/Display";
import getFormattedWeatherData from "./services/weatherService";
import "./index.css";

const App = () => {
    const [weather, setWeather] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // FUNCTION CALL FROM WEATHER SERVICE

    // Fetching weather data

    useEffect(() => {
        const fetchWeatherData = () => {
            try {
                const debounceData = setTimeout(async () => {
                    setIsLoading(true);
                    const data = await getFormattedWeatherData({ q: query });

                    setWeather(data);
                    setIsLoading(false);
                }, 900);

                return () => clearTimeout(debounceData);
            } catch (err) {
                setIsLoading(false);
            }
        };

        fetchWeatherData();
    }, [query]);

    return (
        <div className="app">
            <Input setQuery={setQuery} query={query} />

            <div>
                {weather.length === 0 ? (
                    ""
                ) : query.length === 0 ? (
                    " "
                ) : isLoading ? (
                    <SyncLoader />
                ) : (
                    <Display data={weather} />
                )}
            </div>
        </div>
    );
};

export default App;
