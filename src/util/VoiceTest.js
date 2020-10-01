import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Texts } from '../util/constants/Strings';
import Voice from 'react-native-voice';
import { ImageConstants } from '../assets/ImageConstants';
import { TouchableOpacity } from 'react-native-gesture-handler';

let qusOne = Texts.qusOne;
let qusTwo = Texts.qusTwo;
let qusThree = Texts.qusThree;

class VoiceTest extends Component {
  state = {
    results: '',
  };

  constructor(props) {
    super(props);
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechRecognized = this.onSpeechRecognized;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
  }

  async componentDidMount() {
    this.startRecognizing();
  }

  async componentWillUnmount() {
    this.destroyRecognizer();
    Voice.destroy().then(Voice.removeAllListeners);
  }

  async startRecognizing() {
    this.setState({
      result: ' ',
    });

    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

  async destroyRecognizer() {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      results: ' ',
    });
  }

  onSpeechStart = (e) => {
    console.log('onSpeechStart', e);
  };

  onSpeechRecognized = (e) => {
    console.log('onSpeechRecognized', e);
  };

  onSpeechEnd = (e) => {
    console.log('onSpeechEnd', e);
  };

  onSpeechError = (e) => {
    console.log('onSpeechError', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechPartialResults = (e) => {
    console.log('onSpeechPartialResults: ', e);
    this.setState({
      partialResults: e.value,
    });
  };

  onSpeechVolumeChanged = (e) => {
    console.log('onSpeechVolumeChanged: ', e);
  };

  onSpeechResults = (e) => {
    console.log('onSpeechResults', e);
    const latestArray = e.value[e.value.length - 1];
    const indexOfTrigger = latestArray.lastIndexOf('hey studio');
    const question = latestArray.substring(
      indexOfTrigger + 10,
      latestArray.length
    );
    if (question.includes(qusOne)) {
      this.setState({ result: 'My name is Studio Graphene' });
    } else if (question.includes(qusTwo)) {
      this.setState({ result: 'I am from London United Kingdom' });
    } else if (question.includes(qusThree)) {
      this.setState({
        result:
          'We’re a digital studio that works with both start-up founders and innovation teams to bring new ideas to life.',
      });
    } else {
      this.setState({
        result: "Sorry couldn't get you, that was your question: " + question,
      });
    }
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.startRecognizing();
          }}
        >
          <Image style={styles.img} source={ImageConstants.micIcon} />
        </TouchableOpacity>
        <Text>{this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
  },
});

export default VoiceTest;
