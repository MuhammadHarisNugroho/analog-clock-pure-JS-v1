let $ = document

const deg = 6
const hr = $.querySelector("#hr")
const mn = $.querySelector("#mn")
const sc = $.querySelector("#sc")
const toggleMode = $.querySelector(".toggle")

function toggleClass(){
	const body = $.querySelector("body")
	body.classList.toggle("light")
}

setInterval(function(){
	let day = new Date()
	let hh = day.getHours() * 30
	let mm = day.getMinutes() * deg
	let ss = day.getSeconds() * deg

	hr.style.transform = "rotateZ(" + (hh+(mm/12)) + "deg)"
	mn.style.transform = "rotateZ(" + mm + "deg)"
	sc.style.transform = "rotateZ(" + ss + "deg)"
})

toggleMode.addEventListener("click", toggleClass)

const heartIcon = document.getElementById("heart");
let isRed = false;

heartIcon.addEventListener("click", () => {
  isRed = !isRed;
  if (isRed) {
    heartIcon.style.color = "red"; // Ubah menjadi merah saat diklik
  } else {
    heartIcon.style.color = "gray"; // Ubah menjadi abu-abu saat diklik lagi
  }
});
