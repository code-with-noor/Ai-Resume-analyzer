import { useState } from "react";
import Navbar from "./components/Navbar";
import ResumeUpload from "./components/ResumeUpload";
import Dashboard from "./pages/Dashboard";

function App() {

  const [result, setResult] = useState(null);

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="max-w-5xl mx-auto mt-10 px-4 text-center">

        <h1 className="text-3xl font-bold mb-2">
          AI Resume Analyzer
        </h1>

        <p className="text-gray-600 mb-8">
          Upload your resume and get ATS score, skills analysis,
          and improvement suggestions instantly.
        </p>

        <ResumeUpload setResult={setResult} />

        <Dashboard data={result} />

      </div>

    </div>

  );

}

export default App;