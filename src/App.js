import React, { Component } from 'react';
import styled, { createGlobalStyle,css , keyframes} from "styled-components"
import "./App.css"

createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`


class App extends Component {
  render() {
    return (
    <Container>
        <Button success>Hello</Button>
        <Button danger rotationTime={5}>Hello</Button>
        <Anchor href="https://google.com">Go to google</Anchor>
    </Container>
    )
  }
}

const Container = styled.div`
  height:100vh;
  width:100%;
  background-color:#bdc3c7;
`

const Button = styled.button`
border-radius:50px;
padding:5px;
min-width: 120px;
color : white;
font-weight: 600;
cursor: pointer;
  &:active;
  &:focus {
    outline:none;
  }
  background-color: ${props => props.danger ? "#2ecc71" : "#e743ce"}
  ${props => {
    if(props.danger){
      return css`animation: ${rotation} ${props.rotationTime}s linear infinite`;
    }
  }}
  `
const Anchor = styled(Button.withComponent("a"))`
  text-decoration:none;
`;

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform:rotate(360deg);
  }
`

export default App;
