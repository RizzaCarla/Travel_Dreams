const itinerary = document.getElementById('itinerary')
const regionPage = document.getElementById('region-page')
const hokkaidoButton = document.getElementById('hokkaido-region-button')
const tohokuButton = document.getElementById('tohoku-region-button')
const kantoButton = document.getElementById('kanto-region-button')
const chubuButton = document.getElementById('chubu-region-button')
const kansaiButton = document.getElementById('kansai-region-button')
const chugokuButton = document.getElementById('chugoku-region-button')
const shikokuButton = document.getElementById('shikoku-region-button')
const kyushuButton = document.getElementById('kyushu-region-button')

hokkaidoButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block';
  document.getElementById('hokkaido-prefecture').style.display = 'block';
  document.getElementById('hokkaido-prefecture').style.display = 'flex';
  document.getElementById('hokkaido-prefecture').style.justifyContent = 'center';
  document.getElementById('hokkaido-prefecture').style.flexDirection = 'column';

  document.getElementById('sapporo-tourist-spot-list').style.display = 'flex';
  document.getElementById('sapporo-tourist-spot-list').style.flexDirection = "row";
  document.getElementById('sapporo-tourist-spot-list').style.justifyContent = "space-between";
  document.getElementById('sapporo-city-button').style.borderBottom = "2px solid gold";
})

tohokuButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block'
  document.getElementById('tohoku-prefecture').style.display = 'block';
  document.getElementById('tohoku-prefecture').style.display = 'flex';
  document.getElementById('tohoku-prefecture').style.justifyContent = 'center';
  document.getElementById('tohoku-prefecture').style.flexDirection = 'column';
})

kantoButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block'
  document.getElementById('kanto-prefecture').style.display = 'block';
  document.getElementById('kanto-prefecture').style.display = 'flex';
  document.getElementById('kanto-prefecture').style.justifyContent = 'center';
  document.getElementById('kanto-prefecture').style.flexDirection = 'column';
})

chubuButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block'
  document.getElementById('chubu-prefecture').style.display = 'block';
  document.getElementById('chubu-prefecture').style.display = 'flex';
  document.getElementById('chubu-prefecture').style.justifyContent = 'center';
  document.getElementById('chubu-prefecture').style.flexDirection = 'column';
})

kansaiButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block'
  document.getElementById('kansai-prefecture').style.display = 'block';
  document.getElementById('kansai-prefecture').style.display = 'flex';
  document.getElementById('kansai-prefecture').style.justifyContent = 'center';
  document.getElementById('kansai-prefecture').style.flexDirection = 'column';
})

chugokuButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block'
  document.getElementById('chugoku-prefecture').style.display = 'block';
  document.getElementById('chugoku-prefecture').style.display = 'flex';
  document.getElementById('chugoku-prefecture').style.justifyContent = 'center';
  document.getElementById('chugoku-prefecture').style.flexDirection = 'column';
})

shikokuButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block'
  document.getElementById('shikoku-prefecture').style.display = 'block';
  document.getElementById('shikoku-prefecture').style.display = 'flex';
  document.getElementById('shikoku-prefecture').style.justifyContent = 'center';
  document.getElementById('shikoku-prefecture').style.flexDirection = 'column';
})

kyushuButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block'
  document.getElementById('kyushu-prefecture').style.display = 'block';
  document.getElementById('kyushu-prefecture').style.display = 'flex';
  document.getElementById('kyushu-prefecture').style.justifyContent = 'center';
  document.getElementById('kyushu-prefecture').style.flexDirection = 'column';
})
