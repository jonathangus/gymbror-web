import React from 'react';
import { Link } from 'react-router'
import styled from 'styled-components'
import { SButton } from './Button'

const Button = SButton.extend`
  padding:0;
  
  a {
    padding: 8px 14px;
    display: block;
    color: inherit;
    text-decoration: none;
  }
`

export default ({path, text}) => <Button data-text={text}>
  <Link to={path}><span>{text}</span></Link>
</Button>