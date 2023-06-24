const captionDesc = document.querySelector("#figcaption");
const weatherIcon = document.querySelector("#weather-icon");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Brookshire,TX,&units=imperial&wind=speed&appid=b5107679a673ae43d16f86f8c43b3eea";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
      // console.log(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


function windchill(temp, speed) {

  if (speed == 0 || temp > 50) {
    document.getElementById("feeltemp").innerHTML = "N/A";
  } else {
    let wc =
      35.74 +
      0.6215 * temp +
      (0.4275 * temp - 35.75) * Math.pow(speed, 0.16);
    wc = Math.floor(wc);
    wc = wc > temp ? temp : wc;
    document.getElementById("feeltemp").innerHTML = "Feels like " + wc + "°F";
  }
}

function displayResults(weatherData) {
  let temp = weatherData.main.temp.toFixed(0);
  let speed = weatherData.wind.speed.toFixed(0);

  const desc = weatherData.weather[0].description;
  captionDesc.textContent = desc;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "desc");

  document.getElementById("temp").innerHTML = temp + "°F";
  document.getElementById("speed").innerHTML = "Wind Speed: " + speed + " mph";

  windchill(temp, speed);
}

apiFetch();


