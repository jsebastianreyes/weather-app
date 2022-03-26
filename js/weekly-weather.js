import { getWeeklyWeather } from './services/weather.js'
import { getLatLon } from './geolocation.js'
import { formatWeekList } from './utils/format-data.js'
import { createDOM } from './utils/dom.js'
import { createPeriodTime } from './period-time.js'
import draggable from './draggble.js'
import { tabForHours } from './tabs.js'
import  currentHourWeather  from './hours-weather.js'

function tabPanelTemplate(id) {
  return `
    <div class="tabPanel" tabindex="0" aria-labelledby="tab-${id}">
      <div class="dayWeather" id="dayWeather-${id}">
        <ul class="dayWeather-list" id="dayWeather-list-${id}">

        </ul>
        <section class="info-hour-weather">
        </section>
      </div>
    </div>
  `
}

function createTabPanel(id) {
  const $panel = createDOM(tabPanelTemplate(id))
  if (id > 0) {
    $panel.hidden = true
  }
  return $panel
}

function configWeeklyWeather(weeklist) {
  console.log(weeklist)
  const $container = document.querySelector('.tabs')
  weeklist.forEach((day, index) => {
    const $panel = createTabPanel(index)
    $container.append($panel)
    day.forEach((weather, indexWeather) => {
      $panel.querySelector('.dayWeather-list').append(createPeriodTime(weather, indexWeather))
      $panel.querySelector('.info-hour-weather').append(currentHourWeather(indexWeather, weather))
      // $panel.append(createDOM(createTest(weather, indexWeather)))
    })
  })
}

  export default async function weeklyWeather() {

    const $container = document.querySelector('.weeklyWeather')
    const { lat, lon, isError } = await getLatLon()
    if (isError) return console.log('A ocurrido un error ubicandote')
    const { isError: weeklyWeatherError, data: weather } = await getWeeklyWeather(lat, lon)
    if (weeklyWeatherError) return console.log('oh! a ocurrido un error trayendo el pronóstico del clima')
    const weeklist = formatWeekList(weather.list)
    // console.log(weather.list)
    configWeeklyWeather(weeklist)

    tabForHours()
    draggable($container)



}