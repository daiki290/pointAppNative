import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.word}>pointApp</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19174f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  word: {
    color: 'white',
    fontSize: 50,
  }
});
