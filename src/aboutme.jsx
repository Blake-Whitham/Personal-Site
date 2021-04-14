/* eslint-disable max-len */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './contact';

import styled from 'styled-components';

import Modal from './modal';

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: auto;
  gap: 10px;
  grid-template-areas:
    "pic name"
    "pic title"
    "statement statement";
  margin: 77px auto;
  border: 3px solid black;
  width: 80%;
  background-color: rgba(255, 255, 255, .15);
  backdrop-filter: blur(5px);
  padding: 20px;
  z-index: 2;
`;
const Pic = styled.img`
  grid-area: pic;
  border-radius: 50%;
  width: 150px;
  height: auto;
`;
const Name = styled.h2`
  grid-area: name;
  text-align: center;
`;
const Title = styled.h3`
  grid-area: title;
  text-align: center;
`;
const Statement = styled.p`
  grid-area: statement;
  text-align: justify;
`;
const Button = styled.button`

  height: 3em;
  width: 34%;
  margin: 10px 0 0;
  border: 3px outset darkslategray;
  border-radius: 2rem;
  background-image: radial-gradient(circle at center,
    rgba(255, 240, 243, 0.5) 0%,
    rgba(230, 220, 222, 0.5) 27.5%,
    rgba(223, 209, 214, 0.5) 40%,
    rgba(211, 195, 203, 0.5) 57.5%,
    rgba(185, 168, 174, 0.5) 75%,
    rgba(177, 163, 168, 0.5) 100%) !important;

  &:active {
    box-shadow: inset 6px -8px 6px 0px rgb(255 255 255 / 75%);
    border: 3px inset darkslategray;
  }
  &:focus {
    outline: none;
  }
`;


export default function About() {
  const [x, setX] = useState(1);
  const [y, setY] = useState(1)
  function deployModal(name) {
    ReactDOM.render(
      <Modal component={name} />,
      document.getElementById('modal'),
    );
  }
  function updateMouse(e) {

    setX(e.clientX);
    setY(e.clientY);
  }
  return (
    <Section>
      <Pic src="./me.webp" alt="Photo of Blake Whitham" width="150" height="150" />
      <Name>
        William (Blake) Whitham
        <br></br>
        <Button
          onClick={() => deployModal(<ContactForm />)}
          onMouseMove={(e) => { updateMouse(e); }}
          x={x} y={y}
        >
          Contact me
        </Button>
      </Name>
      <Title>Event Specialist turned Software Engineer</Title>
      <Statement>
        &emsp; After dedicating five years to creating awe-inspiring experiences for groups like AWS, Google, Facebook, and many more, I now have an opportunity to pivot my creativity and systematic approach into a sector where I can better the world from the bleeding edge by utilizing my skills in front-end and back-end development.
        <br />
        &emsp;Currently, I am not the best developer. In this constantly evolving environment, what it takes to be on top is the trillion-dollar question, but I do understand that agility and persistence are the fuel that propels a company from the bottom up, and I do have the skill set to be an immeasurable asset in that engine.
        <br />
        &emsp;Driven by classic ideologies on self-reliance, I believed that it was my responsibility to meet certain accomplishments in life. To build, to teach, to entertain, and to better the world for the next generation. I have built a cabin, been a great educator, built beautiful experiences, and now I am set on disruption and improvement. To say I am excited to join your team would be an understatement, I am fueled and empowered to work together to make this world a better place, one line of code at a time.
      </Statement>
    </Section>
  );
}
