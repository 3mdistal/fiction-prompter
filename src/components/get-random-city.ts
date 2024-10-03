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

    // Fetch the local time for the selected city
    const timeResponse = await fetch(
      `http://geodb-free-service.wirefreethought.com/v1/geo/cities/${city.id}/time`
    );

    if (!timeResponse.ok) {
      throw new Error("Error fetching city time");
    }

    const timeData = await timeResponse.json();
    const localTime = timeData.data;

    // Extract hour and minute from the localTime string
    let croppedTime = null;
    if (typeof localTime === "string") {
      const timeParts = localTime.split(":");
      if (timeParts.length >= 2) {
        croppedTime = `${timeParts[0].padStart(2, "0")}:${timeParts[1].padStart(
          2,
          "0"
        )}`;
      }
    }

    return {
      city: city.name,
      region: city.region,
      country: city.country,
      localTime: croppedTime,
      latitude: city.latitude,
      longitude: city.longitude,
    };
  } else {
    throw new Error("No cities found");
  }
}
