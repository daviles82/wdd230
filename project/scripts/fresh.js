const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
document.getElementById("modifiedtime").innerHTML = lastModified.toLocaleString('en-US', options);



function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("menuBtn").classList.toggle("open");
}

const x = document.getElementById("menuBtn");
x.onclick = toggleMenu;