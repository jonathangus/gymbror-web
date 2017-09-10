/* @flow */
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import styled from 'styled-components'

const Form = styled.form`
    text-align: center;
    
    > span {
      cursor: pointer;
      color: #212121;
      font-size: 14px;
      display: block;
      margin-bottom: 10px;
      
      &:hover {
        text-decoration: underline;
      }
    }
`

export default class LoginForm extends React.Component {
  static propTypes: {
    onLogin: PropTypes.func.isRequired
  }

  state = {
    input: null
  }

  onSubmit = e => {
    e.preventDefault()

    this.props.onLogin(this.state.input)
  }

  generate = () => {
    function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    this.setState({input: uuidv4()})
  }

  onChange = e => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    const valid = this.state.input && this.state.input.length > 3

    return (
      <Form onSubmit={this.onSubmit}>
        <Input placeholder="Your ID" value={this.state.input} onChange={this.onChange} type="text" />
        <span onClick={this.generate}>Generate uuid</span>
        {valid && <Button modifier="action" type="submit" text="Submit" />}
      </Form>
    )
  }
}
