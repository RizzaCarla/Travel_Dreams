const itinerary = document.getElementById('itinerary')
const regionPage = document.getElementById('region-page')
const homeButton = document.getElementById('go-home-button')
const backButton = document.getElementById('back-button')
const mapOfJapan = document.getElementsByClassName('map-of-japan');
const regionInfo = document.getElementById('region-info')

regionPage.addEventListener('click', (e) => {
  backButton.style.display = 'block'
  homeButton.style.display = 'block'
})

homeButton.addEventListener('click', (e) => {
  itinerary.style.display = 'none';
  
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

  document.getElementById('end-modal').style.display = 'flex'
  document.body.style.backgroundColor = "rgb(253, 243, 243)";
})

backButton.addEventListener('click', (e) => {
  regionPage.style.display = 'block';
  regionInfo.style.display = "block";
  itinerary.style.display = 'none';
  backButton.style.display = 'none'
  homeButton.style.display = 'none'

  document.getElementById('hokkaido-region').style.filter = "none"
  document.getElementById('tohoku-region').style.filter = "opacity(55%)"
  document.getElementById('kanto-region').style.filter = "opacity(55%)"
  document.getElementById('chubu-region').style.filter = "opacity(55%)"
  document.getElementById('kansai-region').style.filter = "opacity(55%)"
  document.getElementById('chugoku-region').style.filter = "opacity(55%)"
  document.getElementById('shikoku-region').style.filter = "opacity(55%)"
  document.getElementById('kyushu-region').style.filter = "opacity(55%)"

  document.getElementById('hokkaido-info').style.visibility = "visible";
  document.getElementById('tohoku-info').style.visibility = "hidden";
  document.getElementById('kanto-info').style.visibility = "hidden";
  document.getElementById('chubu-info').style.visibility = "hidden";
  document.getElementById('kansai-info').style.visibility = "hidden";
  document.getElementById('chugoku-info').style.visibility = "hidden";
  document.getElementById('shikoku-info').style.visibility = "hidden";
  document.getElementById('kyushu-info').style.visibility = "hidden";

  document.getElementById('hokkaido-info-image').style.visibility = "visible";
  document.getElementById('tohoku-info-image').style.visibility = "hidden";
  document.getElementById('kanto-info-image').style.visibility = "hidden";
  document.getElementById('chubu-info-image').style.visibility = "hidden";
  document.getElementById('kansai-info-image').style.visibility = "hidden";
  document.getElementById('chugoku-info-image').style.visibility = "hidden";
  document.getElementById('shikoku-info-image').style.visibility = "hidden";
  document.getElementById('kyushu-info-image').style.visibility = "hidden";

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