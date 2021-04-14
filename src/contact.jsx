import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';

const Window = styled.div`
  text-align: -webkit-center;
  background-color: rgba(188, 200, 200, 0.9);
  backdrop-filter: blur(5px);
  padding: 10px;
  border-radius: 1em;
  height: 90vh;
`;
const Input = styled.input`
    width: -webkit-fill-available;
    height: 2em;
    background-color: rgba(255,255,255,.9);
    border: none;
    border-radius: 5px;
`;
const TextArea = styled.textarea`
    width: -webkit-fill-available;
    height: 30vh;
    background-color: rgba(255,255,255,.9);
    border: none;
    border-radius: 5px;
`;

const Button = styled.button`
  font-size: xx-large;
  width: -webkit-fill-available;
  margin: 2rem;
`;
const Exit = styled.button`
  position: absolute;
  font-size: 25px;
  padding: 1px 8px;
  top: 1px;
  right: 1px;
  background-color: transparent;
  border-width: 0.5px;
  border-radius: 2.5em;
  &:focus {
    outline: none;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false)

  function closeModal(){
    ReactDOM.render(<div></div>, document.getElementById('modal'));
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("https://3xtu3t6z2c.execute-api.us-west-1.amazonaws.com/Live",
      { "name": name, "phone": phone, "email": email, "message": message }
    )
    .then((response) => {
      setSent(true);
      setTimeout(()=>closeModal(),1000);
    })
    .catch((err) => console.log(err))
  }
  return (
    <Window>
      { sent ? <h1>Thank You</h1> :
      <>
        <Exit onClick={closeModal} >X</Exit>
        <h1>Contact Me</h1>
        <form
          onSubmit={(e)=>{handleSubmit(e)}}
        >
          <div>
            <fieldset>
              <legend>Full Name:</legend>
              <label for="name">
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  onChange={(e)=>{setName(e.target.value)}}
                />
              </label>
            </fieldset>
          </div>
          <div>
            <label for="phone">
              <fieldset>
                <legend>Phone:</legend>
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={(e)=>{setPhone(e.target.value)}}
                />
              </fieldset>
            </label>
          </div>
          <div>
            <fieldset>
              <legend>Email:</legend>
              <label for="email">
                <Input
                  required
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </label>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <legend>Message:</legend>
              <label for="message">
                <TextArea
                  id="message"
                  name="message"
                  required
                  onChange={(e)=>{setMessage(e.target.value)}}
                />
              </label>
            </fieldset>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </> }
    </Window>
  )
}

export default ContactForm