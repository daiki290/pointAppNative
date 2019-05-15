import React from 'react';
import { StyleSheet, } from 'react-native';
import {
  Container, Text,
} from 'native-base'

class DisplayQrCode extends React.Component {

  render() {
    return (
      <Container style={styles.container}>
        <Text>DisplayQrCode.js</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default DisplayQrCode;


