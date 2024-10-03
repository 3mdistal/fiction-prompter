import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: import.meta.env.GEMINI_API_KEY,
});

export const geminiFlash = google("gemini-1.5-flash-002");
export const geminiPro = google("gemini-1.5-pro-002");
