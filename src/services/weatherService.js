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
    const {
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        weather,
        sys: { country },
        wind: { speed },
    } = data;

    const { main: details, icon } = weather[0];

    return {
        temp,
        feels_like,
        temp_max,
        temp_min,
        humidity,
        name,
        country,
        details,
        icon,
        speed,
    };
};

// Search Params = 'london','lat,'long'
const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        "weather",
        searchParams
    )
        .then(formatCurrentWeather)
        .catch((err) => {
            throw new Error(err);
        });

    return { ...formattedCurrentWeather };
};

// ICON URL HANDLER
const iconUrl = (code) => {
    return `http://openweathermap.org/img/wn/${code}@2x.png`;
};

// FIXED VALUE
function fixedCelciesUpdater(value) {
    return `${value.toFixed()}°`;
}

export { iconUrl, fixedCelciesUpdater };
export default getFormattedWeatherData;

// const { lat, lon } = formattedCurrentWeather;
// -------------------------------------------------------------------------------
// const formattedForecastWeather = await getWeatherData("onecall", {
//     lat,
//     lon,
//     exclude: "current,minutely,alerts",
//     units: searchParams.units,
// }).then(formatForecastWeather);
// -------------------------------------------------------------------------------
// const formatForecastWeather = (data) => {
//     console.log(data);
//     let { daily } = data;
//     daily = daily.slice(1, 4).map((daily) => {
//         return {
//             temp: daily.temp.day,
//             icon: daily.weather[0].icon,
//         };
//     });

//     return daily;
// };
