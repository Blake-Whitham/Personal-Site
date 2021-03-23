import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  border-radius: 13px;
  height: 300px;
  width: 20%;
  min-width: 200px;
  background-color: rgba(255, 255, 255, .15);
  backdrop-filter: blur(5px);
  z-index: 3;

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

const DemoCard = () => (
  <Container>
    <Title>Create</Title>
    <a href="https://www.post-card.io">
      <Img src="./postcard.png" />
    </a>
    <a href="https://meditation-iota.vercel.app/">
      <Img src="./meditation.png" />
    </a>
    {/* Insert Scalable Snake prj
    <a href="https://meditation-iota.vercel.app/">
      <Img src="./meditation.png" />
    </a> */}
  </Container>
);

export default DemoCard;
