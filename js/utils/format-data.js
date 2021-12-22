const defaultDateOptions = {
  day: 'numeric',
  weekday: 'long',
  month: 'long',
}

export function formatDate(date, options = defaultDateOptions){
  return new Intl.DateTimeFormat('es-ES', options).format(date)
}


export function formatTemp(temp){
  return `${Math.floor(temp)}°`
}

