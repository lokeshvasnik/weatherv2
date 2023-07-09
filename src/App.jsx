import React, { useEffect, useState } from "react";
import "./index.css";
import Input from "./components/Input";
import Display from "./components/Display";
import { SyncLoader } from "react-spinners";

const KEY = "85cf29c7106f3a15d6f07d5149fe5651";
const App = () => {
    const [weather, setWeather] = useState([]);
    const [querry, setQuerry] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Fetching weather data
    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                setIsLoading(true);
                const data = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${querry}&appid=${KEY}&units=metric`
                );

                const response = await data.json();
                setWeather(response);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        };

        fetchWeatherData();
    }, [querry]);

    // console.log(typeof weather.main != "undefined");
    return (
        <div className="app">
            <Input setQuerry={setQuerry} />
            {isLoading ? (
                <SyncLoader color="#36d7b7" />
            ) : (
                <div>
                    {typeof weather.main != "undefined" ? (
                        <Display data={weather} />
                    ) : (
                        ""
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
