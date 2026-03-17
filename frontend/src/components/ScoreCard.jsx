function ScoreCard({ score }) {

  return (

    <div className="bg-blue-100 border border-blue-300 shadow rounded-lg p-6 text-center">

      <h2 className="font-semibold text-blue-700 mb-4">
        ATS Score
      </h2>

      <p className="text-4xl font-bold text-blue-600">
        {score}%
      </p>

    </div>

  );

}

export default ScoreCard;