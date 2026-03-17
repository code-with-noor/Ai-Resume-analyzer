import { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import ResumeUpload from "./components/ResumeUpload";
import Dashboard from "./pages/Dashboard";

function App() {

  const [result, setResult] = useState(null);
  const dashboardRef = useRef(null);

  // 👇 auto scroll
  useEffect(() => {
    if (result && dashboardRef.current) {
      dashboardRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [result]);

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="max-w-5xl mx-auto mt-10 px-4">

        <ResumeUpload setResult={setResult} />

        {/* 👇 ref add karo */}
        <div ref={dashboardRef}>
          <Dashboard data={result} />
        </div>

      </div>

    </div>

  );

}

export default App;