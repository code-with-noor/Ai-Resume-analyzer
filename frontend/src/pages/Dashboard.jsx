import ScoreCard from "../components/ScoreCard";
import Skills from "../components/Skills";
import Suggestions from "../components/Suggestions";

function Dashboard({data}){

  if(!data) return null

  return(

    <div className="grid md:grid-cols-3 gap-6 mt-8">

      <ScoreCard score={data.ats_score} />

      <Skills skills={data.skills} />

      <Suggestions suggestions={data.suggestions} />

    </div>

  )
}

export default Dashboard