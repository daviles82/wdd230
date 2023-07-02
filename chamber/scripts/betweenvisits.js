// TIME BETWEEN VISITS

function updateTimeBetweenVisits() {
  const dayLastVisited = window.localStorage.getItem("dayLastVisited");
  const now = new Date();
  const daysSinceLastVisit = (now - new Date(dayLastVisited)) / (1000 * 60 * 60 * 24);
  document.getElementById("time-between-visits").innerHTML = daysSinceLastVisit;
}

window.addEventListener("load", () => {
  window.localStorage.setItem("dayLastVisited", new Date().toISOString());
  updateTimeBetweenVisits();
});

// TIME BETWEEN VISITS