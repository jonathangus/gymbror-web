/* @flow */
import React from 'react';
import bg from './bg.jpg';
import LoginForm from './LoginForm';
import colors from '../../../config/colors'
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
const Container = styled.div`
    height: 100vh;
    background: url(${bg})};
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    background: ${colors.white};
    padding: 50px 20px;
    border-radius: 3px;
    min-width: 450px;
    animation: ${fadeIn} 0.4s ease forwards;
    box-shadow: 1px 4px 6px rgba(12, 12, 12, 0.39);
`

export default class Login extends React.Component {
    state = {
        tab : 'login'
    };

    render() {
        const { onLogin } = this.props;
        const { tab } = this.state;

        return <Container>
            <Content>
                <LoginForm onLogin={onLogin}/>
            </Content>
        </Container>
    }
}
