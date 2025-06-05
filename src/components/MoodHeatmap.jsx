import { useState } from "react";

function MoodHeatmap() {
  const [filter, setFilter] = useState("Weekly");

  const moodData = {
    Weekly: [
      { city: "Tokyo", emoji: "💚", percentage: 92 },
      { city: "Bali", emoji: "😊", percentage: 88 },
      { city: "Goa", emoji: "😎", percentage: 80 },
    ],
    Monthly: [
      { city: "Tokyo", emoji: "😐", percentage: 70 },
      { city: "Bali", emoji: "😍", percentage: 91 },
      { city: "Goa", emoji: "😄", percentage: 86 },
    ],
  };

  const moods = moodData[filter];

  return (
    <div className="mt-16 px-4 max-w-4xl mx-auto text-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">City Mood Heatmap</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="text-black px-2 py-1 rounded"
        >
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {moods.map((mood) => (
          <div
            key={mood.city}
            className="bg-white text-black rounded-xl p-4 shadow-md text-center"
          >
            <h3 className="text-lg font-bold">{mood.city}</h3>
            <div className="text-4xl">{mood.emoji}</div>
            <p className="text-sm text-gray-600">{mood.percentage}% felt positive</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodHeatmap;
