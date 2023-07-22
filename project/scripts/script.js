const captionDesc = document.querySelector("#current-desc");
const weatherIcon = document.querySelector("#weather-icon");

const url2 = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad,CA,&units=imperial&appid=b5107679a673ae43d16f86f8c43b3eea";

async function apiFetch() {
  try {
    const response = await fetch(url2);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  const currentTemp = weatherData.list[0].main.temp.toFixed(0);
  const currentDesc = weatherData.list[0].weather[0].description;
  const currentHumidity = weatherData.list[0].main.humidity;
  document.querySelector("#current-temp").textContent = currentTemp + "°F";
  document.querySelector("#current-desc").textContent = currentDesc;
  document.querySelector("#current-humidity").textContent = currentHumidity + "%";
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", currentDesc);

  const forecastData = weatherData.list;
  for (let i = 1; i <= 3; i++) {
    const dayData = forecastData[i * 8 - 1];
    const temp = dayData.main.temp.toFixed(0);
    const desc = dayData.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/w/${dayData.weather[0].icon}.png`;

    document.querySelector(`#day${i}-temp`).textContent = temp + "°F";
    document.querySelector(`#day${i}-figcaption`).textContent = desc;
    document.querySelector(`#day${i}-icon`).setAttribute("src", iconsrc);
    document.querySelector(`#day${i}-icon`).setAttribute("alt", desc);
  }
}

apiFetch();

const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
document.getElementById("modifiedtime").innerHTML = lastModified.toLocaleString('en-US', options);




const modal = document.getElementById("contactUs");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("menuBtn").classList.toggle("open");
}

const x = document.getElementById("menuBtn");
x.onclick = toggleMenu;

document.addEventListener("DOMContentLoaded", () => {
  const x = document.getElementById("menuBtn");
  x.onclick = toggleMenu;
});