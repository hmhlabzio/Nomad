import Hero from "./components/Hero";
import CityPreview from "./components/CityPreview";
import MoodHeatmap from "./components/MoodHeatmap";
import SafetyScore from "./components/SafetyScore";
import ExploreWorld from "./components/ExploreWorld";
import CostForecaster from "./components/CostForecaster";
import LifestyleMeter from "./components/LifestyleMeter";
function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
    {/* <div className="w-full max-w-[1800px] px-4 py-6">w-full */}
     <div className="w-full">
      <Hero />
      <CityPreview />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <MoodHeatmap />
        <SafetyScore />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <ExploreWorld />
        <CostForecaster />
      </div>
      <LifestyleMeter />
    </div>
    </div>
  );
}

export default App;
