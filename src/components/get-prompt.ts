import { geminiFlash8b } from "./gemini";
import { generateText } from "ai";
import getRandomCity from "./get-random-city";
import getRandomJobBasedOnCity from "./get-random-job-based-on-city";
import getRandomGenre from "./get-random-genre";
import getRandomPOV from "./get-random-pov";
import getWeather from "./get-weather";

export default async function getPrompt(useAI = true) {
  const city = await getRandomCity();
  const job = await getRandomJobBasedOnCity(
    city.city,
    city.region,
    city.country
  );
  const { genre, subgenre } = getRandomGenre();
  const pov = getRandomPOV();
  const weather = await getWeather(city.latitude, city.longitude);

  const prompt = `
  Generate a creative writing prompt for a ${subgenre} story in the ${genre} genre.
  
  The story is set in ${city.city}, ${city.region}, ${city.country}.
  
  The story is strongly associated with the job: ${job}.
  
  The current local time is ${city.localTime}, and the weather is ${weather.weatherDescription} with a temperature of ${weather.temperature}°C. Be subtle about including these details.
  
  The story should be written from a ${pov.pov_types} perspective, in ${pov.person} form, with a ${pov.narrator_reliability} narrator.
  
  The narrative should have ${pov.knowledge_level} knowledge, be written in ${pov.tense} tense, with a ${pov.narrative_distance} narrative distance, and use ${pov.language_formality} language.
  
  The prompt should be no more than 150 words.`;

  if (!useAI) {
    return { prompt, city };
  }

  const response = await generateText({
    model: geminiFlash8b,
    prompt,
  });

  return { prompt: response.text, city };
}
