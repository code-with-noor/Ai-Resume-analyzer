import { useState } from "react";
import { uploadResume } from "../services/api";

function ResumeUpload({ setResult }) {

  const [file,setFile] = useState(null);

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const formData = new FormData();
    formData.append("resume",file);

    const res = await uploadResume(formData);

    setResult(res.data.analysis);
  };

  return (

    <div className="bg-white rounded-lg shadow p-8 text-center">

      <h2 className="text-xl font-semibold mb-6">
        Upload Resume
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="file"
          onChange={(e)=>setFile(e.target.files[0])}
          className="mb-6"
        />

        <button className="bg-indigo-600 text-white px-6 py-2 rounded">
          Analyze Resume
        </button>

      </form>

    </div>

  );
}

export default ResumeUpload;