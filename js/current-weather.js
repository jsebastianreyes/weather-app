
import weather from '../data/current-weather.js'
import { formatDate, formatTemp} from './utils/format-data.js'
import { weatherConditionCodes} from './constants.js'
import { getCurrentPosition } from './geolocation.js'

function setCurrentCity($element, city){
  $element.textContent = city
}


function setCurrentDate($element){
  const date = new Date
  const formattedDate = formatDate(date)
  $element.textContent = formattedDate
}

function setCurrentTemp($elemento, temp){
  $elemento.textContent = formatTemp(temp)
}

function solarStatus(sunrise, sunset){
  const sunriseTime = sunrise.getHours()
  const sunsetTime = sunset.getHours()
  const currentTime = new Date().getHours()
  // console.log(sunriseTime)
  // console.log(sunsetTime)
  // console.log(currentTime)
  if(currentTime >= sunriseTime && currentTime < sunsetTime){
    return 'morning'
  }
  return 'night'
}



function setBackground($elemento, solarStatus, conditionCode){
  const weatherType = weatherConditionCodes[conditionCode]

  const size = window.matchMedia("(-webkit-min-device-pixel-ratio: 2)").matches ? '@2k' : ''
  // let size = ''
  // // if (window.matchMedia("(-webkit-min-device-pixel-ratio: 2)").matches){
  // //   size = '@2x'
  // // }


  $elemento.style.backgroundImage = `url(../images/${solarStatus}-${weatherType}${size}.jpg)`
}

function configCurrentWeather(weather){

  //Loader
  //Fecha actual
  const $currentWeatherDate = document.querySelector('#current-weather-date')
  setCurrentDate($currentWeatherDate)
  //city
  const $currentWeatherCity = document.querySelector('#current-weather-city')
  const city = weather.name
  setCurrentCity($currentWeatherCity, city )
  //temperatura
  const $currentWeatherTemp = document.querySelector('#current-weather-temp')
  const temp = weather.main.temp
  setCurrentTemp($currentWeatherTemp, temp)
  //bg dinamico
  const $app = document.querySelector('#app')
  const sunriseTime = new Date(weather.sys.sunrise * 1000)
  const sunsetTime = new Date(weather.sys.sunset * 1000)
  const conditionCode = String(weather.weather[0].id).charAt(0)

  setBackground($app,solarStatus(sunriseTime, sunsetTime), conditionCode)
}


export default function currentWeather(){
  getCurrentPosition()
  .then((data)=>{
    console.log(data)
  })
  .catch((message)=>{
    console.log(message)
  })
  // console.log(getCurrentPosition())
  configCurrentWeather(weather)
  console.log(weather)
}

