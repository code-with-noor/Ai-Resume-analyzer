function Skills({skills}){

  return(

    <div className="bg-white shadow rounded-lg p-6">

      <h2 className="font-semibold mb-4">
        Top Skills
      </h2>

      <div className="flex flex-wrap gap-2">

        {skills.map((s,i)=>(
          <span
            key={i}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            {s}
          </span>
        ))}

      </div>

    </div>

  )
}

export default Skills