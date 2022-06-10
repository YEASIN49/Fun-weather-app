import axios from "axios"

const apiKey=process.env.REACT_APP_WEATHER_API_KEY


const fetchData = async (city) => {
    return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey)
        .then(res => {  
            // console.log(res)
            return res
        })
        .catch(err => {
            console.error(err)
        })
}

export {fetchData}