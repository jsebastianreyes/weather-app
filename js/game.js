import { getSpeed } from './speed.js'
import { createDOM, random } from './utils/utils.js'
import { getScore } from './score.js'
import { changebackground } from './background.js'
import { viewportSize } from './resize-body.js'



//velocidad

const settingSpeed = {
  10: 10,
  20: 9,
  30: 8,
  40: 7,
  50: 6,
  60: 5,
  70: 4,
  80: 3,
  90: 2,
  100: 1,
}

// console.log(speed)

const $txtSpeed = document.querySelector('.header-right .speed')
const $app = document.querySelector('#app')
const $body = document.getElementsByTagName('body')
const $coins = document.querySelector('#coins')

//Inicialiar setInterval
let bubbles = null

//velocidad inicial
let $speed = 10

function createBubbles(speed){

  const $appInlineSize = $app.getBoundingClientRect().width
  const size = random(10,100)
  const position = random(140,$appInlineSize)


  return `<div class="bubble" style="inline-size:${size}px; animation-duration: ${settingSpeed[speed]}s; left: calc(${position}px - ${size}px)">
    <span></span>
  </div>`
}

async function printBubbles() {
  $app.append(createDOM(createBubbles($speed)))
  $txtSpeed.textContent = `Velocidad x${$speed}`
  scoreBubble()
  $speed = await getSpeed()
}

function scoreBubble(){
  const $bubbles = document.querySelectorAll('.bubble')

  $bubbles.forEach(bubble => {
    bubble.addEventListener('click', handlerBubbleClick)
  })
}

let scroreGlobal = 0
let test = 0

function handlerBubbleClick(event){
  this.classList.add('is-animated')
  const score =  getSizeBubble(event)
  changebackground(score, $app)
  let $scoreGlobal = scroreGlobal += score
  $coins.textContent = $scoreGlobal
}


function getSizeBubble(event){
  const bubbleSize = event.currentTarget.offsetHeight
  const score = getScore(bubbleSize)

  return score
}


export async  function startGame(){

  viewportSize($app)
  // // obtener velocidad
 bubbles = setInterval(printBubbles, 1000);

}



