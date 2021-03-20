import React from 'react';
import styled from 'styled-components';

import Terminal from './terminal';

const Container = styled.div`
  margin: 0 auto 0 auto;
  width: 768.75px;
  height: 438px;
  z-index: 2;
`;
const LaptopImg = styled.div`
  background-Image: url('laptop.png');
  background-Repeat: no-repeat;
  background-Size: 100%;
  height: 100%;
  width: 100%;
  z-index: 3;
`;

const Screen = styled.div`

  position: relative;
  top: -417px;
  left: 167px;
  width: 436px;
  height: 293px;
  z-index: 4;
`;

const Laptop = () => (
  <Container>
    <LaptopImg />
    <Screen>
      <Terminal />
    </Screen>
  </Container>
);

export default Laptop;
