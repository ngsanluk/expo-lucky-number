import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    luckyNumber: 0
  }

  play = () => {
    var luckyNumber = Math.floor((Math.random() * 100) + 1);
    this.setState({
      luckyNumber: luckyNumber
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: "#333333",
            fontSize: 20,
            paddingTop: 100,
            paddingBottom: 20
          }}>
          Lucky Number (expo)
        </Text>
        <Text
          style={{
            color: "#CC0000",
            fontSize: 200,
            paddingTop: 100,
            paddingBottom: 100
          }}>
          {this.state.luckyNumber==0 ? '?' : this.state.luckyNumber}
        </Text>
        <Button
          title="PLAY"
          onPress={this.play}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
