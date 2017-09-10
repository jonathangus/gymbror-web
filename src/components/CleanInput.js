import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors'

const Input = styled.input`
	padding: 10px 14px;
	color: white;
	background: transparent;
	border: none;
	border-radius: 2px;
	border: none;
	border-bottom: 1px solid ${colors.light};
	width: 100%;
	transition: all 0.3s ease;
	
	&:focus {
	  outline: none;
	  border-color: white;
	}
`;

const numberValidation = value => !isNaN(value) && parseInt(value);

export default (props) => {
  let onChange = (e) => props.onChange(e.target.value);
  if(props.validation === 'number') {
    onChange = e => {
      const value = numberValidation(e.target.value);
      value && props.onChange(value)
    }
  }

  return <Input {...props} onChange={onChange} />
}
