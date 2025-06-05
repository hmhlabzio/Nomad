import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Internet Speed', value: 89, fill: '#8884d8' },
  { name: 'Safety', value: 82, fill: '#83a6ed' },
  { name: 'Nightlife', value: 83, fill: '#8dd1e1' },
  { name: 'Wellness', value: 74, fill: '#82ca9d' },
  { name: 'Cost', value: 91, fill: '#a4de6c' },
  { name: 'Community', value: 66, fill: '#d0ed57' },
];

function LifestyleMeter() {
  return (
    <div className="mt-8 bg-white text-black rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Lifestyle Score Meter</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            innerRadius="10%" 
            outerRadius="80%" 
            data={data}
            startAngle={180} 
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="value"
            />
            <Legend 
              iconSize={10} 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LifestyleMeter;