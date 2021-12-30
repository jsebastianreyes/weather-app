function geolocationSupport(){
  return "geolocation" in navigator
}

//Valores por defecto que va recibir getCurrentPosition

const defaultOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 1000000,
}


export function getCurrentPosition(options = defaultOptions){
//recibe 3 parametros
  if (!geolocationSupport) throw new Error('Ha ocurrido un error con el soporte de Geolocalización🙃')
  return new Promise((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition(position => {
      // console.log(position)
      resolve(position)
    }, () => {
      reject('Fallo en la app 😥')
    }, options)
  })

}

export async function getLatLon(options = defaultOptions){
  try{
    const { coords: { latitude: lat, longitude: lon } } = await getCurrentPosition(options)
    return { lat, lon, isError:false }
  }catch{
    return{isError: true, lat: null, lon: null}
  }
}