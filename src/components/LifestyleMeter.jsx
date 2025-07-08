import React, { useState, useEffect } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import styled from 'styled-components';

// Static mock data per city (you can later replace with API)
const mockCityData = {
  Tokyo: {
    internet: 89, internet_basis: 'Blazing fast 89 Mbps average',
    safety: 82, safety_basis: 'Very safe with 24/7 patrols',
    nightlife: 83, nightlife_basis: '100+ bars & clubs rated 4.5★+',
    mental_wellness: 74, wellness_basis: '50+ yoga studios & spas',
    cost: 91, cost_basis: 'Only $1,200/month avg cost',
    community: 66, community_basis: 'Growing expat community'
  },
  Lisbon: {
    internet: 76, internet_basis: 'Decent 76 Mbps average',
    safety: 88, safety_basis: 'Extremely safe at night',
    nightlife: 90, nightlife_basis: 'Vibrant and open till 4am',
    mental_wellness: 82, wellness_basis: 'Affordable wellness centers',
    cost: 70, cost_basis: 'Avg $1,500/month living cost',
    community: 80, community_basis: 'Strong digital nomad scene'
  },
  Barcelona: {
    internet: 84, internet_basis: 'High-speed internet with fiber options',
    safety: 75, safety_basis: 'Generally safe, be mindful of pickpockets',
    nightlife: 92, nightlife_basis: 'Buzzing nightlife and beach clubs',
    mental_wellness: 80, wellness_basis: 'Urban parks & fitness culture',
    cost: 78, cost_basis: 'Approx $1,600/month for nomads',
    community: 85, community_basis: 'Large international & tech community'
  }
};

const Container = styled.div`
  padding: 2.5rem;
  border-radius: 24px;
  margin: 2rem auto;
  width: 95%;
  max-width: 1200px;
  border: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  background: linear-gradient(90deg, #6c5ce7, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.5px;
`;

const Subtitle = styled.p`
  color: #636e72;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const CitySelector = styled.select`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #dcdde1;
  background: white;
  color: #2d3436;
  font-weight: 500;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 380px;
  margin: 2rem 0;
  position: relative;
`;

const ScoreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ScoreCard = styled.div`
  padding: 1.5rem;
  width: 95%;
  max-width: 1200px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid rgba(0,0,0,0.03);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(108, 92, 231, 0.15);
  }
`;

const ScoreHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
`;

const MetricIcon = styled.span`
  font-size: 1.8rem;
`;

const ScoreValue = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(90deg, #6c5ce7, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1;
`;

const ScoreLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #2d3436;
  margin: 0.5rem 0;
`;

const ScoreBasis = styled.div`
  font-size: 0.85rem;
  color: #636e72;
  text-align: center;
  line-height: 1.4;
`;

const PulseCircle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(108,92,231,0.1) 0%, rgba(108,92,231,0) 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

const LifestyleMeter = () => {
  const [city, setCity] = useState('Tokyo');
  const [lifestyleData, setLifestyleData] = useState([]);

  useEffect(() => {
    const raw = mockCityData[city];

    const formatted = [
      { metric: 'Internet', score: raw.internet, icon: '🚀', color: '#FF6B6B', basis: raw.internet_basis },
      { metric: 'Safety', score: raw.safety, icon: '🛡️', color: '#4ECDC4', basis: raw.safety_basis },
      { metric: 'Nightlife', score: raw.nightlife, icon: '🍹', color: '#FF9F1C', basis: raw.nightlife_basis },
      { metric: 'Wellness', score: raw.mental_wellness, icon: '🧘', color: '#A78BFA', basis: raw.wellness_basis },
      { metric: 'Cost', score: raw.cost, icon: '💰', color: '#2ECC71', basis: raw.cost_basis },
      { metric: 'Community', score: raw.community, icon: '👥', color: '#F9C74F', basis: raw.community_basis },
    ];

    setLifestyleData(formatted);
  }, [city]);

  return (
    <Container>
      <Header>
        <Title>Nomad Lifestyle Score</Title>
        <Subtitle>
          Our vibrant rating system evaluates what truly matters for digital nomads - 
          combining hard data with community experiences
        </Subtitle>
        <CitySelector value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="Tokyo">Tokyo</option>
          <option value="Lisbon">Lisbon</option>
          <option value="Barcelona">Barcelona</option>
        </CitySelector>
      </Header>

      {/* Chart + All ScoreCards side-by-side */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <ChartContainer style={{ flex: '1 1 400px', minWidth: '350px' }}>
          <PulseCircle />
          <ResponsiveContainer>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={lifestyleData}>
              <PolarGrid stroke="#e0e3e6" gridType="circle" />
              <PolarAngleAxis 
                dataKey="metric" 
                tick={{ fill: '#2d3436', fontSize: 12, fontWeight: 600 }}
              />
              <Radar
                name="Score"
                dataKey="score"
                stroke="#6c5ce7"
                fill="#6c5ce7"
                fillOpacity={0.2}
                strokeWidth={2}
                animationDuration={1800}
              />
              <Tooltip 
                contentStyle={{
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: '12px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  backdropFilter: 'blur(10px)',
                  fontSize: '14px'
                }}
                itemStyle={{
                  color: '#6c5ce7',
                  fontWeight: 600
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <div
          style={{
            flex: '1 1 550px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {lifestyleData.map((item) => (
            <ScoreCard key={item.metric} style={{ borderTop: `4px solid ${item.color}` }}>
              <ScoreHeader>
                <MetricIcon>{item.icon}</MetricIcon>
                <ScoreLabel>{item.metric}</ScoreLabel>
              </ScoreHeader>
              <ScoreValue>{item.score}</ScoreValue>
              <ScoreBasis>{item.basis}</ScoreBasis>
            </ScoreCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LifestyleMeter;
