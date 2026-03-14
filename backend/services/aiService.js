const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeResumeAI = async (resumeText) => {

  const limitedText = resumeText.slice(0, 10000);

  const model = genAI.getGenerativeModel({
    model: "gemini-3-flash-preview"
  });

  const prompt = `
Analyze this resume and return ONLY valid JSON.

{
 "skills": [],
 "ats_score": number,
 "suggestions": []
}

Resume:
${limitedText}
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  try {
    return JSON.parse(text);
  } catch (err) {
    return {
      raw_response: text
    };
  }

};

module.exports = analyzeResumeAI;