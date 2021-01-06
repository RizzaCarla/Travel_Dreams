const startingModalButton = document.getElementById('starting-modal-button');
const startingModal = document.getElementById('starting-modal');
const mapOfJapan = document.getElementById('map-of-japan');
const regionInfo = document.getElementById('region-info')

startingModalButton.addEventListener('click', (e) => {
  startingModal.style.display = "none";
  document.body.style.backgroundColor = "white";
  mapOfJapan.style.display = "block";
  regionInfo.style.display = "block";
})
