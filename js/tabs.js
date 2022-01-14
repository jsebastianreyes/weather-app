
const $tabContainer = document.querySelector('#tabs')
const $tabList = $tabContainer.querySelectorAll('.tab')

const today = new Date()
let weekday = today.getDay()

const week = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
]

function nextDay(day) {
  if (day === 6) {
    return 0
  }
  return day + 1
}

$tabList.forEach(($tab, index) => {
  $tab.addEventListener('click', handleSelectTabClick)
  if (index === 0) {
    $tab.textContent = 'Hoy'
    weekday = nextDay(weekday)
    return false
  }
  $tab.textContent = week[weekday]
  weekday = nextDay(weekday)
})


function handleSelectTabClick(event) {
  if (this.getAttribute('aria-selected') == true){
    $tabPanelSelected.hidden = true
  }
  const $tabSelected = event.target
  const $tabActive = document.querySelector('.tab[aria-selected="true"]')
  $tabActive.removeAttribute('aria-selected')
  $tabSelected.setAttribute('aria-selected', true)

  const id = $tabSelected.id
  const $tabPanel = document.querySelector(`[aria-labelledby=${id}]`)
  const $tabPanelSelected = document.querySelector(`.tabPanel:not([hidden])`)
  $tabPanelSelected.hidden = true
  $tabPanel.hidden = false

}

//TABS POR HORA

export function tabForHours(weeklist) {
  const $dayTabs = document.querySelectorAll('.dayWeather-item')
  $dayTabs.forEach(($tab, indexTab) => {
    if (indexTab === 0) {
      const $txtTab = $tab.querySelector('.dayWeather-time')
      $txtTab.textContent = 'Ahora'
      $tab.classList.add("is-selected");
      $tab.setAttribute('aria-selected', true)
      // $tab.setAttribute('aria-selected', true)

      // console.log(weeklist)
    }
    $tab.addEventListener('click', handleTabDayClick)
  })
}

function handleTabDayClick() {
  const $tabDayActive = document.querySelector('.dayWeather-item[aria-selected="true"]')
  const $tabSelected = this

  $tabSelected.setAttribute('aria-selected', true)
  $tabDayActive.removeAttribute('aria-selected')
  $tabSelected.classList.add('is-selected')
  $tabDayActive.classList.remove('is-selected')

  const getID = this.id
  const id = getID.charAt(getID.length - 1)
  const $tabPanel = document.querySelector(`.tabPanel:not([hidden]) #hours-weather-${id}`)
  const $tabPanelSelected = document.querySelector(`.tabPanel:not([hidden]) .hours-weather:not([hidden])`)


  $tabPanel.hidden = false
  $tabPanelSelected.hidden = true



}


