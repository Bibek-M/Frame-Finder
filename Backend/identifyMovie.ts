import { GoogleGenAI, Type, Schema } from "@google/genai";

// Initialize Gemini SDK with API Key from process.env
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// JSON Output Schema
const movieSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    title: {
      type: Type.STRING,
      description:
        "The exact title of the movie or series found in the image. Return 'Unknown' if you cannot confidently identify it.",
    },
  },
  required: ["title"],
};

/**
 * Sends image buffer to Gemini API and returns the parsed movie result.
 */
export async function findMovie(
  buffer: Buffer,
  mimeType: string
): Promise<{ title: string }> {
  // Convert binary buffer directly to Base64
  const base64Data = buffer.toString("base64");

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: [
      "Identify the exact movie or TV show title from this screenshot.",
      {
        inlineData: {
          data: base64Data,
          mimeType: mimeType || "image/jpeg",
        },
      },
    ],
    config: {
      responseMimeType: "application/json",
      responseSchema: movieSchema,
      temperature: 0.1,
      thinkingConfig: {
        thinkingBudget: 0,
      },
    },
  });

  if (response.text) {
    return JSON.parse(response.text) as { title: string };
  }

  return { title: "Unknown" };
}
