import type { APIRoute } from "astro";
import getPrompt from "../../components/get-prompt";

export const GET: APIRoute = async ({ params, request }) => {
  try {
    const { promptStream, city } = await getPrompt();

    return new Response(promptStream, {
      headers: {
        "Content-Type": "text/plain",
        "Transfer-Encoding": "chunked",
        "X-City-Info": JSON.stringify(city),
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
