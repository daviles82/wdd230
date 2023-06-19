document.getElementById("modifiedtime").innerHTML = new Date(
  document.lastModified
);
const currentyear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentyear;

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
const today = new Date();
const current = today.toLocaleDateString("en-UK", options);

console.log(document.querySelector("#time"));
document.querySelector("#time").textContent = current;

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
  document.getElementById("montuebanner").innerHTML =
    "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}

const image = {
  threshold: 0,
  rootMargin: "0px 0px 10px 0px",
};

const imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, image);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}



// ------------------------------------------------------------------------------------------------------------
// DAY SINCE LAST VISIT


function getDaysSinceLastVisit() {
  const now = new Date();

  const dayLastVisited = window.localStorage.getItem("dayLastVisited");

  if (!dayLastVisited) {
    return 0;
  }

  const daysSinceLastVisit = Math.round((now - new Date(dayLastVisited)) / (1000 * 60 * 60 * 24));

  return daysSinceLastVisit;
}

// DAY SINCE LAST VISIT
// ------------------------------------------------------------------------------------------------------------
// TIME BETWEEN VISITS

function updateTimeBetweenVisits() {
  const daysSinceLastVisit = getDaysSinceLastVisit();
  document.getElementById("time-between-visits").innerHTML = daysSinceLastVisit;
}

window.addEventListener("load", () => {
  window.localStorage.setItem("dayLastVisited", new Date().toISOString());
  updateTimeBetweenVisits();
});


console.log(document.getElementById("form_loaded_date").value);

// TIME BETWEEN VISITS
// ------------------------------------------------------------------------------------------------------------


