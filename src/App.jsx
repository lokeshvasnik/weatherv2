import React, { useEffect, useState } from "react";
import getFormattedWeatherData from "./services/weatherService";
import "./index.css";
import Weather from "./components/Weather";
import Map from "./components/Map";
import { SyncLoader } from "react-spinners";
const App = () => {
    const [weather, setWeather] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Fetching weather data
    useEffect(() => {
        const fetchWeatherData = () => {
            try {
                const debounceData = setTimeout(async () => {
                    setIsLoading(true);
                    const data = await getFormattedWeatherData({ q: query });

                    setWeather(data);
                    setIsLoading(false);
                }, 1000);

                return () => clearTimeout(debounceData);
            } catch (err) {
                setIsLoading(false);
            }
        };

        fetchWeatherData();
    }, [query]);

    return (
        <>
            <main>
                <Weather
                    setQuery={setQuery}
                    query={query}
                    weather={weather}
                    isLoading={isLoading}
                />
                {weather.length === 0 ? (
                    ""
                ) : query.length === 0 ? (
                    ""
                ) : isLoading ? (
                    <div className="app">
                        <SyncLoader color="#4dbfd9" />
                    </div>
                ) : (
                    <Map data={weather} />
                )}
            </main>
            <footer>
                <p>Made by lokesh vasnik</p>
            </footer>
        </>
    );
};

export default App;
