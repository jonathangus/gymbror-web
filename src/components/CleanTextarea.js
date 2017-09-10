import React from 'react'
import styled from 'styled-components'
import colors from '../config/colors'

const CleanTextarea = styled.textarea`
	padding: 10px 14px;
	color: white;
	background: transparent;
	border: none;
	border-radius: 2px;
	font-size: 16px;
	border: none;
	border-bottom: 1px solid ${colors.light};
	width: 100%;
	transition: all 0.3s ease;
	
	&:focus {
	  outline: none;
	  border-color: white;
	}
`

export default props => <CleanTextarea {...props} onChange={e => props.onChange(e.target.value)} />
