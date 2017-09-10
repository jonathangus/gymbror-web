import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../config/colors'

const buttonStyles = {
  background: {
    primary: 'transparent',
    action: '#33d4e3'
  }
}

export const SButton = styled.button`
    padding: 8px 14px;
    position: relative;
    color: white;
    background: ${props => buttonStyles.background[props.modifier]};
    border: none;
    cursor: pointer;
    font-size: 16px;
    border: 3px solid #33d4e3;
    border-radius: 4px;
    transition: border-color 0.3s ease;
    
   /* span {
        transition: transform 0.3s, opacity 0.3s;
        display: block;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }
    
    &:hover {
      // border-color: ${colors.light};
      
      span {
          opacity: 0;
          transform: translate3d(0, -25%, 0);
        }
      
      &:after {
          opacity: 1;
          transform: translate3d(0, 0, 0);
      }
    }
    
    &:after {
        content: attr(data-text);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      padding: 8px 14px;
      color: ${colors.light};
      transform: translate3d(0, 25%, 0);
      transition: transform 0.3s, opacity 0.3s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }*/
`

const Button = ({ text, modifier, type, onClick }) =>
  <SButton onClick={onClick} data-text={text} modifier={modifier} type={type}>
    <span>{text}</span>
  </SButton>

Button.propTypes = {
  modifier: PropTypes.oneOf(['primary', 'action']),
  type: PropTypes.string,
  text: PropTypes.string.isRequired
}

Button.defaultProps = {
  modifier: 'primary',
  type: 'button',
  onClick : () => {}
}

export default Button
