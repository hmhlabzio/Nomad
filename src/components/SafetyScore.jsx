function SafetyScore() {
  return (
    <div className="bg-white text-black rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Safety Trust Score</h2>
      <div className="flex justify-center items-center h-48 bg-gray-100 rounded-lg">
        <p className="text-gray-500">Chart Coming Soon</p>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Safety ratings based on nomad community feedback</p>
      </div>
    </div>
  );
}

export default SafetyScore;