function Suggestions({ suggestions = [] }) {

  return (

    <div className="bg-green-100 border border-green-300 shadow rounded-lg p-6">

      <h2 className="font-semibold text-green-700 mb-4">
        Suggestions
      </h2>

      <ul className="list-disc ml-5 space-y-2 text-green-800">

        {suggestions.map((s,i)=>(
          <li key={i}>{s}</li>
        ))}

      </ul>

    </div>

  );

}

export default Suggestions;