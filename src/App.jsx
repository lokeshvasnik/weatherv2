import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import Input from "./components/Input";
import Display from "./components/Display";
import { SyncLoader } from "react-spinners";

const KEY = "85cf29c7106f3a15d6f07d5149fe5651";
const App = () => {
    const [weather, setWeather] = useState([]);
    const [querry, setQuerry] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [increment, setIncrement] = useState(0);
    const refOne = useRef(null);

    const [theme, setTheme] = useState(["#e74c3c", "#32CD32", "#4DBFD9"]);

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
        const weatherDesc = (item) => {
            setDescription(item);
        };

        fetchWeatherData();
        weatherDesc();
    }, [querry]);

    // Handle
    useEffect(() => {
        document.addEventListener("click", themeChangeHandler, true);
    }, []);

    // Background Changer Logic
    const themeChangeHandler = (e) => {
        if (!refOne.current.contains(e.target)) {
            setIncrement((prevIncrement) => (prevIncrement + 1) % theme.length);
        }
    };

    // Changes in background
    useEffect(() => {
        document.body.style.background = theme[increment];
    }, [increment]);

    // console.log(typeof weather.main != "undefined");
    return (
        <div className="app" ref={refOne}>
            <Input setQuerry={setQuerry} description={description} />
            {isLoading ? (
                <SyncLoader color="#36d7b7" />
            ) : (
                <div>
                    {typeof weather.main != "undefined" ? (
                        <Display
                            onWeatherDescription={setDescription}
                            data={weather}
                        />
                    ) : (
                        ""
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
