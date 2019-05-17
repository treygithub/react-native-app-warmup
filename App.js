import React, {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: 'Useless Placeholder',
      hshs:[] 
    };
  }
  handleChange = (value) => {
    this.setState({
      text: value,
    })
  }

  handlePress = () => {
    this.setState(prevState => {
      return{
      hshs: prevState.hshs.concat(prevState.text)
      };
    });
  };
  render() {
    const ggg = this.state.hshs.map( e =>(
      <Text>{e}</Text>
    ));
    return (
      <View style={styles.container}>
      <View >
      <TextInput
        style={styles.inputText}
        onChangeText={this.handleChange}
        value={this.state.text}
      />
      <Button onPress={this.handlePress} title="Add"/>
      </View>
      {ggg}
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
  inputText:{
    height: 40, 
    borderColor: 'red', 
    borderWidth: 1,
  },
});
