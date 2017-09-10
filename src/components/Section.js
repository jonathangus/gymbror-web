import React from 'react';
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: translateY(20px);
	}

	to {
		opacity: 1;
		transform: translateY(0px);
	}
`;

const Paper = styled.div`
  background: #1b1b2d;
  border-radius: 4px;
  margin-bottom: 40px;
  opacity: 0;
  padding: ${props => props.padding && '25px'};
  animation: ${fadeIn} 0.4s ease forwards;
  
  ${Array(15).fill(0).map((_, i) => `
    &:nth-child(${i}) {
      animation-delay: ${(i - 1) * 0.3}s;
    }
  `)}
`

export default Paper;
