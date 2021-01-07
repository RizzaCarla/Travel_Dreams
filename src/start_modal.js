const startingModalButton = document.getElementById('starting-modal-button');
const startingModal = document.getElementById('starting-modal');
const mapOfJapan = document.getElementsByClassName('map-of-japan');
const regionInfo = document.getElementById('region-info')

startingModalButton.addEventListener('click', (e) => {
  startingModal.style.display = "none";
  document.body.style.backgroundColor = "white";
  for (let i = 0; i < mapOfJapan.length; i++) {
    mapOfJapan[i].style.display = "block";
  }
  regionInfo.style.display = "block";
})
