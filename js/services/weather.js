import { BASE_API, API_KEY } from '../constants.js'

export async function getDataWeather(lat, lon){
  const response = await fetch(`${BASE_API}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  if(!response.ok){
    return {isError: true, data: null}
  }
  const dataWeather = await response.json()
  // console.log(dataWeather)
  return {dataWeather, isError: false}
}