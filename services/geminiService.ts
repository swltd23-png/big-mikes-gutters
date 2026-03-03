import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

const getApiKey = () =>
  (typeof window !== "undefined" &&
    localStorage.getItem("bmg_gemini_api_key")) || "";

export const analyzeGutterIssue = async (userDescription: string): Promise<AIResponse> => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    // Fallback if no API key is present for demo purposes
    return {
      analysis: "Based on your description, it sounds like a blockage or alignment issue. We recommend a professional inspection to prevent water damage.",
      urgency: "Medium",
      recommendedService: "Inspection & Repair"
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const model = "gemini-3-flash-preview";
    const prompt = `
You are an expert gutter technician for Big Mike’s Gutters in Perth, Western Australia.
Brand tone: friendly, direct, practical. Tagline: “No mess. No fuss. Just a great job.”

Customer description: "${userDescription}"

Return JSON with:
- analysis: what it likely is (max 25 words)
- urgency: Low | Medium | High | Emergency
- recommendedService: one of Repair | Replacement | Cleaning | Inspection
`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING, description: "A brief, friendly explanation of what might be wrong." },
            urgency: { type: Type.STRING, enum: ["Low", "Medium", "High", "Emergency"] },
            recommendedService: { type: Type.STRING, description: "The specific service they likely need." }
          },
          required: ["analysis", "urgency", "recommendedService"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AIResponse;
  } catch (error) {
    console.error("AI Analysis failed:", error);
    return {
      analysis: "We couldn't automatically analyze the issue, but our team can help! Request a free quote below.",
      urgency: "Medium",
      recommendedService: "On-site Assessment"
    };
  }
};

export const suggestAddresses = async (input: string): Promise<string[]> => {
  const apiKey = getApiKey();
  if (!apiKey) return [];

  try {
    const ai = new GoogleGenAI({ apiKey });
    const model = "gemini-3-flash-preview";
    const prompt = `
You are a suburb suggestion assistant for Perth, Western Australia.
The user typed: "${input}".
Return up to 5 matching suburb + postcode suggestions only.
Example format:
["Success WA 6164", "Jandakot WA 6164"]
Return ONLY a JSON array of strings.
`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    const suggestions = JSON.parse(text);
    return Array.isArray(suggestions) ? suggestions : [];
  } catch (error) {
    console.error("Address suggestion failed:", error);
    return [];
  }
};