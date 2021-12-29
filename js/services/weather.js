export async function getDataWeather(lat, lon){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bc512747463ea5d0734adc4b2988fa11&units=metric`)

  const dataWeather = await response.json()
  // console.log(dataWeather)
  return dataWeather
}