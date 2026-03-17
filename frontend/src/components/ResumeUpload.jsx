import { useState } from "react";
import { uploadResume } from "../services/api";

function ResumeUpload({ setResult }) {

  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return;

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDesc", jobDesc); // 👈 new

    try {
      setLoading(true);

      const res = await uploadResume(formData);

      setResult(res.data.analysis);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-10 rounded-2xl shadow-xl text-center">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        AI Resume Analyzer
      </h2>

      <p className="text-gray-500 mb-8">
        Upload your resume and compare it with a job description
        to get ATS score, skills, and match insights.
      </p>

      {/* Upload Box */}
      <div className="border-2 border-dashed border-indigo-300 rounded-xl p-8 text-center hover:border-indigo-600 transition bg-white">

        <p className="text-gray-700 font-medium mb-2">
          Drag & Drop your resume here
        </p>

        <p className="text-gray-400 mb-4 text-sm">
          or browse files from your device
        </p>

        <input
          type="file"
          id="fileUpload"
          onChange={(e) => setFile(e.target.files[0])}
          className="hidden"
        />

        <label
          htmlFor="fileUpload"
          className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition"
        >
          Choose File
        </label>

        {file && (
          <p className="mt-3 text-green-600 font-medium">
            {file.name}
          </p>
        )}

        <p className="text-xs text-gray-400 mt-2">
          Supported format: PDF (Max 2MB)
        </p>

      </div>

      {/* Job Description Input */}
      <div className="mt-6 text-left">

        <label className="block font-semibold mb-2 text-gray-700">
          Paste Job Description (Optional)
        </label>

        <textarea
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          placeholder="Paste job description here to check match score..."
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          rows={4}
        ></textarea>

      </div>

      {/* Button */}
      <div className="mt-8 text-center">

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg disabled:bg-gray-400"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

      </div>

      {/* Loader */}
      {loading && (
        <div className="mt-6 flex flex-col items-center">

          <div className="w-10 h-10 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>

          <p className="mt-3 text-gray-600">
            AI is analyzing your resume...
          </p>

        </div>
      )}

    </div>

  );

}

export default ResumeUpload;