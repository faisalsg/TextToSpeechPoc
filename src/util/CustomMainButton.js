// This is a customizable button
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Colors } from './constants/Constants';

export default class CustomMainButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.customContainer]}
        onPress={() => this.props.onPress()}
      >
        <Text style={[styles.titleText, this.props.customText]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 365,
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    margin: 10,
  },
  titleText: {
    fontSize: 20,
    color: Colors.darkPurple,
  },
});
