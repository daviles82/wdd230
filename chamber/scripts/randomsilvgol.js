(() => {
  const url = 'https://daviles82.github.io/wdd230/chamber/data.json';

  async function getBusinessData() {
    let response = await fetch(url);
    let data = await response.json();
    console.table(data.businesses);
    return data.businesses;
  }

  (async () => {
    let businesses = await getBusinessData();

    const spotlight1 = document.getElementById('spotlight1');
    const spotlight2 = document.getElementById('spotlight2');
    const spotlight3 = document.getElementById('spotlight3');

    const getSpotlightBusinesses = () => {
      const goldSilverBusinesses = businesses.filter((business) => business.membershipLevel === 'Gold' || business.membershipLevel === 'Silver');
      const threeRandomBusinesses = goldSilverBusinesses.slice(0, 3);

      return threeRandomBusinesses;
    };

    const renderSpotlightBusinesses = (businesses) => {
      const spotlightElements = [spotlight1, spotlight2, spotlight3];
      businesses.forEach((business, index) => {
        const div = document.createElement('div');
        div.className = 'spotlight-business';
        div.style.fontSize = '14px';
        div.innerHTML = `
          <img src="${business.imageurl}" alt="${business.name}" style="width: 100px; height: 100px;" >
          <h2>${business.name}</h2>
          <p>${business.address}</p>
        `;

        if (business.websiteURL) {
          div.innerHTML += `<a href="${business.websiteURL}" style="color: black;">Visit Website</a>`;
        }

        if (business.phone) {
          div.innerHTML += `<p>Phone: ${business.phone}</p>`;
        }

        spotlightElements[index].appendChild(div);
      });
    };

    renderSpotlightBusinesses(getSpotlightBusinesses());
  })();
})();
