import React from 'react';
import {
  Container,
} from 'native-base'
import Login from './component/auth/Login';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Login />
      </Container>
    );
  }
}

