
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askSchoolAI = async (question: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `أنت مساعد ذكي لمدرسة "قصر المعرفة". أجب على استفسارات الطلاب وأولياء الأمور بأسلوب مهذب وداعم باللغة العربية. المدرسة تضم صفوفاً من الأول الابتدائي حتى السادس. المدير هو أ. محمد العتيبي. تواصل الإدارة عبر التيليجرام.`,
      },
    });
    return response.text || "عذراً، لم أتمكن من فهم طلبك حالياً.";
  } catch (error) {
    console.error("AI Error:", error);
    return "حدث خطأ أثناء التواصل مع المساعد الذكي.";
  }
};
