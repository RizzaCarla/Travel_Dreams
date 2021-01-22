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
const homeButton = document.getElementById('go-home-button')
const backButton = document.getElementById('back-button')

regionPage.addEventListener('click', (e) => {
  backButton.style.display = 'block'
  homeButton.style.display = 'block'
})

backButton.addEventListener('click', (e) => {
  regionPage.style.display = 'block';
  itinerary.style.display = 'none';

  document.getElementById('hokkaido-prefecture-list').style.display = 'none';
  document.getElementById('tohoku-prefecture-list').style.display = 'none';
  document.getElementById('kanto-prefecture-list').style.display = 'none';
  document.getElementById('chubu-prefecture-list').style.display = 'none';
  document.getElementById('kansai-prefecture-list').style.display = 'none';
  document.getElementById('chugoku-prefecture-list').style.display = 'none';
  document.getElementById('shikoku-prefecture-list').style.display = 'none';
  document.getElementById('kyushu-prefecture-list').style.display = 'none';
  
  document.getElementById('hokkaido-tourist-spots').style.display = 'none';
  document.getElementById('tohoku-tourist-spots').style.display = 'none';
  document.getElementById('kanto-tourist-spots').style.display = 'none';
  document.getElementById('chubu-tourist-spots').style.display = 'none';
  document.getElementById('kansai-tourist-spots').style.display = 'none';
  document.getElementById('chugoku-tourist-spots').style.display = 'none';
  document.getElementById('shikoku-tourist-spots').style.display = 'none';
  document.getElementById('kyushu-tourist-spots').style.display = 'none';
})

hokkaidoButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block';
  document.getElementById('hokkaido-prefecture-list').style.display = 'block';
  document.getElementById('hokkaido-prefecture-list').style.display = 'flex';
  document.getElementById('hokkaido-prefecture-list').style.justifyContent = 'center';
  document.getElementById('hokkaido-prefecture-list').style.flexDirection = 'column';
  document.getElementById('hokkaido-tourist-spots').style.display = 'block';
  
  document.getElementById('sapporo-tourist-spot-list').style.display = 'flex';
  document.getElementById('sapporo-tourist-spot-list').style.flexDirection = "row";
  document.getElementById('sapporo-tourist-spot-list').style.justifyContent = "space-between";
  
  document.getElementById('hokkaido-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('hokkaido-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('hokkaido-picture-perfect-button').style.borderBottom = "2px solid pink";
})

tohokuButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block'
  document.getElementById('tohoku-prefecture-list').style.display = 'block';
  document.getElementById('tohoku-prefecture-list').style.display = 'flex';
  document.getElementById('tohoku-prefecture-list').style.justifyContent = 'center';
  document.getElementById('tohoku-prefecture-list').style.flexDirection = 'column';
  document.getElementById('tohoku-tourist-spots').style.display = 'block';
  
  document.getElementById('akita-tourist-spot-list').style.display = "flex";
  document.getElementById('akita-tourist-spot-list').style.flexDirection = "row";
  document.getElementById('akita-tourist-spot-list').style.justifyContent = "space-between";
  
  document.getElementById('tohoku-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('tohoku-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('tohoku-picture-perfect-button').style.borderBottom = "2px solid pink";
})

kantoButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block'
  document.getElementById('kanto-prefecture-list').style.display = 'block';
  document.getElementById('kanto-prefecture-list').style.display = 'flex';
  document.getElementById('kanto-prefecture-list').style.justifyContent = 'center';
  document.getElementById('kanto-prefecture-list').style.flexDirection = 'column';
  document.getElementById('kanto-tourist-spots').style.display = 'block';
  
  document.getElementById('tokyo-tourist-spot-list').style.display = "flex";
  document.getElementById('tokyo-tourist-spot-list').style.flexDirection = "row";
  document.getElementById('tokyo-tourist-spot-list').style.justifyContent = "space-between";
  
  document.getElementById('kanto-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('kanto-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('kanto-picture-perfect-button').style.borderBottom = "2px solid pink";
})

chubuButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block'
  document.getElementById('chubu-prefecture-list').style.display = 'block';
  document.getElementById('chubu-prefecture-list').style.display = 'flex';
  document.getElementById('chubu-prefecture-list').style.justifyContent = 'center';
  document.getElementById('chubu-prefecture-list').style.flexDirection = 'column';
  document.getElementById('chubu-tourist-spots').style.display = 'block';
  
  document.getElementById('kanazawa-tourist-spot-list').style.display = "flex";
  document.getElementById('kanazawa-tourist-spot-list').style.flexDirection = "row";
  document.getElementById('kanazawa-tourist-spot-list').style.justifyContent = "space-between";
  
  document.getElementById('chubu-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('chubu-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('chubu-picture-perfect-button').style.borderBottom = "2px solid pink";
})

kansaiButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block'
  document.getElementById('kansai-prefecture-list').style.display = 'block';
  document.getElementById('kansai-prefecture-list').style.display = 'flex';
  document.getElementById('kansai-prefecture-list').style.justifyContent = 'center';
  document.getElementById('kansai-prefecture-list').style.flexDirection = 'column';
  document.getElementById('kansai-tourist-spots').style.display = 'block';
  
  document.getElementById('kyoto-tourist-spot-list').style.display = "flex";
  document.getElementById('kyoto-tourist-spot-list').style.flexDirection = "row";
  document.getElementById('kyoto-tourist-spot-list').style.justifyContent = "space-between";
  
  document.getElementById('kansai-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('kansai-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('kansai-picture-perfect-button').style.borderBottom = "2px solid pink";
})

chugokuButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block'
  document.getElementById('chugoku-prefecture-list').style.display = 'block';
  document.getElementById('chugoku-prefecture-list').style.display = 'flex';
  document.getElementById('chugoku-prefecture-list').style.justifyContent = 'center';
  document.getElementById('chugoku-prefecture-list').style.flexDirection = 'column';
  document.getElementById('chugoku-tourist-spots').style.display = 'block';
  
  document.getElementById('hiroshima-tourist-spot-list').style.display = "flex";
  document.getElementById('hiroshima-tourist-spot-list').style.flexDirection = "row";
  document.getElementById('hiroshima-tourist-spot-list').style.justifyContent = "space-between";
  
  document.getElementById('chugoku-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('chugoku-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('chugoku-picture-perfect-button').style.borderBottom = "2px solid pink";
})

shikokuButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block'
  document.getElementById('shikoku-prefecture-list').style.display = 'block';
  document.getElementById('shikoku-prefecture-list').style.display = 'flex';
  document.getElementById('shikoku-prefecture-list').style.justifyContent = 'center';
  document.getElementById('shikoku-prefecture-list').style.flexDirection = 'column';
  document.getElementById('shikoku-tourist-spots').style.display = 'block';
  
  document.getElementById('ehime-tourist-spot-list').style.display = "flex";
  document.getElementById('ehime-tourist-spot-list').style.flexDirection = "row";
  document.getElementById('ehime-tourist-spot-list').style.justifyContent = "space-between";
  
  document.getElementById('shikoku-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('shikoku-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('shikoku-picture-perfect-button').style.borderBottom = "2px solid pink";
})

kyushuButton.addEventListener('click', (e) => {
  regionPage.style.display = 'none';
  itinerary.style.display = 'block'
  document.getElementById('kyushu-prefecture-list').style.display = 'block';
  document.getElementById('kyushu-prefecture-list').style.display = 'flex';
  document.getElementById('kyushu-prefecture-list').style.justifyContent = 'center';
  document.getElementById('kyushu-prefecture-list').style.flexDirection = 'column';
  document.getElementById('kyushu-tourist-spots').style.display = 'block';
  
  document.getElementById('nagasaki-tourist-spot-list').style.display = "flex";
  document.getElementById('nagasaki-tourist-spot-list').style.flexDirection = "row";
  document.getElementById('nagasaki-tourist-spot-list').style.justifyContent = "space-between";
  
  document.getElementById('kyushu-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('kyushu-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('kyushu-picture-perfect-button').style.borderBottom = "2px solid pink";
})
