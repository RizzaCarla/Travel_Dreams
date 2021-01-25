const endButton = document.getElementById('end-modal-button')
const itinerary = document.getElementById('itinerary')
const regionPage = document.getElementById('region-page')
const startingModal = document.getElementById('starting-modal')
const endModal = document.getElementById('end-modal')
endButton.addEventListener('click', (e) => {
  endModal.style.display = 'none';
  itinerary.style.display = 'none';
  regionPage.style.display = 'none';
  startingModal.style.display = 'flex';

  document.getElementById('hokkaido-prefecture-list').style.display = 'none';
  document.getElementById('tohoku-prefecture-list').style.display = 'none';
  document.getElementById('kanto-prefecture-list').style.display = 'none';
  document.getElementById('chubu-prefecture-list').style.display = 'none';
  document.getElementById('kansai-prefecture-list').style.display = 'none';
  document.getElementById('chugoku-prefecture-list').style.display = 'none';
  document.getElementById('shikoku-prefecture-list').style.display = 'none';
  document.getElementById('kyushu-prefecture-list').style.display = 'none';

  document.getElementById('hokkaido-cultural-list').style.display = 'none';
  document.getElementById('hokkaido-historical-list').style.display = 'none';
  document.getElementById('hokkaido-picture-perfect-list').style.display = 'none';

  document.getElementById('tohoku-cultural-list').style.display = 'none';
  document.getElementById('tohoku-historical-list').style.display = 'none';
  document.getElementById('tohoku-picture-perfect-list').style.display = 'none';

  document.getElementById('kanto-cultural-list').style.display = 'none';
  document.getElementById('kanto-historical-list').style.display = 'none';
  document.getElementById('kanto-picture-perfect-list').style.display = 'none';

  document.getElementById('chubu-cultural-list').style.display = 'none';
  document.getElementById('chubu-historical-list').style.display = 'none';
  document.getElementById('chubu-picture-perfect-list').style.display = 'none';

  document.getElementById('kansai-cultural-list').style.display = 'none';
  document.getElementById('kansai-historical-list').style.display = 'none';
  document.getElementById('kansai-picture-perfect-list').style.display = 'none';

  document.getElementById('chugoku-cultural-list').style.display = 'none';
  document.getElementById('chugoku-historical-list').style.display = 'none';
  document.getElementById('chugoku-picture-perfect-list').style.display = 'none';

  document.getElementById('shikoku-cultural-list').style.display = 'none';
  document.getElementById('shikoku-historical-list').style.display = 'none';
  document.getElementById('shikoku-picture-perfect-list').style.display = 'none';

  document.getElementById('kyushu-cultural-list').style.display = 'none';
  document.getElementById('kyushu-historical-list').style.display = 'none';
  document.getElementById('kyushu-picture-perfect-list').style.display = 'none';

})