const url = "https://daviles82.github.io/wdd230/project/menu.json";

function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

async function getFruitOrVegData() {
  let response = await fetch(url);
  let data = await response.json();
  console.table(data.fruitOrVegetable);
  displayFruitOrVeg(data.fruitOrVegetable);

  const fruitSelect1 = document.querySelector("#fruit1");
  const fruitSelect2 = document.querySelector("#fruit2");
  const fruitSelect3 = document.querySelector("#fruit3");

  for (const fruit of data.fruitOrVegetable) {
    const option1 = new Option(fruit.name, fruit.id);
    fruitSelect1.options.add(option1);

    const option2 = new Option(fruit.name, fruit.id);
    fruitSelect2.options.add(option2);

    const option3 = new Option(fruit.name, fruit.id);
    fruitSelect3.options.add(option3);
  }
}

getFruitOrVegData();

async function displayTotalNutritionalValue(fruitId1, fruitId2, fruitId3) {
  const url = "https://daviles82.github.io/wdd230/project/menu.json";
  const response = await fetch(url);
  const data = await response.json();

  const fruit1 = data.fruitOrVegetable.find((fruit) => fruit.id == fruitId1);
  const fruit2 = data.fruitOrVegetable.find((fruit) => fruit.id == fruitId2);
  const fruit3 = data.fruitOrVegetable.find((fruit) => fruit.id == fruitId3);

  const totalNutritions = {};

  if (!fruit1 || !fruit2 || !fruit3) {
    console.error("Invalid fruit ID(s). Please select valid fruits.");
    return;
  }

  for (const [key, value] of Object.entries(fruit2.nutritions)) {
    if (totalNutritions[key]) {
      totalNutritions[key] += value;
    } else {
      totalNutritions[key] = value;
    }
  }

  for (const [key, value] of Object.entries(fruit3.nutritions)) {
    if (totalNutritions[key]) {
      totalNutritions[key] += value;
    } else {
      totalNutritions[key] = value;
    }
  }

  const nutrientInfo = document.querySelector("#nutrientInfo");
  nutrientInfo.innerHTML = "";

  for (const [key, value] of Object.entries(totalNutritions)) {
    const li = document.createElement("li");
    li.textContent = `${key}: ${value.toFixed(2)}`;
    nutrientInfo.appendChild(li);
  }

  return totalNutritions;
}

document.querySelector("#fruit1").addEventListener("change", displayTotalNutritionalValue);
document.querySelector("#fruit2").addEventListener("change", displayTotalNutritionalValue);
document.querySelector("#fruit3").addEventListener("change", displayTotalNutritionalValue);

function displayFruitOrVeg(data) {
  console.table(data);
}

function formatNutrientInformation(nutritionData) {
  const formattedNutritions = {};
  for (const [key, value] of Object.entries(nutritionData)) {
    formattedNutritions[key] = value.toFixed(2);
  }
  return JSON.stringify(formattedNutritions);
}

function displaySavedOrders() {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  const basketList = document.querySelector("#orderList");
  basketList.innerHTML = ""; 

  orders.forEach((order) => {
    const listItem = document.createElement("li");
    listItem.textContent = `
      First Name: ${order.firstName}
      Email: ${order.email}
      Phone Number: ${order.phone}
      Fruit 1: ${order.fruit1}
      Fruit 2: ${order.fruit2}
      Fruit 3: ${order.fruit3}
      Special Instructions: ${order.instructions}
      Order Date: ${order.date}
      Nutrient Information: ${formatNutrientInformation(order.nutritions)}
    `;
    basketList.appendChild(listItem);
  });
}

window.addEventListener("load", () => {
  let totalOrders = localStorage.getItem("totalOrders");
  if (totalOrders === null) {
    totalOrders = 0;
  }

  const basket = document.querySelector("#basket");
  if (basket) {
  basket.textContent = `Total Orders: ${totalOrders}`;
  }

  displaySavedOrders();
});

document.querySelector("#submitBtn").addEventListener("click", async () => {
  const firstNameInput = document.querySelector("#firstName");
  const emailInput = document.querySelector("#email");
  const phoneInput = document.querySelector("#phone");
  const instructionsInput = document.querySelector("#instructions");
  const fruitSelect1 = document.querySelector("#fruit1");
  const fruitSelect2 = document.querySelector("#fruit2");
  const fruitSelect3 = document.querySelector("#fruit3");

  const orderDate = getCurrentDate();

  console.log(`Order Date: ${orderDate}`);
  console.log(`First Name: ${firstNameInput.value}`);
  console.log(`Email: ${emailInput.value}`);
  console.log(`Phone Number: ${phoneInput.value}`);
  console.log(`Fruit 1: ${fruitSelect1.value}`);
  console.log(`Fruit 2: ${fruitSelect2.value}`);
  console.log(`Fruit 3: ${fruitSelect3.value}`);

  const specialInstructions = instructionsInput.value;

  const totalNutritions = await displayTotalNutritionalValue(
    fruitSelect1.value,
    fruitSelect2.value,
    fruitSelect3.value
  );

  let totalOrders = localStorage.getItem("totalOrders");
  if (totalOrders === null) {
    totalOrders = 0;
  } else {
    totalOrders = parseInt(totalOrders);
  }

  const order = {
    date: orderDate,
    firstName: firstNameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    fruit1: fruitSelect1.value,
    fruit2: fruitSelect2.value,
    fruit3: fruitSelect3.value,
    instructions: specialInstructions,
    nutritions: totalNutritions,
  };

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  const basketList = document.querySelector("#orderList");
  const listItem = document.createElement("li");
  listItem.textContent = `
    First Name: ${order.firstName}
    Email: ${order.email}
    Phone Number: ${order.phone}
    Fruit 1: ${order.fruit1}
    Fruit 2: ${order.fruit2}
    Fruit 3: ${order.fruit3}
    Special Instructions: ${specialInstructions}
    Order Date: ${order.date}
    Nutrient Information: ${formatNutrientInformation(totalNutritions)}
  `;
  basketList.appendChild(listItem);

  const orderDateElement = document.createElement("span");
  orderDateElement.textContent = order.date;
  document.querySelector("#basket").appendChild(orderDateElement);

  totalOrders += 1;
  localStorage.setItem("totalOrders", totalOrders);

  const basket = document.querySelector("#basket");
  basket.textContent = `Total Orders: ${totalOrders}`;

  firstNameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  instructionsInput.value = "";
  fruitSelect1.selectedIndex = 0;
  fruitSelect2.selectedIndex = 0;
  fruitSelect3.selectedIndex = 0;

  // const form = document.querySelector("form");
  // form.reset();
});

 
