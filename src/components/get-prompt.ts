import { geminiPro } from "./gemini";
import { generateText } from "ai";
import getRandomCity from "./get-random-city";
import getRandomJobBasedOnCity from "./get-random-job-based-on-city";
import getRandomGenre from "./get-random-genre";
import getRandomPOV from "./get-random-pov";

export default async function getPrompt(useAI = true) {
  const randomCity = await getRandomCity();
  const randomJob = await getRandomJobBasedOnCity(
    randomCity.city,
    randomCity.region,
    randomCity.country
  );
  const randomPOV = JSON.stringify(getRandomPOV());
  const randomGenre = getRandomGenre();
  const { genre, subgenre } = randomGenre;

  if (!useAI) {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  }

  const prompt = `
    Write a prompt for a piece of flash fiction. The story should take place in ${randomCity.city}, ${randomCity.region}, ${randomCity.country}. The story should have elements of ${subgenre} subgenre of ${genre}. The story should be written in the style of ${randomPOV}. It should include strong references to the job of ${randomJob}.

    The prompt itself should be no more than 150 words.
  `;

  const response = await generateText({
    model: geminiPro,
    prompt,
  });

  return response.text;
}
