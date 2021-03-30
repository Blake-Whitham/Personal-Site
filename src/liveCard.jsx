import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Journey, Integrity, Projects, Resume,
} from './documents';
// const Modal = lazy(() => import('./integrity'));
import Modal from './modal';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 13px;
  height: 300px;
  width: 25%;
  min-width: 158px;
  background-color: rgba(255, 255, 255, .15);
  backdrop-filter: blur(5px);
  z-index: 3;

`;

const Title = styled.h3`
  text-align: center;
  z-index: 4;
`;
const Buttons = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  width: 90%;
  height: 100%;
`;
const comps = {
  Journey: <Journey />,
  Integrity: <Integrity />,
  Projects: <Projects />,
  Resume: <Resume />,
};
function deployModal(name) {
  ReactDOM.render(
    <Modal component={comps[name]} />,
    document.getElementById('modal'),
  );
}

const Button = styled.button.attrs((props) => (
  {
    name: props.name || 'button',
    onClick: () => deployModal(props.name),
  }))`
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    border-radius: 3rem;
    padding: 0.6rem 0;
    outline: none;
    background-color: rgba(255, 255, 255, .05);
    backdrop-filter: blur(5px);
    border: 2px solid rgba(255,255,255,.1);
  &:hover {
    opacity: 0.7;
  }

`;

const liveCard = () => (
  <Container>
    <Title>Live</Title>

    <Buttons>
      <Button name="Journey">
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
    </Buttons>
  </Container>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
export default liveCard;
