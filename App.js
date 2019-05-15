import React from 'react';
import {
  Container,
} from 'native-base'
import Login from './component/auth/Login';
import CreateAccount from './component/auth/CreateAccount';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';


class App extends React.Component {

  screenChangeToCreateAnAccount = () => {
    this.props.navigation.navigate("CreateAccount")
  }

  render() {
    return (
      <Container>
        <Login screenChangeToCreateAnAccount={this.screenChangeToCreateAnAccount.bind(this)} />
      </Container>
    );
  }
}

const AppNavigator = createStackNavigator({
  App: {
    screen: App,
  },
  CreateAccount: {
    screen: CreateAccount,
  },
},
  {
    initialRouteName: 'App',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);

