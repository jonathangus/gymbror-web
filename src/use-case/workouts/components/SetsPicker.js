import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CleanInput from '../../../components/CleanInput'

const Row = styled.div`
  display: flex;
  align-items: center;
  
  figure {
    margin: 0 15px;
  }
`

const Top = styled.div`
  padding: 8px;
  border-bottom: 1px solid #FFF;
  display: flex;
  
  figure {
    margin-left: auto;
    cursor: pointer;
  }
`

const AddRow = styled.div`
  cursor: pointer;
  transition: opacity 0.3s ease;
   margin: 20px 0;
  text-align: center;
  
  svg {
    margin-left: 5px;
  }
  
  &:hover {
    opacity: 0.8;
  }
`

export default class SetsPicker extends React.Component {

  static propTypes = {
    updateSession : PropTypes.func.isRequired,
    session : PropTypes.object.isRequired,
    removeExercise : PropTypes.func.isRequired
  }

  addRow = () => {
    const {  sets } = this.props.session;

    this.props.updateSession({
      ...this.props.session,
      sets : [...sets, sets[sets.length - 1]]
    })
  }

  getRow = (set, i) => {
    const { type, sets } = this.props.session;
    const updateRow = (prop, value) => {
      let setsMutate = [...sets];

      const updatedSet = {
        ...set,
        [prop] : value
      }

      setsMutate[i] = updatedSet;

      this.props.updateSession({
        ...this.props.session,
        sets : setsMutate
      })
    }

    return (
      <Row key={i}>
        {
          type === 'weight' && <CleanInput validation="number" onChange={value => updateRow('reps', value)} value={set.reps} />
        }
        {
          type === 'weight' && <figure>{times}</figure>
        }
        <CleanInput validation="number"  onChange={value => updateRow('value', value)}  value={set.value}/>
      </Row>
    )
  }

  render () {
    const { session, removeExercise } = this.props;

    return (
      <div>
        <Top><h3>{session.name}</h3><figure onClick={() => removeExercise(session)}>{times}</figure></Top>
        {session.sets.map(this.getRow)}
        <AddRow onClick={this.addRow}>Add row {plus}</AddRow>
      </div>
    )
  }
}

const plus = (
  <svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <rect id="Rectangle" fill="#FFFFFF" x="4" y="0" width="2" height="10"></rect>
    <rect id="Rectangle" fill="#FFFFFF" x="0" y="4" width="10" height="2"></rect>
  </g>
  </svg>
)

const times = (

  <svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Artboard-1" transform="translate(-248.000000, -475.000000)" fill="#FFFFFF">
      <polygon id="Shape" points="248 476.333333 250.666667 479 248 481.666667 249.333333 483 252 480.333333 254.666667 483 256 481.666667 253.333333 479 256 476.333333 254.666667 475 252 477.666667 249.333333 475"></polygon>
    </g>
  </g>
  </svg>
)
