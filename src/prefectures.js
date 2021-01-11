const sapporoButton = document.getElementById('sapporo-city-button')
const furanoButton = document.getElementById('furano-city-button')
const hakodateButton = document.getElementById('hakodate-city-button')

sapporoButton.addEventListener('click', (e) => {
  document.getElementById('sapporo-tourist-spot-list').style.display = "flex";
  document.getElementById('furano-tourist-spot-list').style.display = "none";
  document.getElementById('hakodate-tourist-spot-list').style.display = "none";

  document.getElementById('sapporo-tourist-spot-list').style.flexDirection = "row";
  document.getElementById('sapporo-tourist-spot-list').style.justifyContent = "space-between";
  
  document.getElementById('sapporo-city-button').style.borderBottom = "2px solid gold";
  document.getElementById('furano-city-button').style.borderBottom = "2px solid pink";
  document.getElementById('hakodate-city-button').style.borderBottom = "2px solid pink";
})

furanoButton.addEventListener('click', (e) => {
  document.getElementById('sapporo-tourist-spot-list').style.display = "none";
  document.getElementById('furano-tourist-spot-list').style.display = "flex";
  document.getElementById('hakodate-tourist-spot-list').style.display = "none";
  
  document.getElementById('furano-tourist-spot-list').style.flexDirection = "row";
  document.getElementById('furano-tourist-spot-list').style.justifyContent = "space-between";

  document.getElementById('sapporo-city-button').style.borderBottom = "2px solid pink";
  document.getElementById('furano-city-button').style.borderBottom = "2px solid gold";
  document.getElementById('hakodate-city-button').style.borderBottom = "2px solid pink";
})

hakodateButton.addEventListener('click', (e) => {
  document.getElementById('sapporo-tourist-spot-list').style.display = "none";
  document.getElementById('furano-tourist-spot-list').style.display = "none";
  document.getElementById('hakodate-tourist-spot-list').style.display = "flex";
  
  document.getElementById('hakodate-tourist-spot-list').style.flexDirection = "row";
  document.getElementById('hakodate-tourist-spot-list').style.justifyContent = "space-between";

  document.getElementById('sapporo-city-button').style.borderBottom = "2px solid pink";
  document.getElementById('furano-city-button').style.borderBottom = "2px solid pink";
  document.getElementById('hakodate-city-button').style.borderBottom = "2px solid gold";
})

const akitaButton = document.getElementById('akita-city-button')
const aomoriButton = document.getElementById('aomori-city-button')
const sendaiButton = document.getElementById('sendai-city-button')

akitaButton.addEventListener('click', (e) => {
  document.getElementById('akita-tourist-spot-list').style.display = "flex";
})

aomoriButton.addEventListener('click', (e) => {
  document.getElementById('aomori-tourist-spot-list').style.display = "flex";
  
})

sendaiButton.addEventListener('click', (e) => {
  document.getElementById('sendai-tourist-spot-list').style.display = "flex";
  
})

const tokyoButton = document.getElementById('tokyo-city-button')
const kanagawaButton = document.getElementById('kanagawa-city-button')
const yokohamaButton = document.getElementById('yokohama-city-button')

tokyoButton.addEventListener('click', (e) => {
  document.getElementById('tokyo-tourist-spot-list').style.display = "flex";
  
})

kanagawaButton.addEventListener('click', (e) => {
  document.getElementById('kanagawa-tourist-spot-list').style.display = "flex";
  
})

yokohamaButton.addEventListener('click', (e) => {
  document.getElementById('yokohama-tourist-spot-list').style.display = "flex";
  
})

const kanazawaButton = document.getElementById('kanazawa-city-button')
const naganoButton = document.getElementById('nagano-city-button')
const toyamaButton = document.getElementById('toyama-city-button')

kanazawaButton.addEventListener('click', (e) => {
  document.getElementById('kanazawa-tourist-spot-list').style.display = "flex";
  
})

naganoButton.addEventListener('click', (e) => {
  document.getElementById('nagano-tourist-spot-list').style.display = "flex";
  
})

toyamaButton.addEventListener('click', (e) => {
  document.getElementById('toyama-tourist-spot-list').style.display = "flex";
  
})

const kyotoButton = document.getElementById('kyoto-city-button')
const osakaButton = document.getElementById('osaka-city-button')
const naraButton = document.getElementById('nara-city-button')

kyotoButton.addEventListener('click', (e) => {
  document.getElementById('kyoto-tourist-spot-list').style.display = "flex";
  
})

osakaButton.addEventListener('click', (e) => {
  document.getElementById('osaka-tourist-spot-list').style.display = "flex";
  
})

naraButton.addEventListener('click', (e) => {
  document.getElementById('nara-tourist-spot-list').style.display = "flex";
  
})

const hiroshimaButton = document.getElementById('hiroshima-city-button')
const okayamaButton = document.getElementById('okayama-city-button')
const yonagoButton = document.getElementById('yonago-city-button')

hiroshimaButton.addEventListener('click', (e) => {
  document.getElementById('hiroshima-tourist-spot-list').style.display = "flex";
  
})

okayamaButton.addEventListener('click', (e) => {
  document.getElementById('okayama-tourist-spot-list').style.display = "flex";
  
})

yonagoButton.addEventListener('click', (e) => {
  document.getElementById('yonago-tourist-spot-list').style.display = "flex";
  
})

const ehimeButton = document.getElementById('ehime-city-button')
const kagawaButton = document.getElementById('kagawa-city-button')
const kochiButton = document.getElementById('kochi-city-button')

ehimeButton.addEventListener('click', (e) => {
  document.getElementById('ehime-tourist-spot-list').style.display = "flex";
  
})

kagawaButton.addEventListener('click', (e) => {
  document.getElementById('kagawa-tourist-spot-list').style.display = "flex";
  
})

kochiButton.addEventListener('click', (e) => {
  document.getElementById('kochi-tourist-spot-list').style.display = "flex";
  
})

const nagasakiButton = document.getElementById('nagasaki-city-button')
const kagoshimaButton = document.getElementById('kagoshima-city-button')
const okinawaButton = document.getElementById('okinawa-city-button')

nagasakiButton.addEventListener('click', (e) => {
  document.getElementById('nagasaki-tourist-spot-list').style.display = "flex";
  
})

kagoshimaButton.addEventListener('click', (e) => {
  document.getElementById('kagoshima-tourist-spot-list').style.display = "flex";
  
})

okinawaButton.addEventListener('click', (e) => {
  document.getElementById('okinawa-tourist-spot-list').style.display = "flex";

})
