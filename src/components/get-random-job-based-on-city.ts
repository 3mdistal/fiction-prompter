import { geminiFlash } from "./gemini";
import { generateText } from "ai";

export default async function getRandomJobBasedOnCity(
  city: string,
  region: string,
  country: string
) {
  const { text } = await generateText({
    model: geminiFlash,
    prompt: `Generate a list of 50 careers likely found in ${city}, ${region}, ${country}. Only the list, no other text.`,
  });
  // Parse the text into an array of careers
  const careers = text
    .split(/\n/)
    .map((career) => career.trim())
    .filter((career) => career.length > 0)
    .map((career) => career.replace(/^\d+\.\s*/, "")); // Remove numbering if present

  const randomIndex = Math.floor(Math.random() * careers.length);
  return careers[randomIndex];
}
