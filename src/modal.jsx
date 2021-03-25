import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
  position: absolute;
  left: 4vw;
  top: 5vh;
  width: 90vw;
  height: 70vh;
  z-index: 20;
`;

function useOutsideAlerter(ref) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        ReactDOM.render(
          <div />,
          document.getElementById('modal'),
        );
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

const Modal = ({ component }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <Box ref={wrapperRef}>
      {component}
    </Box>
  );
};

export default Modal;

Modal.propTypes = {
  component: PropTypes.node.isRequired,
};
