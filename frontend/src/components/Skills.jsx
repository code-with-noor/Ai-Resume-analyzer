function Skills({ skills = [] }) {

  return (

    <div className="bg-purple-100 border border-purple-300 shadow rounded-lg p-6">

      <h2 className="font-semibold text-purple-700 mb-4">
        Top Skills
      </h2>

      <div className="flex flex-wrap gap-2">

        {skills.map((s,i)=>(
          <span
            key={i}
            className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm"
          >
            {s}
          </span>
        ))}

      </div>

    </div>

  );

}

export default Skills;