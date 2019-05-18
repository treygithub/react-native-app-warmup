import React, {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: 'Useless Placeholder',
      list:[] 
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
      list: prevState.list.concat(prevState.text)
      };
    });
  };

  handleDelete=(id)=>{
    this.setState( (prevState)=>{
      return { list : prevState.list.filter((e,i) => {
        return i !== id
     }) }
    })
  }

  render() {
    const listOfUserInputs = this.state.list.map( (e,i) =>(
      <TouchableOpacity onPress={ ()=> this.handleDelete(i) }>
        <View>
          <Text id={i}  key={i * 10}> {e} </Text>
        </View>
      </TouchableOpacity>
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
        {listOfUserInputs}
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
