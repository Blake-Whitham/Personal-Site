import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    border-radius: 13px;
    display: flex;
    flex-flow: column nowrap;
    height: 300px;
    width: 20%;
    min-width: 200px;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    z-index: 3;

`;
const Apps = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const Title = styled.h3`
  text-align: center;
  z-index: 4;
`;
const Img = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 20%;
`;
const App = styled.fieldset`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  width: 85%;
  padding: 5px;

`;
const Stack = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;

`;
const Technology = styled.text`
  color: black;
  font-size: 14px;
  margin-left: 10px;
`;

const DemoCard = () => (
  <Container>
    <Title>Create</Title>
    <Apps>
      <App>
        <legend>PostCard</legend>
        <a href="https://www.post-card.io">
          <Img src="./postcard.png" />
        </a>
        <Stack>
          <Technology>ArangoDB</Technology>
          <Technology>Next.js</Technology>
          <Technology>Next API Routes</Technology>
          <Technology>Node.js</Technology>
        </Stack>
      </App>
      <App>
        <legend>Meditation</legend>
        <a href="https://meditation-iota.vercel.app/">
          <Img src="./meditation.png" />
        </a>
        <Stack>
          <Technology>Next.js</Technology>
          <Technology>Node.js</Technology>
        </Stack>
      </App>
      <App>
        <legend>Meditation</legend>
        <a href={`http://affordability-component.herokuapp.com/mortgage/${Math.floor(Math.random() * 10000)}/`}>
          <Img src="./affordability.png" />
        </a>
        <Stack>
          <Technology>MongoDB</Technology>
          <Technology>Express.js</Technology>
          <Technology>React.js</Technology>
          <Technology>Node.js</Technology>
        </Stack>
      </App>
      {/* Insert Scalable Snake prj
      <a href="https://meditation-iota.vercel.app/">
        <Img src="./meditation.png" />
      </a> */}
    </Apps>
  </Container>
);

export default DemoCard;
