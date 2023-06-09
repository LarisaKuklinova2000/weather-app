import { postData, getResource } from "../services/requests";

const Weather = () => {

    const input = document.querySelector('.search'),
          btn = document.querySelector('.searchButton');
    let lat, lon;

    const setLatLon = (at, on) => {
        lat = at;
        lon = on;

        return lat, lon;
    } ;
    
    btn.addEventListener('click', () => {
        getResource(`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=5&appid=c1b4d20b0cce223d5983de6a25e8470d`)
        .then(res => {
            getResource(`https://api.openweathermap.org/data/3.0/onecall?lat=${res[0].lat}&lon=${res[0].lon}&exclude=daily&appid=c1b4d20b0cce223d5983de6a25e8470d`)
            .then(res => console.log(res));
        });
    });
};

export default Weather;

