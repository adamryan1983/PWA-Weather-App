import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
// const API_KEY = 'f33a484cf794d08d0148764789aaba32';
const API_KEY = '292a469c8509cf4eb5d5c299b3a02655'  //my key here!

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}