import React, {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity,ScrollView } from 'react-native';

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

  funFunFunction = () => {
    const listOfUserInputs = this.state.list.map( (e,i) =>(
      <TouchableOpacity onPress={ ()=> this.handleDelete(i) }>
        <View style={styles.scroll}>
          <Text id={i}  key={i * 10}> {e} </Text>
        </View>
      </TouchableOpacity>
    ));
    return <ScrollView>{listOfUserInputs}</ScrollView>
  }

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.blahh} >
          <TextInput
            style={styles.inputText}
            onChangeText={this.handleChange}
            value={this.state.text}
          />
          <Button onPress={this.handlePress} title="Add"/>
        </View>
        {this.funFunFunction()}
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
  scroll:{
    padding:10,
    fontSize:15,
  },
  blahh:{
    marginTop:80,
  },
});
