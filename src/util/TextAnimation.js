import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class TextAnimation extends React.Component {
  constructor(props) {
    super(props);

    const textArr = props.content.trim().split(' ');
    this.textArr = textArr;
  }
  render() {
    return (
      <View style={this.props.customStyle}>
        {this.textArr.map((word, index) => {
          return (
            <Text key={`${word}-${index}`} style={this.props.customTextStyle}>
              {word}
            </Text>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
