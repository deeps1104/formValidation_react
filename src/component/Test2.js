import styled, { keyframes } from "styled-components";
import React, { Component } from 'react'
let slideIn;
let slideOut;
let ContainerBox;
// let justAttached;

export default class Test2 extends Component {

   slideIn = keyframes`
  0%{
    transform: translateX(200px) scale(0.5);

  }
  100%{
    transform: translateX(0) scale(1);
  }
  
`;

 slideOut = keyframes`
  0%{
    transform: translateX(0) scale(1);
  }
  100%{
    transform: translateX(200px) scale(0.5);
  }
  
`;

 ContainerBox = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  background-color: green;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  color: white;
  animation: ${slideIn} 1s ease;
  animation: 1s ${(props) => (props.justAttached ? slideIn : slideOut)} ease;
`;
  constructor({justAttached}){
    super({justAttached})
  }

  render() 
  {
    return (
      <ContainerBox justAttached={this.justAttached}>This is alert</ContainerBox>
    );
  }
  
}
