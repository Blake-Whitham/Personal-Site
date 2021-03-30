/* eslint-disable max-len */
import React from 'react';

import styled from 'styled-components';

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

export default function About() {
  return (
    <Section>
      <Pic src="./me.webp" alt="Photo of Blake Whitham" width="150" height="150" />
      <Name>William (Blake) Whitham</Name>
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
