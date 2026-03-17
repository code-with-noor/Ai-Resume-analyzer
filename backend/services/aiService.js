const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeResumeAI = async (resumeText, jobDesc = "") => {

  const limitedText = resumeText.slice(0, 6000);

  const model = genAI.getGenerativeModel({
    model: "gemini-3-flash-preview" // 🔥 your working model
  });

  const prompt = `
You are an AI resume analyzer.

Return ONLY pure JSON.
NO explanation.
NO extra text.

Format:

{
 "skills": ["React"],
 "ats_score": 70,
 "suggestions": ["Improve projects"],
 "match_score": 60,
 "missing_skills": ["Docker"]
}

Resume:
${limitedText}

Job Description:
${jobDesc || "Not provided"}
`;

  try {

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    console.log("RAW AI:", text);

    // 🧹 clean markdown
    text = text.replace(/```json/g, "")
               .replace(/```/g, "")
               .trim();

    // 🔥 extract JSON safely
    const match = text.match(/\{[\s\S]*\}/);

    if (!match) throw new Error("No JSON found");

    return JSON.parse(match[0]);

  } catch (err) {

    console.log("AI ERROR:", err.message);

    return {
      skills: [],
      ats_score: 0,
      suggestions: ["AI processing failed"],
      match_score: 0,
      missing_skills: []
    };

  }

};

module.exports = analyzeResumeAI;