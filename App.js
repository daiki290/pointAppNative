import React from 'react';
import { StyleSheet, } from 'react-native';
import {
  Container, Button, Text, Form, Item, Label, Input, Card, Content, CardItem, ListItem,
} from 'native-base'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  loginUser = (email, password) => {
    alert("ログインします。\n " + email + "\n" + password)
  }

  createAccount = () => {
    alert("Accountを作成します。")
  }

  forgotPassword = () => {
    alert("パスワードを再発行します。")
  }


  render() {
    return (
      <Container style={styles.container}>

        <Card>
          <CardItem>

            <Content style={styles.content}>


              <Label style={styles.title}>Sign In</Label>


              <Form>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Password</Label>
                  <Input
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={password => this.setState({ password })}
                  />
                </Item>
                <Content
                  style={styles.buttonContent}
                >
                  <Button
                    style={styles.button}
                    full
                    danger
                    onPress={() => { this.loginUser(this.state.email, this.state.password) }}
                  >
                    <Text style={{ color: 'white' }}>LOGIN</Text>
                  </Button>

                  <Button
                    style={styles.button}
                    full
                    bordered
                    danger
                    onPress={() => { this.loginUser(this.state.email, this.state.password) }}
                  >
                    <Text style={{ color: 'red' }}>Google Login</Text>
                  </Button>

                  <CardItem
                    style={styles.button}
                    button
                    onPress={() => this.createAccount()}>
                    <Text>
                      Create an Account
                    </Text>
                  </CardItem>
                  <CardItem
                    button
                    onPress={() => this.forgotPassword()}>
                    <Text>
                      Forgot password?
                    </Text>
                  </CardItem>

                </Content>

              </Form>
            </Content>

          </CardItem>
        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f3f3',
    justifyContent: 'center',
    padding: 10,
  },
  content: {
    flex: 5,
    backgroundColor: '#fff',
  },
  title: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
  buttonContent: {
    paddingTop: 30,
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
  }
});
