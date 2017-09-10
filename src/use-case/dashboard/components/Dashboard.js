/* @flow */
import React from 'react'
import styled, { keyframes } from 'styled-components'
import WorkoutsWithData from '../../workouts/containers/WorkoutsWithData'
import ExercisesWithData from '../../exercises/containers/ExercisesWithData'
import UserContainer from '../../user/containers/UserContainer';

const Container = styled.div`
  background: #0d0c18;
  color: #f6f6f7;
  min-height: 100vh;
  display: flex;
`

const Main = styled.div`
  background: #0d0c18;
  color: #f6f6f7;
  flex: 1;
`

const Wrapper = styled.div`
     margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    flex: 1;
    padding: 40px;
    align-content: flex-start;
`

const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: translateX(40px);
	}

	to {
		opacity: 1;
		transform: translateX(0px);
	}
`;

const Sidebar = styled.div`
  width: 350px;
  //opacity: 0;
  margin-left: 40px;
  //animation: ${fadeIn} 0.4s ease forwards;
  animation-delay: 0.8s;
`

const TopBar = styled.div`
   flex: 100%;
   margin-bottom: 40px;
   display: flex;
   justify-content: flex-end;
`

export default class Dashboard extends React.Component {
  render() {
    const { children, params = {} } = this.props
    const exerciseId = params.exerciseId && parseInt(params.exerciseId)

    return (
      <Container>
        <Wrapper>
          <TopBar><UserContainer /></TopBar>
          <Main>
            <WorkoutsWithData />
            <ExercisesWithData selectedExerciseId={exerciseId} />
          </Main>
          {children && <Sidebar>{children}</Sidebar>}
        </Wrapper>
      </Container>
    )
  }
}
