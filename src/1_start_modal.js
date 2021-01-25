const startingModalButton = document.getElementById('starting-modal-button');
const mapOfJapan = document.getElementsByClassName('map-of-japan');
const regionInfo = document.getElementById('region-info')

const startingModal = document.getElementById('starting-modal');
const regionPage = document.getElementById('region-page')

startingModalButton.addEventListener('click', (e) => {
  startingModal.style.display = "none";
  document.body.style.backgroundColor = "white";
  for (let i = 0; i < mapOfJapan.length; i++) {
    mapOfJapan[i].style.display = "block";
  }
  regionInfo.style.display = "block";
  regionPage.style.display = 'block';
  
})
