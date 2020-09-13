import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hello my name is faisal',
    };
  }

  render() {
    return (
      <>
        <View style={styles.sectionContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.warn('hello');
            }}>
            <Text style={styles.buttonText}>Click here to speak</Text>
          </TouchableOpacity>
          <Text style={styles.buttonText}>
            Speech to text will be display here
          </Text>
          <Text style={styles.text}>{this.state.text}</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
  text: {
    fontSize: 14,
    color: '#000',
  },
});
