import React from 'react';
import { StyleSheet, } from 'react-native';
import {
  Container, Button, Text, Form, Item, Label, Input, Card, Content, CardItem,
} from 'native-base'

export default class CreateAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phoneNumber: '',
      email: '',
      password: '',
    }
  }

  createAnAccount = () => {
    alert("アカウント情報を登録しました！\nname:" + this.state.name + "\nphoneNumber:"
      + this.state.phoneNumber + "\nemail:" + this.state.email + "\npassword:" + this.state.password)
  }

  render() {
    return (
      <Container style={styles.container}>
        <Card>
          <CardItem>
            <Content style={styles.content}>
              <Label style={styles.title}>Create an Account</Label>
              <Form>
                <Item floatingLabel>
                  <Label>Name</Label>
                  <Input
                    autoCorrect={true}
                    autoCapitalize='none'
                    onChangeText={name => this.setState({ name })}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>PhoneNumber</Label>
                  <Input
                    autoCorrect={true}
                    autoCapitalize='none'
                    onChangeText={phoneNumber => this.setState({ phoneNumber })}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input
                    autoCorrect={true}
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
                    onPress={() => { this.createAnAccount(this.state.email, this.state.password) }}
                  >
                    <Text style={{ color: 'white' }}>Create an Account</Text>
                  </Button>
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