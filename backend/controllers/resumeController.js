const parseResume = require("../services/resumeParser");
const analyzeResumeAI = require("../services/aiService");

exports.analyzeResume = async (req, res) => {

  try {

    const file = req.file;
    const jobDesc = req.body.jobDesc;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const resumeText = await parseResume(file.path);

    const aiResult = await analyzeResumeAI(resumeText, jobDesc);

    res.json({
      message: "AI analysis complete",
      analysis: aiResult
    });

  } catch (error) {

    console.log("SERVER ERROR:", error.message); 

    res.status(500).json({ error: error.message });

  }

};