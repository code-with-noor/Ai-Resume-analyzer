function ScoreCard({score}){

  return(

    <div className="bg-white shadow rounded-lg p-6 text-center">

      <h2 className="font-semibold mb-4">
        ATS Score
      </h2>

      <p className="text-4xl font-bold text-indigo-600">
        {score}%
      </p>

      <div className="bg-gray-200 h-3 rounded mt-4">
        <div
          className="bg-indigo-600 h-3 rounded"
          style={{width:`${score}%`}}
        />
      </div>

    </div>

  )
}

export default ScoreCard