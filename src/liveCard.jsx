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

const comps = {
  Journey: <Journey />,
  Integrity: <Integrity />,
  Projects: <Projects />,
  Resume: <Resume />,
};
function deployModal(name) {
  ReactDOM.render(
    // <Suspense fallback={<div>loading</div>}>
    <Modal component={comps[name]} />,
    // </Suspense>,
    document.getElementById('modal'),
  );
}

const Button = styled.button.attrs((props) => (
  {
    name: props.name || 'button',
    onClick: () => deployModal(props.name),
  }))`
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

const liveCard = () => (
  <Container>
    <Title>Live</Title>

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

  </Container>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
export default liveCard;
