document.getElementById("modifiedtime").innerHTML = new Date(
  document.lastModified
);
const currentyear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentyear;

const options = { weekday: 'long', day: 'numeric' , month: 'long', year: 'numeric' };
const today = new Date();
const current = today.toLocaleDateString("en-UK", options);

console.log(document.querySelector("#time"))
document.querySelector("#time").textContent = current


function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


// banner
const today2 = new Date();
const dayOfWeek = today.getDay();

if (dayOfWeek === 1 || dayOfWeek === 2) {
  document.getElementById("montuebanner").innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}