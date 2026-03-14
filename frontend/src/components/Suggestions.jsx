function Suggestions({suggestions}){

  return(

    <div className="bg-white shadow rounded-lg p-6">

      <h2 className="font-semibold mb-4">
        Suggestions
      </h2>

      <ul className="list-disc ml-5 space-y-2">

        {suggestions.map((s,i)=>(
          <li key={i}>{s}</li>
        ))}

      </ul>

    </div>

  )
}

export default Suggestions