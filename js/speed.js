import { $modalSpeed } from "./modal.js"

const $speed = document.querySelector('#speed')
const $txtSpeed = document.querySelector('#txtSpeed')
const $saveSpeed = document.querySelector('#saveSpeed')


$speed.addEventListener('pointermove', handlerSpeed)
$speed.addEventListener('click', handlerSpeed)


function handlerSpeed(){
  $txtSpeed.textContent = `x${$speed.value}`
}


export function getSpeed() {
  return new Promise((resolve) => {
    $saveSpeed.addEventListener('click', () => {
      resolve(Number($speed.value))
      $modalSpeed.close()
    })


  });
}




