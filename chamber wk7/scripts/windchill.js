

let speed = 45;


let temp = 30;

function buildWc(speed, temp) {
  let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  wc = Math.floor(wc);
  wc = (wc > temp) ? temp : wc;

  let feelTemp = document.getElementById("feeltemp");
  feelTemp.innerHTML = "Feels like " + wc + "°F";

  let windSpeed = document.getElementById("speed");
  windSpeed.innerHTML = "Wind speed " + speed + " mph";

  let temperature = document.getElementById("temp");
  temperature.innerHTML = "Temp: " + temp + "°F";
}

buildWc(speed, temp)