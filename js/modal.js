const $setting = document.querySelector('#setting')
const $btnClose = document.querySelector('#close')
const $modal = document.querySelector('.modal')
export const $modalSpeed = document.querySelector('#modal-velocidad')



$btnClose.addEventListener('click', closeModal)
$setting.addEventListener('click', settingSpeed)

function closeModal(){
  $modal.close()
}

function settingSpeed(){
  $modalSpeed.showModal();
}