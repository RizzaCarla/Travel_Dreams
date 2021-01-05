const startingModalButton = document.getElementById('starting-modal-button');
const startingModal = document.getElementById('starting-modal');

startingModalButton.addEventListener('click', (e) => {
  startingModal.style.display = "none";
  document.body.style.backgroundColor = "white";
})
