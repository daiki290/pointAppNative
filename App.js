import React from 'react';
import {
  Container,
} from 'native-base'
import Login from './component/auth/Login';
import CreateAccount from './component/auth/CreateAccount';
import Home from './component/home/Home';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

class App extends React.Component {

  // アカウント作成画面に移動
  screenChangeToCreateAnAccount = () => {
    this.props.navigation.navigate("CreateAccount")
  }

  // ホーム画面に移動
  screenChangeToHome = () => {
    this.props.navigation.navigate("Home")
  }

  render() {
    return (
      <Container>
        <Login
          screenChangeToCreateAnAccount={this.screenChangeToCreateAnAccount.bind(this)}
          screenChangeToHome={this.screenChangeToHome.bind(this)}
        />
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
  Home: {
    screen: Home,
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

