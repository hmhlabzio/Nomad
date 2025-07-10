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

// Static mock data per country (can be updated later)
const mockCityData = {
  Japan: {
    internet: 89, internet_basis: 'Blazing fast 89 Mbps average',
    safety: 82, safety_basis: 'Very safe with 24/7 patrols',
    nightlife: 83, nightlife_basis: '100+ bars & clubs rated 4.5★+',
    mental_wellness: 74, wellness_basis: '50+ yoga studios & spas',
    cost: 91, cost_basis: 'Only $1,200/month avg cost',
    community: 66, community_basis: 'Growing expat community'
  },
  Portugal: {
    internet: 76, internet_basis: 'Decent 76 Mbps average',
    safety: 88, safety_basis: 'Extremely safe at night',
    nightlife: 90, nightlife_basis: 'Vibrant and open till 4am',
    mental_wellness: 82, wellness_basis: 'Affordable wellness centers',
    cost: 70, cost_basis: 'Avg $1,500/month living cost',
    community: 80, community_basis: 'Strong digital nomad scene'
  },
  Spain: {
    internet: 84, internet_basis: 'High-speed internet with fiber options',
    safety: 75, safety_basis: 'Generally safe, be mindful of pickpockets',
    nightlife: 92, nightlife_basis: 'Buzzing nightlife and beach clubs',
    mental_wellness: 80, wellness_basis: 'Urban parks & fitness culture',
    cost: 78, cost_basis: 'Approx $1,600/month for nomads',
    community: 85, community_basis: 'Large international & tech community'
  },
  Thailand: {
    internet: 70, internet_basis: 'Stable internet in urban areas',
    safety: 68, safety_basis: 'Tourist-friendly, but stay alert',
    nightlife: 88, nightlife_basis: 'Famous beach parties and clubs',
    mental_wellness: 75, wellness_basis: 'Affordable retreats and massages',
    cost: 60, cost_basis: 'Approx $1,000/month budget',
    community: 72, community_basis: 'Active backpacker and nomad community'
  },
  Turkey: {
    internet: 65, internet_basis: 'Average speeds, improving gradually',
    safety: 60, safety_basis: 'Safe with tourist zones prioritized',
    nightlife: 70, nightlife_basis: 'Popular bars and lounges',
    mental_wellness: 68, wellness_basis: 'Access to spas and hammams',
    cost: 55, cost_basis: 'Approx $900/month living cost',
    community: 60, community_basis: 'Growing nomad interest'
  },
  Singapore: {
    internet: 95, internet_basis: 'World-class fiber network',
    safety: 90, safety_basis: 'Extremely safe and orderly',
    nightlife: 85, nightlife_basis: 'Trendy rooftop bars & clubs',
    mental_wellness: 80, wellness_basis: 'Clean environment & parks',
    cost: 92, cost_basis: 'High cost: ~$2,500/month',
    community: 78, community_basis: 'Diverse, global community'
  },
  'Dubai (UAE)': {
    internet: 92, internet_basis: 'High-speed fiber & 5G access',
    safety: 86, safety_basis: 'Heavily monitored and safe',
    nightlife: 75, nightlife_basis: 'Exclusive lounges & beach clubs',
    mental_wellness: 77, wellness_basis: 'Luxury spas and wellness centers',
    cost: 85, cost_basis: 'Average $2,000/month',
    community: 74, community_basis: 'Expat hub with many meetups'
  },
  Mexico: {
    internet: 68, internet_basis: 'City areas have decent speed',
    safety: 58, safety_basis: 'Use caution, safer in nomad areas',
    nightlife: 82, nightlife_basis: 'Lively music and culture scene',
    mental_wellness: 70, wellness_basis: 'Nature, beaches, local healing',
    cost: 65, cost_basis: 'Approx $1,200/month average',
    community: 76, community_basis: 'Popular for long-stay nomads'
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
  max-height: 3rem;
  overflow-y: auto;

  option {
    padding: 0.5rem;
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 380px;
  margin: 2rem 0;
  position: relative;
`;

const ScoreCard = styled.div`
  padding: 1.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const ScoreLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #2d3436;
`;

const ScoreBasis = styled.div`
  font-size: 0.85rem;
  color: #636e72;
  text-align: center;
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
  const [city, setCity] = useState('Japan');
  const [lifestyleData, setLifestyleData] = useState([]);

  useEffect(() => {
    const raw = mockCityData[city];
    if (!raw) return;

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

        <CitySelector value={city} onChange={(e) => setCity(e.target.value)} size={1}>
          <option value="Thailand">Thailand</option>
          <option value="Turkey">Turkey</option>
          <option value="Singapore">Singapore</option>
          <option value="Dubai (UAE)">Dubai (UAE)</option>
          <option value="Mexico">Mexico</option>
          <option value="Portugal">Portugal</option>
          <option value="Spain">Spain</option>
          <option value="Japan">Japan</option>
        </CitySelector>
      </Header>

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
