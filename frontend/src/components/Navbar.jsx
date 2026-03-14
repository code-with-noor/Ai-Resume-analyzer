function Navbar() {
  return (
    <div className="bg-indigo-700 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-xl font-semibold">
        AI Resume Analyzer
      </h1>

      <div className="space-x-6">
        <a>Dashboard</a>
        <a>About</a>
      </div>

    </div>
  );
}

export default Navbar;