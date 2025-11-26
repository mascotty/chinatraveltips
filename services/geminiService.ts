import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askTravelQuestion = async (userQuestion: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userQuestion,
      config: {
        systemInstruction: `You are an expert, welcoming local guide for foreign travelers visiting China. 
        Your goal is to provide accurate, practical, and culturally nuanced advice.
        
        Guidelines:
        - Keep answers concise (under 100 words).
        - Use a friendly, helpful tone.
        - Focus on practical logistics (apps, laws, customs) where applicable.
        - If the question is unsafe or inappropriate, politely decline to answer.
        - Mention specific Chinese apps or services if relevant (e.g., Alipay, WeChat, 12306).
        `,
      },
    });

    return response.text || "I'm sorry, I couldn't generate an answer at this moment. Please try again.";
  } catch (error) {
    console.error("Error querying Gemini:", error);
    return "There was a connection error. Please check your internet or try again later.";
  }
};
