//licking on regionn
document.getElementById('hokkaido-region').addEventListener("click", function () {
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = document.getElementById('hokkaido-info').getBoundingClientRect()
  window.scroll({
    top: elemRect.top - bodyRect.top,
    behavior: 'smooth'
  })
  document.getElementById('hokkaido-info').style.visibility = "visible"
})

document.getElementById('tohoku-region').addEventListener("click", function () {
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = document.getElementById('tohoku-info').getBoundingClientRect()
  window.scroll({
    top: elemRect.top - bodyRect.top,
    behavior: 'smooth'
  })
  document.getElementById('tohoku-info').style.visibility = "visible"
})

document.getElementById('kanto-region').addEventListener("click", function() {
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = document.getElementById('kanto-info').getBoundingClientRect()
  window.scroll({
    top: elemRect.top - bodyRect.top,
    behavior: 'smooth'
  })
  document.getElementById('kanto-info').style.visibility = "visible"
})

document.getElementById('chubu-region').addEventListener("click", function() {
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = document.getElementById('chubu-info').getBoundingClientRect()
  window.scroll({
    top: elemRect.top - bodyRect.top,
    behavior: 'smooth'
  })
  document.getElementById('chubu-info').style.visibility = "visible"
})

document.getElementById('kansai-region').addEventListener("click", function() {
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = document.getElementById('kansai-info').getBoundingClientRect()
  window.scroll({
    top: elemRect.top - bodyRect.top,
    behavior: 'smooth'
  })
  document.getElementById('kansai-info').style.visibility = "visible"
})

document.getElementById('chugoku-region').addEventListener("click", function() {
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = document.getElementById('chugoku-info').getBoundingClientRect()
  window.scroll({
    top: elemRect.top - bodyRect.top,
    behavior: 'smooth'
  })
  document.getElementById('chugoku-info').style.visibility = "visible"
})

document.getElementById('shikoku-region').addEventListener("click", function() {
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = document.getElementById('shikoku-info').getBoundingClientRect()
  window.scroll({
    top: elemRect.top - bodyRect.top,
    behavior: 'smooth'
  })
  document.getElementById('shikoku-info').style.visibility = "visible"
})

document.getElementById('kyushu-region').addEventListener("click", function() {
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = document.getElementById('kyushu-info').getBoundingClientRect()
  window.scroll({
    top: elemRect.top - bodyRect.top,
    behavior: 'smooth'
  })
  document.getElementById('kyushu-info').style.visibility = "visible"
})
  


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

    document.getElementById('hokkaido-info').style.visibility = "visible";
    document.getElementById('tohoku-info').style.visibility = "hidden";

    document.getElementById('hokkaido-info-image').style.visibility = "visible";
    document.getElementById('tohoku-info-image').style.visibility = "hidden";
  }
  // On Tohoku
  if ((scroll > hokkaidoPixels + 250) && (scroll < tohokuPixels + 250)) {
    document.getElementById('hokkaido-region').style.filter = "opacity(55%)"
    document.getElementById('tohoku-region').style.filter = "none"
    document.getElementById('kanto-region').style.filter = "opacity(55%)"

    document.getElementById('hokkaido-info').style.visibility = "hidden";
    document.getElementById('tohoku-info').style.visibility = "visible";
    document.getElementById('kanto-info').style.visibility = "hidden";

    document.getElementById('hokkaido-info-image').style.visibility = "hidden";
    document.getElementById('tohoku-info-image').style.visibility = "visible";
    document.getElementById('kanto-info-image').style.visibility = "hidden";
  }
  // On Kanto
  if ((scroll > tohokuPixels + 250) && (scroll < kantoPixels + 250)) {
    document.getElementById('tohoku-region').style.filter = "opacity(55%)"
    document.getElementById('kanto-region').style.filter = "none"
    document.getElementById('chubu-region').style.filter = "opacity(55%)"
    
    document.getElementById('tohoku-info').style.visibility = "hidden";
    document.getElementById('kanto-info').style.visibility = "visible";
    document.getElementById('chubu-info').style.visibility = "hidden";
    
    document.getElementById('tohoku-info-image').style.visibility = "hidden";
    document.getElementById('kanto-info-image').style.visibility = "visible";
    document.getElementById('chubu-info-image').style.visibility = "hidden";
  }
  // On Chubu
  if ((scroll > kantoPixels + 250) && (scroll < chubuPixels + 250)) {
    document.getElementById('kanto-region').style.filter = "opacity(55%)"
    document.getElementById('chubu-region').style.filter = "none"
    document.getElementById('kansai-region').style.filter = "opacity(55%)"

    document.getElementById('kanto-info').style.visibility = "hidden";
    document.getElementById('chubu-info').style.visibility = "visible";
    document.getElementById('kansai-info').style.visibility = "hidden";
    
    document.getElementById('kanto-info-image').style.visibility = "hidden";
    document.getElementById('chubu-info-image').style.visibility = "visible";
    document.getElementById('kansai-info-image').style.visibility = "hidden";
  }
  // On Kansai
  if ((scroll > chubuPixels + 250) && (scroll < kansaiPixels + 250)) {
    document.getElementById('chubu-region').style.filter = "opacity(55%)"
    document.getElementById('kansai-region').style.filter = "none"
    document.getElementById('chugoku-region').style.filter = "opacity(55%)"

    document.getElementById('chubu-info').style.visibility = "hidden";
    document.getElementById('kansai-info').style.visibility = "visible";
    document.getElementById('chugoku-info').style.visibility = "hidden";
    
    document.getElementById('chubu-info-image').style.visibility = "hidden";
    document.getElementById('kansai-info-image').style.visibility = "visible";
    document.getElementById('chugoku-info-image').style.visibility = "hidden";
  }
  // On Chugoku
  if ((scroll > kansaiPixels + 250) && (scroll < chugokuPixels + 250)) {
    document.getElementById('kansai-region').style.filter = "opacity(55%)"
    document.getElementById('chugoku-region').style.filter = "none"
    document.getElementById('shikoku-region').style.filter = "opacity(55%)"

    document.getElementById('kansai-info').style.visibility = "hidden";
    document.getElementById('chugoku-info').style.visibility = "visible";
    document.getElementById('shikoku-info').style.visibility = "hidden";
    
    document.getElementById('kansai-info-image').style.visibility = "hidden";
    document.getElementById('chugoku-info-image').style.visibility = "visible";
    document.getElementById('shikoku-info-image').style.visibility = "hidden";
  }
  // On Shikoku
  if ((scroll > chugokuPixels + 250) && (scroll < shikokuPixels + 250)) {
    document.getElementById('chugoku-region').style.filter = "opacity(55%)"
    document.getElementById('shikoku-region').style.filter = "none"
    document.getElementById('kyushu-region').style.filter = "opacity(55%)"

    document.getElementById('chugoku-info').style.visibility = "hidden";
    document.getElementById('shikoku-info').style.visibility = "visible";
    document.getElementById('kyushu-info').style.visibility = "hidden";
    
    document.getElementById('chugoku-info-image').style.visibility = "hidden";
    document.getElementById('shikoku-info-image').style.visibility = "visible";
    document.getElementById('kyushu-info-image').style.visibility = "hidden";
  }
  // On Kyushu
  if ((scroll > shikokuPixels + 250) && (scroll < kyushuPixels + 250)) {
    document.getElementById('shikoku-region').style.filter = "opacity(55%)"
    document.getElementById('kyushu-region').style.filter = "none"

    document.getElementById('shikoku-info').style.visibility = "hidden";
    document.getElementById('kyushu-info').style.visibility = "visible";

    document.getElementById('shikoku-info-image').style.visibility = "hidden";
    document.getElementById('kyushu-info-image').style.visibility = "visible";
  }
})
