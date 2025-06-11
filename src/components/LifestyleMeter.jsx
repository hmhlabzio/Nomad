import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

// Mock data for the lifestyle metrics
const lifestyleData = [
  {
    metric: 'Internet Speed',
    score: 89,
    fullMark: 100,
  },
  {
    metric: 'Safety',
    score: 82,
    fullMark: 100,
  },
  {
    metric: 'Nightlife',
    score: 83,
    fullMark: 100,
  },
  {
    metric: 'Wellness',
    score: 74,
    fullMark: 100,
  },
  {
    metric: 'Cost',
    score: 91,
    fullMark: 100,
  },
  {
    metric: 'Community',
    score: 66,
    fullMark: 100,
  },
];

const Container = styled.div`
  padding: 2rem;
  background: ${props => props.theme.cardBg};
  border-radius: 16px;
  box-shadow: ${props => props.theme.cardShadow};
  margin: 2rem 0;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const Description = styled.p`
  margin-bottom: 2rem;
  color: ${props => props.theme.text};
  line-height: 1.6;
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const ScoreCard = styled.div`
  flex: 1;
  min-width: 120px;
  padding: 1rem;
  background: rgba(108, 92, 231, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const ScoreValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const ScoreLabel = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.text};
`;

export const LifestyleMeter = () => {
  return (
    <Container>
      <Title>Lifestyle Score Meter</Title>
      {/* <Description>
        Nomad is our smart companion for digital nomad city exploration. Discover the best destinations with real time data on lifestyle, internet, safety, and more.
      </Description> */}

      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={lifestyleData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="metric" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Lifestyle Score"
              dataKey="score"
              stroke="#6c5ce7"
              fill="#6c5ce7"
              fillOpacity={0.6}
              animationBegin={0}
              animationDuration={1500}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <ScoreContainer>
        {lifestyleData.map((item) => (
          <ScoreCard key={item.metric}>
            <ScoreValue>{item.score}</ScoreValue>
            <ScoreLabel>{item.metric}</ScoreLabel>
          </ScoreCard>
        ))}
      </ScoreContainer>
    </Container>
  );
};
export default LifestyleMeter;

 