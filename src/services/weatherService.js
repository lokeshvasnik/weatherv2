const API_KEY = "85cf29c7106f3a15d6f07d5149fe5651";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const METRICS = "metric";

// SOME NOTE
/*

ONE CALL API HELPS TO GET HOURLY AND DAYS FORECAST
WHERE AS THE WEATHER USES THE CITY QUERRY

*/

// CALLING THE WHOLE WEATHER DATA USING A NEW URL
const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);

    url.search = new URLSearchParams({
        ...searchParams,
        appid: API_KEY,
        units: METRICS,
    });

    return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
};

// FORMATTED DATA 🔥

const formatCurrentWeather = (data) => {
    if (!data) {
        throw new Error("Weather data is undefined");
    }

    // Check if 'main' and 'weather' properties exist in the 'data' object
    if (!data.main || !data.weather || data.weather.length === 0) {
        throw new Error("Invalid weather data format");
    }

    const {
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        weather,
        sys: { country },
        wind: { speed },
        coord: { lon, lat },
    } = data;

    const { main: details, icon } = weather[0];

    return {
        temp,
        feels_like,
        temp_max,
        temp_min,
        humidity,
        name,
        lon,
        lat,
        country,
        details,
        icon,
        speed,
    };
};

const getFormattedWeatherData = async (searchParams) => {
    try {
        const weatherData = await getWeatherData("weather", searchParams);
        const formattedCurrentWeather = formatCurrentWeather(weatherData);
        return formattedCurrentWeather;
    } catch (error) {
        throw new Error(
            `Error getting formatted weather data: ${error.message}`
        );
    }
};
// ICON URL HANDLER
const iconUrl = (code) => {
    return `http://openweathermap.org/img/wn/${code}@2x.png`;
};

// FIXED VALUE GENERATOR
function fixedCelciesUpdater(value) {
    return `${value.toFixed()}°`;
}

export { iconUrl, fixedCelciesUpdater };
export default getFormattedWeatherData;
