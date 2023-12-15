import "../../components/styles.css";
import { useSelector } from "react-redux";
import { selectWeather } from "./weatherSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWeatherStart, getWeatherSuccess, getWeatherFailure, toggleLoading} from "./weatherSlice";

export default function Weather() {
    const dispatch = useDispatch();

    const weather = useSelector(selectWeather);
    const api_key = '';


    useEffect(() => {
        getWeatherStart();
        async function fetchData() {
            console.log(`http://api.weatherstack.com/current?access_key=${api_key}&query=Laramie&units=f`)
            const response = await fetch(`http://api.weatherstack.com/current?access_key=${api_key}&query=Laramie&units=f`);
            const data = await response.json();
            return data;
        }
        // fetchData().then(data => {
        //     console.log(data)
        //     dispatch(getWeatherSuccess(data));
        // });
    }, []);

    return (

        <div className="weather">
            {weather.isLoading &&
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            {!weather.isLoading &&

                <div className="row">
                    <div className="col-6">
                        <img src={weather.weather.current.weather_icons[0]} alt="weather icon" />
                    </div>
                    <div className="col-6">
                        <h3>{weather.weather.current.temperature}°F</h3>
                        <p>{weather.weather.current.weather_descriptions[0]}</p>
                    </div>
                </div>
            }

        </div>
    );
}