import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotateOne = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`

const rotateTwo = keyframes`
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
`
const rotateThree = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
`

const Container = styled.div`
  
  position: relative;
  padding: ${props => props.includePadding && '30px 0'};
   
   .wrapp {
      margin: 0 auto;
      position: relative;
      height: 64px;
      width: 64px;
   }
  .inner {
    position: absolute;
    box-sizing: border-box;
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  
  .innerOne {
    left: 0%;
    top: 0%;
    border-bottom: 3px solid #EFEFFA;
    animation: ${rotateOne} 1s linear infinite;
  }
  
  .innerTwo {
    right: 0%;
    top: 0%;
    border-right: 3px solid #EFEFFA;
    animation: ${rotateTwo} 1s linear infinite;
  }
  
  .innerThree {
    right: 0%;
    bottom: 0%;
    border-top: 3px solid #EFEFFA;
    animation: ${rotateThree} 1s linear infinite;
  }
`

const Loader = ({ includePadding = false }) =>
  <Container includePadding>
    <div className="wrapp">
      <div className="inner innerOne" />
      <div className="inner innerTwo" />
      <div className="inner innerThree" />
    </div>
  </Container>

export default Loader
