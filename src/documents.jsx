/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';

const Frame = styled.iframe`
  height: 100%;
  width: 100%;
`;
export const Journey = () => (
  <Frame title="Journey" src="https://docs.google.com/document/d/e/2PACX-1vT_px7P5SXk2XJyKYhcsS-x06gPIP0_DDx7hqrr6QLVv8f8hwoW2x9y17Vo7Y4zz0PEjvbmyB9kqYBD/pub?embedded=true" />
);
export const Integrity = () => (
  <Frame title="Integrity" src="https://docs.google.com/document/d/e/2PACX-1vTpTeuX_lJFlPBRwkDqy7rxa72Cj8V68zvVocoL-4EJ3yyaNZFARwzNHFvKXalJOd-pNd0Fqn9l_xb4/pub?embedded=true" />
);

export const Projects = () => (
  <Frame title="Projects" src="https://docs.google.com/document/d/e/2PACX-1vTSclovdUCmS1wrgXp5bcPN2QXrqG3zO7AaLVt6ZzlccxLDWO7M-eUq5hvc1seUHbuZ-r893mB4slXc/pub?embedded=true" />
);

export const Resume = () => (
  <Frame title="Resume" src="https://docs.google.com/document/d/e/2PACX-1vSfAhznhZDtUBL0PitUeI9rLWtM6YXo_6qAHNm-Pe08LQg2hRChh0gTHAWxW2cdVXknz20lJHiZDgc6/pub?embedded=true" />
);
