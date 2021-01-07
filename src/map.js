// //licking on regionn
// document.addEventListener("click", () => {
//   const hokkaidoInfo = document.getElementById('hokkaido-info');
//   const tohokuInfo = document.getElementById('tohoku-info');
//   const kantoInfo = document.getElementById('kanto-info');
//   const chubuInfo = document.getElementById('chubu-info');
//   const kansaiInfo = document.getElementById('kansai-info');
//   const chugokuInfo = document.getElementById('chugoku-info');
//   const shikokuInfo = document.getElementById('shikoku-info');
//   const kyushuInfo = document.getElementById('kyushu-info');
  
//   hokkaidoInfo.onclick = () => {
//     hokkaidoInfo.style.visibility = 'visible';
//   }
// })

//Scrolling will highlight regions
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const mapSelectPixels = document.getElementById('map-select').offsetTop;
  const hokkaidoPixels = document.getElementById('hokkaido-info').offsetTop;
  const tohokuPixels = document.getElementById('tohoku-info').offsetTop;
  const kantoPixels = document.getElementById('kanto-info').offsetTop;
  const chubuPixels = document.getElementById('chubu-info').offsetTop;
  const kansaiPixels = document.getElementById('kansai-info').offsetTop;
  const chugokuPixels = document.getElementById('chugoku-info').offsetTop;
  const shikokuPixels = document.getElementById('shikoku-info').offsetTop;
  const kyushuPixels = document.getElementById('kyushu-info').offsetTop;

  // On Hokaido
  if ((scroll > mapSelectPixels) && (scroll < hokkaidoPixels + 250)) {
    document.getElementById('tohoku-region').style.filter = "opacity(55%)"
    document.getElementById('hokkaido-region').style.filter = "none"
  }
  // On Tohoku
  if ((scroll > hokkaidoPixels + 250) && (scroll < tohokuPixels + 250)) {
    document.getElementById('hokkaido-region').style.filter = "opacity(55%)"
    document.getElementById('tohoku-region').style.filter = "none"
    document.getElementById('kanto-region').style.filter = "opacity(55%)"
  }
  // On Kanto
  if ((scroll > tohokuPixels + 250) && (scroll < kantoPixels + 250)) {
    document.getElementById('tohoku-region').style.filter = "opacity(55%)"
    document.getElementById('kanto-region').style.filter = "none"
    document.getElementById('chubu-region').style.filter = "opacity(55%)"
  }
  // On Chubu
  if ((scroll > kantoPixels + 250) && (scroll < chubuPixels + 250)) {
    document.getElementById('kanto-region').style.filter = "opacity(55%)"
    document.getElementById('chubu-region').style.filter = "none"
    document.getElementById('kansai-region').style.filter = "opacity(55%)"
  }
  // On Kansai
  if ((scroll > chubuPixels + 250) && (scroll < kansaiPixels + 250)) {
    document.getElementById('chubu-region').style.filter = "opacity(55%)"
    document.getElementById('kansai-region').style.filter = "none"
    document.getElementById('chugoku-region').style.filter = "opacity(55%)"
  }
  // On Chugoku
  if ((scroll > kansaiPixels + 250) && (scroll < chugokuPixels + 250)) {
    document.getElementById('kansai-region').style.filter = "opacity(55%)"
    document.getElementById('chugoku-region').style.filter = "none"
    document.getElementById('shikoku-region').style.filter = "opacity(55%)"
  }
  // On Shikoku
  if ((scroll > chugokuPixels + 250) && (scroll < shikokuPixels + 250)) {
    document.getElementById('chugoku-region').style.filter = "opacity(55%)"
    document.getElementById('shikoku-region').style.filter = "none"
    document.getElementById('kyushu-region').style.filter = "opacity(55%)"
  }
  // On Kyushu
  if ((scroll > shikokuPixels + 250) && (scroll < kyushuPixels + 250)) {
    document.getElementById('shikoku-region').style.filter = "opacity(55%)"
    document.getElementById('kyushu-region').style.filter = "none"
  }
})
