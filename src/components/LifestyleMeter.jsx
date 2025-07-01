import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import styled from 'styled-components';

const lifestyleData = [
  { metric: 'Internet', score: 89, icon: '🚀', color: '#FF6B6B', basis: 'Blazing fast 89 Mbps average' },
  { metric: 'Safety', score: 82, icon: '🛡️', color: '#4ECDC4', basis: 'Very safe with 24/7 patrols' },
  { metric: 'Nightlife', score: 83, icon: '🍹', color: '#FF9F1C', basis: '100+ bars & clubs rated 4.5★+' },
  { metric: 'Wellness', score: 74, icon: '🧘', color: '#A78BFA', basis: '50+ yoga studios & spas' },
  { metric: 'Cost', score: 91, icon: '💰', color: '#2ECC71', basis: 'Only $1,200/month avg cost' },
  { metric: 'Community', score: 66, icon: '👥', color: '#F9C74F', basis: 'Growing expat community' },
];

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
  max-width: 1200px;  background: white;
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
  return (
    <Container>
      <Header>
        <Title>Nomad Lifestyle Score</Title>
        <Subtitle>
          Our vibrant rating system evaluates what truly matters for digital nomads - 
          combining hard data with community experiences
        </Subtitle>
      </Header>

      <ChartContainer>
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

      <ScoreContainer>
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
      </ScoreContainer>
    </Container>
  );
};

export default LifestyleMeter;
