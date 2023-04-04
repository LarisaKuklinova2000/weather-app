import { postData, getResource } from "../services/requests";

const Weather = () => {

    const input = document.querySelector('.search'),
          btn = document.querySelector('.searchButton');
    
    btn.addEventListener('click', () => {
        getResource(`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=5&appid=c1b4d20b0cce223d5983de6a25e8470d`)
    });
}

export default Weather;

