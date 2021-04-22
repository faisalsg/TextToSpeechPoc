// This is the recipe screen from which we can control the steps, timer and
// other cooking related commands
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import { RecipeOne, Texts } from '../util/constants/Strings';
import { Colors, Enums } from '../util/constants/Constants';
import CustomMainButton from '../util/CustomMainButton';
import { ImageConstants } from '../assets/ImageConstants';
import CountDown from 'react-native-countdown-component';
import { RecipeData, Data } from './MockData';
import Tts from 'react-native-tts';

const { GoogleSpeechManager } = NativeModules;
const eventEmitter = new NativeEventEmitter(GoogleSpeechManager);

const onSessionConnect = (event) => {
  console.log(event);
};

export default class RecipeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: ' ',
      dishSelected: '',
      step: 1,
      countDownStart: 3,
      timerStart: false,
      totalDuration: 900,
      timerReset: '0',
      currentIngStep: 0,
      currentRecStep: 0,
      // TTS : Text speech settings
      speechRate: 0.42,
      speechPitch: 1,
      text: ' ',
      voices: [],
      ttsStatus: 'initializing',
      selectedVoice: null,
      remTimeCounter: 0,
    };
  }

  async componentDidMount() {
    this.startRecognizing();

    const subscription = eventEmitter.addListener(
      'onSpeechPartialResults',
      onSessionConnect
    );

    // Event Listeners for speech-to-text
    Tts.addEventListener('tts-start', (event) => {
      console.log(event);
    });
    Tts.addEventListener('tts-finish', (event) => {
      this.nextStep();
    });
    Tts.addEventListener('tts-cancel', (event) => console.log('cancel', event));
    Tts.setDefaultRate(this.state.speechRate);
    Tts.setDefaultPitch(this.state.speechPitch);
    Tts.getInitStatus().then(this.initTts);
  }

  async componentWillUnmount() {
    subscription.remove();
  }

  async startRecognizing() {
    GoogleSpeechManager.startRecording();
  }

  async getAudioResponse() {
    GoogleSpeechManager.sendAudioResponse('', (response) => {
      console.warn('Created a new response', response);
    });
  }

  onSpeechResults = (e) => {
    console.log('onSpeechResults', e);
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
      // Action to play/pause the timer.
      if (
        question.includes(Texts.play) ||
        question.includes(Texts.pause) ||
        question.includes(Texts.stop)
      ) {
        this.toggleTimer();

        // Action to reset timer
      } else if (question.includes(Texts.reset)) {
        this.resetTimer();

        // Action to next step
      } else if (question.includes(Texts.next)) {
        Tts.stop();
        this.setState({
          text: ' ',
        });
        this.nextStep();

        // Action to previous step
      } else if (question.includes(Texts.previous)) {
        Tts.stop();
        this.setState({
          text: ' ',
        });
        this.previousStep();
        // Move to home screen
      } else if (
        question.includes(Texts.mainMenu) ||
        question.includes(Texts.homeScreen)
      ) {
        this.props.navigation.goBack();

        // To know what should be the temperature of the oven
      } else if (question.includes(Texts.ovenTemp)) {
        this.readText(RecipeOne.temp);

        // To set the timer according the user
        // TODO: this part is not working right now
        // } else if (
        //   question.includes(Texts.changeTimer) ||
        //   question.includes(Texts.setTimer)
        // ) {
        //   let num = parseInt(question.replace(/[^0-9]/g, ''));
        //   this.updateTimer(num);
        //   this.readText(`Timer is set to ${num}`);

        // To answer quantity related requirements
      } else if (question.includes(Texts.quantity)) {
        if (question.includes(Texts.milk)) {
          this.readText(RecipeData.ingred[0].step);
        } else if (question.includes(Texts.honey)) {
          this.readText(RecipeData.ingred[1].step);
        } else if (question.includes(Texts.unsaltedButter)) {
          this.readText(RecipeData.ingred[2].step);
        } else if (question.includes(Texts.flour)) {
          this.readText(RecipeData.ingred[3].step);
        } else if (question.includes(Texts.sugar)) {
          this.readText(RecipeData.ingred[4].step);
        } else if (question.includes(Texts.orange)) {
          this.readText(RecipeData.ingred[5].step);
        } else if (question.includes(Texts.clementine)) {
          this.readText(RecipeData.ingred[6].step);
        } else if (question.includes(Texts.cinnamon)) {
          this.readText(RecipeData.ingred[7].step);
        } else if (question.includes(Texts.nutmeg)) {
          this.readText(RecipeData.ingred[8].step);
        } else if (question.includes(Texts.dates)) {
          this.readText(RecipeData.ingred[9].step);
        } else if (question.includes(Texts.macadamiaNuts)) {
          this.readText(RecipeData.ingred[10].step);
        } else if (question.includes(Texts.eggs)) {
          this.readText(RecipeData.ingred[11].step);
        } else if (question.includes(Texts.topping)) {
          this.readText(RecipeData.ingred[12].step);
        } else if (
          question.includes(Texts.demerara) ||
          question.includes(Texts.sugar)
        ) {
          this.readText(RecipeData.ingred[13].step);
          //
        } else {
          // do nothing
        }
        // To check how much time will be left
      } else if (
        question.includes(Texts.timeLeft) ||
        question.includes(Texts.timeRemaining)
      ) {
        let remTime = this.state.totalDuration - this.state.remTimeCounter;
        let result = this.secondsToHms(remTime);
        this.readText(`${result} is left`);
        // default action
      } else {
        console.log('Not recognized');
      }
    }
  };

  updateTimer = (num) => {
    this.setState({
      totalDuration: num,
    });
  };

  toggleTimer = () => {
    this.setState({
      timerStart: !this.state.timerStart,
      // timerReset: false,
    });
  };

  resetTimer = () => {
    this.setState({
      timerReset: (this.state.timerReset + 1).toString(),
      timerStart: true,
    });
  };
  secondsToHms = (seconds) => {
    if (!seconds) return '';

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}hours ${min}minutes ${sec}seconds`;
    } else if (min == 0) {
      return `${sec}seconds`;
    } else {
      return `${min}minutes ${sec}seconds`;
    }
  };

  previousStep = () => {
    Tts.stop();
    // if at step 0 do nothing
    if (this.state.step === Enums.one) {
      null;
    } else if (this.state.step === Enums.two) {
      this.state.currentIngStep === 0
        ? this.setState({
            step: Enums.one,
          })
        : this.setState({
            currentIngStep: this.state.currentIngStep - 1,
          });
      this.setState(
        {
          text: RecipeData.ingred[this.state.currentIngStep].step,
        },
        () => {
          this.readText(this.state.text);
        }
      );
    } else if (this.state.step === Enums.three) {
      this.state.currentRecStep === 0
        ? this.setState({
            currentIngStep: 0,
            step: Enums.two,
          })
        : this.setState({
            currentRecStep: this.state.currentRecStep - 1,
          });
      this.setState(
        {
          text: RecipeData.recipe[this.state.currentRecStep].step,
        },
        () => {
          this.readText(this.state.text);
        }
      );
      // if at last step then move to recipe step
    } else {
      this.setState(
        {
          currentRecStep: 0,
          step: Enums.three,
          text: RecipeData.recipe[this.state.currentRecStep].step,
        },
        () => {
          this.readText(this.state.text);
        }
      );
    }
  };

  nextStep = () => {
    Tts.stop();
    // if at step 0 will again be at step 0
    if (this.state.step === Enums.one) {
      this.setState(
        {
          step: Enums.two,
          text: RecipeData.ingred[this.state.currentIngStep].step,
        },
        () => {
          this.readText(this.state.text);
        }
      );
    } else if (this.state.step === Enums.two) {
      this.state.currentIngStep === RecipeData.ingred.length - 1
        ? this.setState({
            currentRecStep: 0,
            step: Enums.three,
          })
        : this.setState({
            currentIngStep: this.state.currentIngStep + 1,
          });
      this.setState(
        {
          text: RecipeData.ingred[this.state.currentIngStep].step,
        },
        () => {
          this.readText(this.state.text);
        }
      );
    } else if (this.state.step === Enums.three) {
      this.state.currentRecStep === RecipeData.recipe.length - 1
        ? this.setState({
            step: Enums.three + 1,
          })
        : this.setState({
            currentRecStep: this.state.currentRecStep + 1,
          });
      this.setState(
        {
          text: RecipeData.recipe[this.state.currentRecStep].step,
        },
        () => {
          this.readText(this.state.text);
        }
      );
      // if at last step then do nothing
    } else {
      null;
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
    console.log(this.state.text);
    return (
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{Texts.letsPrepare}</Text>
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
                Tts.stop();
                this.startRecognizing();
              }}
            >
              <Image style={styles.imgMic} source={ImageConstants.micIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Image source={this.getImage()} style={styles.img} />
          </View>
          <View style={styles.subHeadContainer}>
            <Text
              style={{
                ...styles.headingText,
                ...styles.subHeadingText,
              }}
            >
              {this.getSubHeading()}
            </Text>
          </View>
          <View style={styles.mainContent}>
            <Text
              style={[
                styles.mainContentText,
                this.state.step === Enums.three || this.state.step === Enums.two
                  ? { fontSize: 30, flexWrap: 'wrap', textAlign: 'center' }
                  : { fontSize: 80 },
              ]}
            >
              {this.getContent()}
            </Text>
          </View>
        </View>
        <CountDown
          id={this.state.timerReset}
          until={this.state.totalDuration}
          onFinish={() => alert('finished')}
          onPress={() => {
            this.resetTimer();
          }}
          digitStyle={styles.stopwatchContainer}
          digitTxtStyle={styles.stopwatchText}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{ h: null, m: null, s: null }}
          size={20}
          running={this.state.timerStart}
          showSeparator
          onChange={() => {
            this.setState({
              remTimeCounter: this.state.remTimeCounter + 1,
            });
          }}
        />
        <View style={{ flexDirection: 'row' }}>
          <CustomMainButton
            customContainer={styles.backForw}
            title={'<'}
            customText={{ color: Colors.white, fontSize: 30 }}
            onPress={() => {
              this.previousStep();
            }}
          />
          <CustomMainButton
            customContainer={styles.playButton}
            title={'Play/Pause'}
            onPress={() => {
              console.log('play/pause');
              this.toggleTimer();
            }}
            customText={{ color: Colors.white }}
          />
          <CustomMainButton
            customContainer={styles.backForw}
            title={'>'}
            customText={{ color: Colors.white, fontSize: 30 }}
            onPress={() => {
              this.nextStep();
            }}
          />
        </View>
      </SafeAreaView>
    );
  }

  getSubHeading = () => {
    if (this.state.step === Enums.one) {
      return Texts.getReady;
    } else if (this.state.step === Enums.two) {
      return Texts.ingredients;
    } else if (this.state.step === Enums.three) {
      return Texts.recipe;
    } else {
      return Texts.completed;
    }
  };
  getContent = () => {
    if (this.state.step === Enums.one) {
      if (this.state.countDownStart === 3) {
        this.setState({
          step: Enums.two,
        });
        this.toggleTimer();
        this.readText(RecipeData.ingred[this.state.currentIngStep].step);
      }
      return this.state.countDownStart;
    } else if (this.state.step === Enums.two) {
      return (
        <Text>{RecipeData.ingred[this.state.currentIngStep].step}</Text>

        //     this.state.currentIngStep === RecipeData.ingred.length - 1
        //       ? this.setState({ step: Enums.three })
        //       : this.setState({
        //           currentIngStep: this.state.currentIngStep + 1,
      );
    } else if (this.state.step === Enums.three) {
      return (
        <Text>{RecipeData.recipe[this.state.currentRecStep].step}</Text>
        //     this.state.currentRecStep === RecipeData.recipe.length - 1
        //       ? this.setState({ step: Enums.four })
        //       : this.setState({
        //           currentRecStep: this.state.currentRecStep + 1,
      );
    } else {
      return Texts.completed;
    }
  };

  getImage = () => {
    let dish = this.props.route.params.value;
    if (Data[0].title === dish) {
      return this.state.step === Enums.two
        ? ImageConstants.recipeOne.ingred
        : ImageConstants.recipeOne.complete;
    } else if (Data[1].title === dish) {
      return this.state.step === Enums.two
        ? ImageConstants.recipeTwo.ingred
        : ImageConstants.recipeTwo.complete;
    } else if (Data[2].title === dish) {
      return this.state.step === Enums.two
        ? ImageConstants.recipeThree.ingred
        : ImageConstants.recipeThree.complete;
    }
  };
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
    height: 180,
    width: '100%',
    borderRadius: 50,
    paddingTop: 40,
  },
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.darkPurple,
  },
  subHeadingText: {
    fontWeight: '500',
    fontSize: 20,
    marginTop: 5,
  },
  img: {
    marginTop: -20,
    width: 365,
    flex: 0.75,
    borderRadius: 15,
    borderColor: Colors.lightPurple,
    borderWidth: 10,
  },
  subHeadContainer: {
    alignItems: 'center',
    marginTop: -90,
  },
  playButton: {
    width: 150,
    backgroundColor: Colors.darkPurple,
  },
  backForw: {
    width: 70,
    borderRadius: 70,
    marginHorizontal: 25,
    backgroundColor: Colors.darkPurple,
  },
  mainContentText: {
    color: Colors.darkPurple,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  resetIcon: {
    width: 25,
    height: 25,
  },
  micContainer: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imgMic: {
    width: 50,
    height: 50,
  },
  stopwatchContainer: {
    alignItems: 'center',
    backgroundColor: Colors.lightPurple,
    marginHorizontal: 5,
  },
  stopwatchText: {
    fontSize: 35,
    color: Colors.darkPurple,
    fontWeight: '500',
    textAlign: 'center',
  },
});
