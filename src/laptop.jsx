import React from 'react';
import styled from 'styled-components';

import Terminal from './terminal';

const Container = styled.div`

  margin: 0 auto 0 auto;
  width: 100%;
  height: fit-content; /* 57 */
  z-index: 2;
`;
const LaptopImg = styled.div`
  background-image: url(laptop.webp);
  background-repeat: no-repeat;
  background-size: 100%;
  height: 57vw;
  width: 100vw;
  z-index: 3;
`;

const Screen = styled.div`
  position: relative;
  top: 3vw;
  width: 58%;
  margin: 0px auto;
  height: 38vw;
  z-index: 4;
}
`;

const Laptop = () => (
  <Container>
    <LaptopImg>
      <Screen>
        <Terminal />
      </Screen>
    </LaptopImg>
  </Container>
);

export default Laptop;
