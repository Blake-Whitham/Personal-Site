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
  margin: 0 auto 0 auto;
  border: 3px solid black;
  width: 90%;
  z-index: 2;
`;
const Pic = styled.img`
  grid-area: pic;
  border-radius: 50%;
  width: 150px;
`;
const Name = styled.h2`
  grid-area: name;
  /* font-size: 900; */
  /* font-weight: bold; */
  text-align: center;
`;
const Title = styled.h3`
  grid-area: title;
  /* font-size: 900;
  font-weight: bold; */
  text-align: center;
`;
const Statement = styled.text`
  grid-area: statement;

`;

export default function About() {
  return (
    <Section>
      <Pic src="./me.jpg" />
      <Name>William (Blake) Whitham</Name>
      <Title>Event Specialist turned Software Engineer</Title>
      <Statement>this is a long an thoughtful message</Statement>
    </Section>
  );
}
