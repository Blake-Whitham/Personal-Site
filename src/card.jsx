import React from 'react';

import PropTypes from 'prop-types';

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

const Card = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Card;
