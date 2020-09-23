import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Texts } from '../util/constants/Strings';
import { Colors } from '../util/constants/Constants';
import CustomMainButton from '../util/CustomMainButton';
import Voice from '@react-native-community/voice';
import Tts from 'react-native-tts';
Tts.setDefaultLanguage('en-US');
Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
Tts.setDefaultRate(0.7);
Tts.setDefaultPitch(1);

// Data that is associated with each dish
const Data = [
  {
    title: Texts.recepieOneTitle,
  },
  {
    title: Texts.recepieTwoTitle,
  },
  {
    title: Texts.recepieThreeTitle,
  },
];

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishSelected: '',
      results: '',
    };
    // Events invoked with constructor
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechRecognized = this.onSpeechRecognized;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
  }
  // As soon as the render ends Voice Reconizing function must start
  async componentDidMount() {
    this.startRecognizing();
  }

  async startRecognizing() {
    this.setState({
      results: ' ',
    });
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

  async stopRecognizing() {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  }

  async cancelRecognizing() {
    try {
      await Voice.cancel();
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
    console.log('onSpeechEnd'), e;
    this.destroyRecognizer();
    this.startRecognizing();
  };

  onSpeechError = (e) => {
    console.log('onSpeechError', e);
  };

  buttonPressed = (title) => {
    this.setState({
      dishSelected: title,
    });
  };

  onSpeechResults = (e) => {
    console.log('onSpeechResults', e);
    const latestArray = e.value[e.value.length - 1];
    // In the case we need to speak 'hey' particulary to give a command
    const indexOfTrigger = latestArray.lastIndexOf('hey');
    const title = latestArray
      .substring(indexOfTrigger + 3, latestArray.length)
      .toLowerCase();
    if (title.includes(Data[0].title.toLowerCase())) {
      this.setState({
        dishSelected: Data[0].title,
      });
    } else if (title.includes(Data[1].title.toLowerCase())) {
      this.setState({
        dishSelected: Data[1].title,
      });
    } else if (title.includes(Data[2].title.toLowerCase())) {
      this.setState({
        dishSelected: Data[2].title,
      });
    } else {
      this.setState({
        results: "Sorry couldn't get you, that was your question: " + title,
      });
    }
    // TODO: I had added the logic but that is crashing the App
    // Tts.speak(this.state.dishSelected);
  };

  render() {
    return (
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{Texts.clove}</Text>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.subHeadingText}>{Texts.selectDish}</Text>
          </View>
          <View>
            {Data.map((value) => {
              return (
                <CustomMainButton
                  title={value.title}
                  onPress={() => this.buttonPressed(value.title)}
                  customContainer={{
                    backgroundColor:
                      this.state.dishSelected === value.title
                        ? Colors.darkPurple
                        : Colors.white,
                  }}
                  customText={{
                    color:
                      this.state.dishSelected === value.title
                        ? Colors.white
                        : Colors.darkPurple,
                  }}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.lilac,
  },
  container: {
    flex: 1,
    padding: 40,
  },
  headingContainer: {
    marginTop: -50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightPurple,
    height: 250,
    width: '100%',
    borderRadius: 50,
  },
  headingText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: Colors.darkPurple,
  },
  subHeadingText: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.darkPurple,
    marginBottom: 20,
    marginLeft: 10,
  },
});
