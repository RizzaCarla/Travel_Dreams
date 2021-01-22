const hokkaidoCultural = document.getElementById('hokkaido-cultural-button')
const hokkaidoHistorical = document.getElementById('hokkaido-historical-button')
const hokkaidoPicture = document.getElementById('hokkaido-picture-perfect-button')

hokkaidoCultural.addEventListener('click', (e) => {
  document.getElementById('hokkaido-cultural-list').style.display = "flex";
  document.getElementById('hokkaido-historical-list').style.display = "none";
  document.getElementById('hokkaido-picture-perfect-list').style.display = "none";

  document.getElementById('hokkaido-cultural-list').style.flexDirection = "row";
  document.getElementById('hokkaido-cultural-list').style.justifyContent = "space-between";
  
  document.getElementById('hokkaido-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('hokkaido-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('hokkaido-picture-perfect-button').style.borderBottom = "2px solid pink";
})

hokkaidoHistorical.addEventListener('click', (e) => {
  document.getElementById('hokkaido-cultural-list').style.display = "none";
  document.getElementById('hokkaido-historical-list').style.display = "flex";
  document.getElementById('hokkaido-picture-perfect-list').style.display = "none";
  
  document.getElementById('hokkaido-historical-list').style.flexDirection = "row";
  document.getElementById('hokkaido-historical-list').style.justifyContent = "space-between";
  
  document.getElementById('hokkaido-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('hokkaido-historical-button').style.borderBottom = "2px solid gold";
  document.getElementById('hokkaido-picture-perfect-button').style.borderBottom = "2px solid pink";
})

hokkaidoPicture.addEventListener('click', (e) => {
  document.getElementById('hokkaido-cultural-list').style.display = "none";
  document.getElementById('hokkaido-historical-list').style.display = "none";
  document.getElementById('hokkaido-picture-perfect-list').style.display = "flex";
  
  document.getElementById('hokkaido-picture-perfect-list').style.flexDirection = "row";
  document.getElementById('hokkaido-picture-perfect-list').style.justifyContent = "space-between";
  
  document.getElementById('hokkaido-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('hokkaido-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('hokkaido-picture-perfect-button').style.borderBottom = "2px solid gold";
})

const tohokuCultural = document.getElementById('tohoku-cultural-button')
const tohokuHistorical = document.getElementById('tohoku-historical-button')
const tohokuPicture = document.getElementById('tohoku-picture-perfect-button')

tohokuCultural.addEventListener('click', (e) => {
  document.getElementById('tohoku-cultural-list').style.display = "flex";
  document.getElementById('tohoku-historical-list').style.display = "none";
  document.getElementById('tohoku-picture-perfect-list').style.display = "none";
  
  document.getElementById('tohoku-cultural-list').style.flexDirection = "row";
  document.getElementById('tohoku-cultural-list').style.justifyContent = "space-between";

  document.getElementById('tohoku-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('tohoku-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('tohoku-picture-perfect-button').style.borderBottom = "2px solid pink";
})

tohokuHistorical.addEventListener('click', (e) => {
  document.getElementById('tohoku-cultural-list').style.display = "none";
  document.getElementById('tohoku-historical-list').style.display = "flex";
  document.getElementById('tohoku-picture-perfect-list').style.display = "none";
  
  document.getElementById('tohoku-historical-list').style.flexDirection = "row";
  document.getElementById('tohoku-historical-list').style.justifyContent = "space-between";
  
  document.getElementById('tohoku-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('tohoku-historical-button').style.borderBottom = "2px solid gold";
  document.getElementById('tohoku-picture-perfect-button').style.borderBottom = "2px solid pink";
})

tohokuPicture.addEventListener('click', (e) => {
  document.getElementById('tohoku-cultural-list').style.display = "none";
  document.getElementById('tohoku-historical-list').style.display = "none";
  document.getElementById('tohoku-picture-perfect-list').style.display = "flex";
  
  document.getElementById('tohoku-picture-perfect-list').style.flexDirection = "row";
  document.getElementById('tohoku-picture-perfect-list').style.justifyContent = "space-between";
  
  document.getElementById('tohoku-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('tohoku-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('tohoku-picture-perfect-button').style.borderBottom = "2px solid gold";
})

const kantoCultural = document.getElementById('kanto-cultural-button')
const kantoHistorical = document.getElementById('kanto-historical-button')
const kantoPicture = document.getElementById('kanto-picture-perfect-button')

kantoCultural.addEventListener('click', (e) => {
  document.getElementById('kanto-cultural-list').style.display = "flex";
  document.getElementById('kanto-historical-list').style.display = "none";
  document.getElementById('kanto-picture-perfect-list').style.display = "none";
  
  document.getElementById('kanto-cultural-list').style.flexDirection = "row";
  document.getElementById('kanto-cultural-list').style.justifyContent = "space-between";
  
  document.getElementById('kanto-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('kanto-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('kanto-picture-perfect-button').style.borderBottom = "2px solid pink";
})

kantoHistorical.addEventListener('click', (e) => {
  document.getElementById('kanto-cultural-list').style.display = "none";
  document.getElementById('kanto-historical-list').style.display = "flex";
  document.getElementById('kanto-picture-perfect-list').style.display = "none";
  
  document.getElementById('kanto-historical-list').style.flexDirection = "row";
  document.getElementById('kanto-historical-list').style.justifyContent = "space-between";
  
  document.getElementById('kanto-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('kanto-historical-button').style.borderBottom = "2px solid gold";
  document.getElementById('kanto-picture-perfect-button').style.borderBottom = "2px solid pink";
  
})

kantoPicture.addEventListener('click', (e) => {
  document.getElementById('kanto-cultural-list').style.display = "none";
  document.getElementById('kanto-historical-list').style.display = "none";
  document.getElementById('kanto-picture-perfect-list').style.display = "flex";
  
  document.getElementById('kanto-picture-perfect-list').style.flexDirection = "row";
  document.getElementById('kanto-picture-perfect-list').style.justifyContent = "space-between";
  
  document.getElementById('kanto-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('kanto-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('kanto-picture-perfect-button').style.borderBottom = "2px solid gold";
  
})


const chubuCultural = document.getElementById('chubu-cultural-button')
const chubuHistorical = document.getElementById('chubu-historical-button')
const chubuPicture = document.getElementById('chubu-picture-perfect-button')

chubuCultural.addEventListener('click', (e) => {
  document.getElementById('chubu-cultural-list').style.display = "flex";
  document.getElementById('chubu-historical-list').style.display = "none";
  document.getElementById('chubu-picture-perfect-list').style.display = "none";
  
  document.getElementById('chubu-cultural-list').style.flexDirection = "row";
  document.getElementById('chubu-cultural-list').style.justifyContent = "space-between";
  
  document.getElementById('chubu-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('chubu-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('chubu-picture-perfect-button').style.borderBottom = "2px solid pink";
  
})

chubuHistorical.addEventListener('click', (e) => {
  document.getElementById('chubu-cultural-list').style.display = "none";
  document.getElementById('chubu-historical-list').style.display = "flex";
  document.getElementById('chubu-picture-perfect-list').style.display = "none";
  
  document.getElementById('chubu-historical-list').style.flexDirection = "row";
  document.getElementById('chubu-historical-list').style.justifyContent = "space-between";
  
  document.getElementById('chubu-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('chubu-historical-button').style.borderBottom = "2px solid gold";
  document.getElementById('chubu-picture-perfect-button').style.borderBottom = "2px solid pink";
  
})

chubuPicture.addEventListener('click', (e) => {
  document.getElementById('chubu-cultural-list').style.display = "none";
  document.getElementById('chubu-historical-list').style.display = "none";
  document.getElementById('chubu-picture-perfect-list').style.display = "flex";
  
  document.getElementById('chubu-picture-perfect-list').style.flexDirection = "row";
  document.getElementById('chubu-picture-perfect-list').style.justifyContent = "space-between";
  
  document.getElementById('chubu-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('chubu-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('chubu-picture-perfect-button').style.borderBottom = "2px solid gold";
  
})

const kansaiCultural = document.getElementById('kansai-cultural-button')
const kansaiHistorical = document.getElementById('kansai-historical-button')
const kansaiPicture = document.getElementById('kansai-picture-perfect-button')

kansaiCultural.addEventListener('click', (e) => {
  document.getElementById('kansai-cultural-list').style.display = "flex";
  document.getElementById('kansai-historical-list').style.display = "none";
  document.getElementById('kansai-picture-perfect-list').style.display = "none";
  
  document.getElementById('kansai-cultural-list').style.flexDirection = "row";
  document.getElementById('kansai-cultural-list').style.justifyContent = "space-between";
  
  document.getElementById('kansai-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('kansai-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('kansai-picture-perfect-button').style.borderBottom = "2px solid pink";
  
})

kansaiHistorical.addEventListener('click', (e) => {
  document.getElementById('kansai-cultural-list').style.display = "none";
  document.getElementById('kansai-historical-list').style.display = "flex";
  document.getElementById('kansai-picture-perfect-list').style.display = "none";
  
  document.getElementById('kansai-historical-list').style.flexDirection = "row";
  document.getElementById('kansai-historical-list').style.justifyContent = "space-between";
  
  document.getElementById('kansai-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('kansai-historical-button').style.borderBottom = "2px solid gold";
  document.getElementById('kansai-picture-perfect-button').style.borderBottom = "2px solid pink";
  
})

kansaiPicture.addEventListener('click', (e) => {
  document.getElementById('kansai-cultural-list').style.display = "none";
  document.getElementById('kansai-historical-list').style.display = "none";
  document.getElementById('kansai-picture-perfect-list').style.display = "flex";
  
  document.getElementById('kansai-picture-perfect-list').style.flexDirection = "row";
  document.getElementById('kansai-picture-perfect-list').style.justifyContent = "space-between";
  
  document.getElementById('kansai-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('kansai-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('kansai-picture-perfect-button').style.borderBottom = "2px solid gold";
  
})

const chugokuCultural = document.getElementById('chugoku-cultural-button')
const chugokuHistorical = document.getElementById('chugoku-historical-button')
const chugokuPicture = document.getElementById('chugoku-picture-perfect-button')

chugokuCultural.addEventListener('click', (e) => {
  document.getElementById('chugoku-cultural-list').style.display = "flex";
  document.getElementById('chugoku-historical-list').style.display = "none";
  document.getElementById('chugoku-picture-perfect-list').style.display = "none";
  
  document.getElementById('chugoku-cultural-list').style.flexDirection = "row";
  document.getElementById('chugoku-cultural-list').style.justifyContent = "space-between";
  
  document.getElementById('chugoku-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('chugoku-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('chugoku-picture-perfect-button').style.borderBottom = "2px solid pink";
  
})

chugokuHistorical.addEventListener('click', (e) => {
  document.getElementById('chugoku-cultural-list').style.display = "none";
  document.getElementById('chugoku-historical-list').style.display = "flex";
  document.getElementById('chugoku-picture-perfect-list').style.display = "none";
  
  document.getElementById('chugoku-historical-list').style.flexDirection = "row";
  document.getElementById('chugoku-historical-list').style.justifyContent = "space-between";
  
  document.getElementById('chugoku-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('chugoku-historical-button').style.borderBottom = "2px solid gold";
  document.getElementById('chugoku-picture-perfect-button').style.borderBottom = "2px solid pink";
  
})

chugokuPicture.addEventListener('click', (e) => {
  document.getElementById('chugoku-cultural-list').style.display = "none";
  document.getElementById('chugoku-historical-list').style.display = "none";
  document.getElementById('chugoku-picture-perfect-list').style.display = "flex";
  
  document.getElementById('chugoku-picture-perfect-list').style.flexDirection = "row";
  document.getElementById('chugoku-picture-perfect-list').style.justifyContent = "space-between";
  
  document.getElementById('chugoku-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('chugoku-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('chugoku-picture-perfect-button').style.borderBottom = "2px solid gold";
  
})

const shikokuCultural = document.getElementById('shikoku-cultural-button')
const shikokuHistorical = document.getElementById('shikoku-historical-button')
const shikokuPicture = document.getElementById('shikoku-picture-perfect-button')

shikokuCultural.addEventListener('click', (e) => {
  document.getElementById('shikoku-cultural-list').style.display = "flex";
  document.getElementById('shikoku-historical-list').style.display = "none";
  document.getElementById('shikoku-picture-perfect-list').style.display = "none";
  
  document.getElementById('shikoku-cultural-list').style.flexDirection = "row";
  document.getElementById('shikoku-cultural-list').style.justifyContent = "space-between";
  
  document.getElementById('shikoku-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('shikoku-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('shikoku-picture-perfect-button').style.borderBottom = "2px solid pink";
  
})

shikokuHistorical.addEventListener('click', (e) => {
  document.getElementById('shikoku-cultural-list').style.display = "none";
  document.getElementById('shikoku-historical-list').style.display = "flex";
  document.getElementById('shikoku-picture-perfect-list').style.display = "none";
  
  document.getElementById('shikoku-historical-list').style.flexDirection = "row";
  document.getElementById('shikoku-historical-list').style.justifyContent = "space-between";
  
  document.getElementById('shikoku-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('shikoku-historical-button').style.borderBottom = "2px solid gold";
  document.getElementById('shikoku-picture-perfect-button').style.borderBottom = "2px solid pink";
  
})

shikokuPicture.addEventListener('click', (e) => {
  document.getElementById('shikoku-cultural-list').style.display = "none";
  document.getElementById('shikoku-historical-list').style.display = "none";
  document.getElementById('shikoku-picture-perfect-list').style.display = "flex";
  
  document.getElementById('shikoku-picture-perfect-list').style.flexDirection = "row";
  document.getElementById('shikoku-picture-perfect-list').style.justifyContent = "space-between";
  
  document.getElementById('shikoku-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('shikoku-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('shikoku-picture-perfect-button').style.borderBottom = "2px solid gold";
  
})

const kyushuCultural = document.getElementById('kyushu-cultural-button')
const kyushuHistorical = document.getElementById('kyushu-historical-button')
const kyushuPicture = document.getElementById('kyushu-picture-perfect-button')

kyushuCultural.addEventListener('click', (e) => {
  document.getElementById('kyushu-cultural-list').style.display = "flex";
  document.getElementById('kyushu-historical-list').style.display = "none";
  document.getElementById('kyushu-picture-perfect-list').style.display = "none";
  
  document.getElementById('kyushu-cultural-list').style.flexDirection = "row";
  document.getElementById('kyushu-cultural-list').style.justifyContent = "space-between";
  
  document.getElementById('kyushu-cultural-button').style.borderBottom = "2px solid gold";
  document.getElementById('kyushu-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('kyushu-picture-perfect-button').style.borderBottom = "2px solid pink";
  
})

kyushuHistorical.addEventListener('click', (e) => {
  document.getElementById('kyushu-cultural-list').style.display = "none";
  document.getElementById('kyushu-historical-list').style.display = "flex";
  document.getElementById('kyushu-picture-perfect-list').style.display = "none";
  
  document.getElementById('kyushu-historical-list').style.flexDirection = "row";
  document.getElementById('kyushu-historical-list').style.justifyContent = "space-between";
  
  document.getElementById('kyushu-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('kyushu-historical-button').style.borderBottom = "2px solid gold";
  document.getElementById('kyushu-picture-perfect-button').style.borderBottom = "2px solid pink";
  
})

kyushuPicture.addEventListener('click', (e) => {
  document.getElementById('kyushu-cultural-list').style.display = "none";
  document.getElementById('kyushu-historical-list').style.display = "none";
  document.getElementById('kyushu-picture-perfect-list').style.display = "flex";
  
  document.getElementById('kyushu-picture-perfect-list').style.flexDirection = "row";
  document.getElementById('kyushu-picture-perfect-list').style.justifyContent = "space-between";
  
  document.getElementById('kyushu-cultural-button').style.borderBottom = "2px solid pink";
  document.getElementById('kyushu-historical-button').style.borderBottom = "2px solid pink";
  document.getElementById('kyushu-picture-perfect-button').style.borderBottom = "2px solid gold";

})
