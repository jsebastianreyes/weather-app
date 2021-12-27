function geolocationSupport(){
  return "geolocation" in navigator
}

export function getCurrentPosition(){

  if (!geolocationSupport) throw new Error('Ha ocurrido un error con el soporte de Geolocalización🙃')
  return new Promise((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      resolve({lat, lon})

    }, () => {
      reject('Fallo en la app 😥')
    }, {})
  })


}