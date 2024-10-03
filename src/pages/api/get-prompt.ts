import type { APIRoute } from "astro";
import getPrompt from "../../components/get-prompt";

export const GET: APIRoute = async ({ params, request }) => {
  try {
    const prompt = await getPrompt();
    return new Response(JSON.stringify({ prompt }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error generating prompt:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate prompt" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
