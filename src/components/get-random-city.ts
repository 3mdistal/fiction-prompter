export default async function getRandomCity() {
  const offset = Math.floor(Math.random() * 5543);
  const response = await fetch(
    `http://geodb-free-service.wirefreethought.com/v1/geo/places?limit=1&offset=${offset}&types=CITY&sort=name`
  );

  if (!response.ok) {
    throw new Error("Error fetching cities");
  }

  const data = await response.json();
  const cities = data.data;

  if (cities.length > 0) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    const city = cities[randomIndex];
    console.log(city);
    return {
      city: city.name,
      region: city.region,
      country: city.country,
    };
  } else {
    throw new Error("No cities found");
  }
}
