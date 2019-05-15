import React from 'react';
import { StyleSheet, } from 'react-native';
import {
  Container, Text, Icon,
} from 'native-base'
import DisplayQrCode from './DisplayQrCode';
import PointConfirmation from './PointConfirmation';
import DetailsStore from './DetailsStore';
import {
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

class Home extends React.Component {

  render() {
    return (
      <Container style={styles.container}>
        <Text>Home.js</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f3f3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

const BottomTabNavigatorConfig = {
  initialRouteName: 'DisplayQrCode',
  tabBarOptions: { showLabel: false },
  showIcon: true,
};

const TabNavigator = createAppContainer(createBottomTabNavigator(
  {
    DisplayQrCode: {
      screen: DisplayQrCode,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name='md-qr-scanner' color={tintColor} size={24} />
        )
      })
    },
    PointConfirmation: {
      screen: PointConfirmation,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name='thumbs-up' color={tintColor} size={24} />
        )
      })
    },
    DetailsStore: {
      screen: DetailsStore,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name='home' color={tintColor} size={24} />
        )
      })
    },
  },
  BottomTabNavigatorConfig
));

export default TabNavigator;