import React from 'react';
import { StyleSheet, } from 'react-native';
import {
  Container, Button, Text, Form, Item, Label, Input, Card, Content, CardItem,
} from 'native-base'

export default class RequestPassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
    }
  }

  requestPassword = () => {
    alert("パスワードを再発行します。")
  }

  render() {
    return (
      <Container style={styles.container}>
        <Card>
          <CardItem>
            <Content style={styles.content}>
              <Label style={styles.title}>Request Password</Label>
              <Form>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input
                    autoCorrect={true}
                    autoCapitalize='none'
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>
                <Content
                  style={styles.buttonContent}
                >
                  <Button
                    style={styles.button}
                    full
                    danger
                    onPress={() => { this.requestPassword() }}
                  >
                    <Text style={{ color: 'white' }}>Request Password</Text>
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