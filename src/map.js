// window.addEventListener("scroll", () => {
//   const userScrolled = window.scrollY;
//   console.log(userScrolled)
// })

window.onscroll = function () { myFunction() };
const mapOfJapan = document.getElementById("map-of-japan");
const sticky = mapOfJapan.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}