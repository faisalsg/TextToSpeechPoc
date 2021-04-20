// This is home screen of the app from where we can basically select between the dishes

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import { Texts } from '../util/constants/Strings';
import { Colors, NavigationConstants } from '../util/constants/Constants';
import CustomMainButton from '../util/CustomMainButton';
import { Data } from './MockData';
import Voice from '@react-native-community/voice';
import { ImageConstants } from '../assets/ImageConstants';
import Tts from 'react-native-tts';

const {GoogleSpeechManager} = NativeModules;
const myModuleEvt = new NativeEventEmitter(NativeModules.GoogleSpeechManager)
const speechHandler = NativeModules.GoogleSpeechManager;

// const { DEFAULT_EVENT_NAME } = GoogleSpeechManager.getConstants();

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishSelected: '',
      // TTS : Text speech settings
      speechRate: 0.42,
      speechPitch: 1,
      text: ' ',
      voices: [],
      ttsStatus: 'initializing',
      selectedVoice: null,
    };
  }


  buttonPressed = async (title) => {
    await this.readText(title);
    this.setState({ dishSelected: title });
  };

  moveToRecipeScreen() {
    let title = this.state.dishSelected;
    this.destroyRecognizer();
    this.props.navigation.navigate(NavigationConstants.RecipeScreen, {
      value: title,
    });
  }

  async componentDidMount() {
    // Event Listeners for speech-to-text
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechRecognized = this.onSpeechRecognized;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;

    this.startRecognizing();

    // Event Listeners for speech-to-text
    Tts.addEventListener('tts-start', (event) => {
      this.destroyRecognizer();
      Voice.destroy().then(Voice.removeAllListeners);
    });
    Tts.addEventListener('tts-finish', (event) => this.moveToRecipeScreen());
    Tts.addEventListener('tts-cancel', (event) => console.log('cancel', event));
    Tts.setDefaultRate(this.state.speechRate);
    Tts.setDefaultPitch(this.state.speechPitch);
    Tts.getInitStatus().then(this.initTts);
  }

  async componentWillUnmount() {
    this.destroyRecognizer();
    Voice.destroy().then(Voice.removeAllListeners);
  }

  async startRecognizing() {
    GoogleSpeechManager.startRecording();
    // console.warn("default response is", DEFAULT_EVENT_NAME);

    // Voice.startSpeech(locale, callback);
   
    // this.setState({
    //   result: ' ',
    // });

    // try {
    //   await Voice.start('en_US');
    // } catch (e) {
    //   console.error(e);
    // }
  }

  async getAudioResponse() {
    console.warn("see if called");
    // GoogleSpeechManager.sendAudioResponse('', response => {
    //   console.warn("Created a new response", response);
    // });  
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
    console.warn('onSpeechStart', e);
  };

  onSpeechRecognized = (e) => {
    console.warn('onSpeechRecognized', e);
  };

  onSpeechEnd = (e) => {
    console.warn('onSpeechEnd', e);
    this.startRecognizing();
    GoogleSpeechManager.stopRecording();
  };

  onSpeechError = (e) => {
    console.warn('onSpeechError', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechPartialResults = (e) => {
    console.warn('onSpeechPartialResults: ', e);
    this.setState({
      partialResults: e.value,
    });
  };

  onSpeechVolumeChanged = (e) => {
    // console.log('onSpeechVolumeChanged: ', e);
  };

  onSpeechResults = (e) => {
    console.warn('onSpeechResults', e);
    this.setState({
      results: e.value,
    });
    const latestArray = e.value[e.value.length - 1];
    const indexOfTrigger =
      latestArray.lastIndexOf('hello clove') ||
      latestArray.lastIndexOf('Hello clove') ||
      latestArray.includes('hello close') ||
      latestArray.includes('Hello close') ||
      latestArray.includes('hello glove') ||
      latestArray.includes('Hello glove');
    if (
      latestArray.includes('hello clove') ||
      latestArray.includes('Hello clove') ||
      latestArray.includes('hello close') ||
      latestArray.includes('Hello close') ||
      latestArray.includes('hello glove') ||
      latestArray.includes('Hello glove')
    ) {
      const question = latestArray
        .substring(indexOfTrigger + 11, latestArray.length)
        .toLowerCase();
      if (question.includes(Data[0].title.toLowerCase())) {
        this.buttonPressed(Data[0].title);
      } else if (question.includes(Data[1].title.toLowerCase())) {
        this.buttonPressed(Data[1].title);
      } else if (question.includes(Data[2].title.toLowerCase())) {
        this.buttonPressed(Data[2].title);
      } else {
        console.log('Not recognized');
      }
    }
  };

  initTts = async () => {
    const voices = await Tts.voices();
    const availableVoices = voices
      .filter((v) => !v.networkConnectionRequired && !v.notInstalled)
      .map((v) => {
        return { id: v.id, name: v.name, language: v.language };
      });
    // Here in console there are list of voices available for android and ios
    // But here the voice is set as per iOS
    // Selection is based as per language en-US
    // TODO: In future needs to get set for android also.
    // console.log(voices);

    let selectedVoice = null;

    // voices[9] - {"id": "com.apple.ttsbundle.Samantha-compact", "language": "en-US", "name": "Samantha", "quality": 300}
    if (voices && voices.length > 0) {
      selectedVoice = voices[9].id;
      try {
        await Tts.setDefaultLanguage(voices[9].language);
      } catch (err) {
        console.log(`setDefaultLanguage error `, err);
      }
      await Tts.setDefaultVoice(voices[9].id);
      this.setState({
        voices: availableVoices,
        selectedVoice,
        ttsStatus: 'initialized',
      });
    } else {
      this.setState({ ttsStatus: 'initialized' });
    }
  };
  readText = async (text) => {
    Tts.stop();
    Tts.speak(text);
  };

  render() {
    return (
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{Texts.clove}</Text>
          <Text
            style={
              {
                // ...styles.headingText,
                // ...styles.subHeadingText,
              }
            }
          >
            {/* {this.props.route.params.value} */}
            {this.state.results}
          </Text>
          <View style={styles.micContainer}>
            <TouchableOpacity
              onPress={() => {
                this.startRecognizing();
              }}
            >
              <Image style={styles.img} source={ImageConstants.micIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.subHeadingText}>{Texts.selectDish}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                this.getAudioResponse();
              }}
            >
            </TouchableOpacity>
          </View>
          <View>
            {Data.map((value, index) => {
              return (
                <CustomMainButton
                  key={index}
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
  buttonContainer: {
    width: 40,
    height: 40,
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: Colors.red,
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
  micContainer: {
    alignContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
  },
});
