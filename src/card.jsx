import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
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

const Button = styled.button.attrs(props => ({
  name: props.name || 'button',
  onClick: () => deployModal(props.name),
  })
)`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  border-radius: 4px;
  transition: 0.2s;
  cursor: pointer;
  border: none;
  padding: 1rem;
  &:hover {
    opacity: 0.7;
  }
  
`;

const liveCard = () => {
  const comps = {
    Switch: <Switch />,
    Integrity: <Integrity />
    Projects: <Projects />,
    Resume: <Resume />,
  };
  function deployModal(name) {
    ReactDom.render(
      comps[name],
      document.getElementsById('modal'),
    );
  }
  return (
    <Container>
      <Title>Live</Title>
      
      <Button name="Switch"> 
        Journey to coding
      </Button>
      
      <Button name="Integrity"> 
        integrity at work
      </Button>
      
      <Button name="Projects"> 
        description of works
      </Button>
      
      <Button name="Resume"> 
        Resume
      </Button>
      
    </Container>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
export default liveCard;
