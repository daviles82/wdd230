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
    let picture = document.createElement('picture'); // create a picture element
    let source1 = document.createElement('source'); // create a source element for webp format
    let source2 = document.createElement('source'); // create a source element for jpeg format
    let portrait = document.createElement('img'); // create an img element as a fallback

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${business.name}`;
    h3.textContent = `${business.address}`;
    h4.textContent = `${business.phone}`;
    // a.textContent = `WebSite:${business.websiteURL}`;
    h6.textContent = `Membership Level:${business.membershipLevel}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute('src', business.imageurl); // set the src attribute to the original image url
    portrait.setAttribute('alt', `Portrait of ${business.name} ______________`);
    portrait.setAttribute('loading', 'lazy'); // set the loading attribute to lazy
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    portrait.style.objectFit = "cover";

    // Set the source elements attributes for different formats and sizes
    source1.setAttribute('type', 'image/webp'); // set the type attribute to webp
    source1.setAttribute('srcset', `${business.imageurl.replace('.jpg', '.webp')} 500w, ${business.imageurl.replace('.jpg', '-large.webp')} 1000w`); // set the srcset attribute to webp versions of the image with different widths
    source1.setAttribute('sizes', '(max-width: 600px) 500px, 1000px'); // set the sizes attribute to match the media query and the image width

    source2.setAttribute('type', 'image/jpeg'); // set the type attribute to jpeg
    source2.setAttribute('srcset', `${business.imageurl} 500w, ${business.imageurl.replace('.jpg', '-large.jpg')} 1000w`); // set the srcset attribute to jpeg versions of the image with different widths
    source2.setAttribute('sizes', '(max-width: 600px) 500px, 1000px'); // set the sizes attribute to match the media query and the image width

    // Append the picture element with the source and img elements
    picture.appendChild(source1);
    picture.appendChild(source2);
    picture.appendChild(portrait);

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(a);
    card.appendChild(h6);
    card.appendChild(picture);

    cards.appendChild(card);
  }); // end of forEach loop
} // end of function expression
