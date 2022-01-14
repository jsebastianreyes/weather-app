import { createDOM } from './utils/dom.js'
import { formatTemp } from './utils/format-data.js'

function templateForHourWeather(index, {tempMax, tempMin, humidity, wind}){

  return `<div class="hours-weather" id="hours-weather-${index}">
          <section>
           <p> Máx: <b>${tempMax}</b> </p>
           <p> Min: <b>${tempMin}</b> </p>
           <p> Viento: <b>${wind} Km-h</b> </p>
           <p> Humedad: <b>${humidity}</b> </p>
          </section>
        </div>
  `
}

function createSectionHour(index, config){
   const $sectionForHour = createDOM(templateForHourWeather(index, config))

   if(index > 0){
     $sectionForHour.hidden = true
   }

   return $sectionForHour
}

// function DOMforHour(index)


export default function currentHourWeather(index, weather){
  // console.log(weather)

  const tempMax = formatTemp(weather.main.temp_max)
  const tempMin = formatTemp(weather.main.temp_min)
  // console.log(tempMin)
  const humidity = `${weather.main.humidity}%`
  const wind = Math.round(weather.wind.speed)
  const config = {
    tempMax,
    tempMin,
    humidity,
    wind
  }

  return createSectionHour(index, config)


}