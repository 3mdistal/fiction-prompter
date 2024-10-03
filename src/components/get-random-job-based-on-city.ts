import { geminiFlash } from "./gemini";
import { generateObject } from "ai";
import { z } from "zod";

export default async function getRandomJobBasedOnCity(
  city: string,
  region: string,
  country: string
) {
  const result = await generateObject({
    model: geminiFlash,
    schema: z.object({
      careers: z.array(z.string()),
    }),
    prompt: `Generate a list of 10 careers strongly associated with ${city}, ${region}, ${country}.`,
  });

  const careers = result.object.careers;
  const randomIndex = Math.floor(Math.random() * careers.length);
  return careers[randomIndex];
}
