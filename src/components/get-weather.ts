interface WeatherData {
  temperature: number;
  weatherCode: number;
  weatherDescription: string;
}

export default async function getWeather(
  latitude: number,
  longitude: number
): Promise<WeatherData> {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );

  if (!response.ok) {
    throw new Error("Error fetching weather data");
  }

  const data = await response.json();
  const { temperature, weathercode } = data.current_weather;

  // Map weather codes to descriptions
  const weatherDescriptions: { [key: number]: string } = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    95: "Thunderstorm",
  };

  return {
    temperature,
    weatherCode: weathercode,
    weatherDescription:
      weatherDescriptions[weathercode] || "Unknown weather condition",
  };
}
