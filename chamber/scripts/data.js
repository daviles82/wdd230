const url = 'https://daviles82.github.io/wdd230/chamber/data.json';

async function getBusinessData() {
  let response = await fetch(url);
  let data = await response.json();
  console.table(data.businesses); 
  displayBusinesses(data.businesses);
}

getBusinessData();

let displayBusinesses = (businesses) => {
  let cards = document.querySelector('article.grid'); // select the output container element

  businesses.forEach((business) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    h2.className = 'directclass';
    let h3 = document.createElement('h3');
    h3.classList.add ('directclass');
    let h4 = document.createElement('h4');
    h4.classList.add ('directclass');
    let a = document.createElement('a');
    a.innerHTML = "Website";
    a.href = `${business.websiteURL}`;
    a.classList.add ('directclass');
    a.id = 'linksettings';
    let h6 = document.createElement('h6');
    h6.classList.add ('directclass');
    let portrait = document.createElement('img');

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${business.name}`;
    h3.textContent = `${business.address}`;
    h4.textContent = `${business.phone}`;
    // a.textContent = `WebSite:${business.websiteURL}`;
    h6.textContent = `Membership Level:${business.membershipLevel}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute('src', business.imageurl);
    portrait.setAttribute('alt', `Portrait of ${business.name} ______________`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    portrait.style.objectFit = "cover";

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(a);
    card.appendChild(h6);
    card.appendChild(portrait);

    cards.appendChild(card);
  }); // end of forEach loop
} // end of function expression