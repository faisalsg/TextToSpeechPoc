import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Texts } from '../util/constants/Strings';
import { Colors, Enums } from '../util/constants/Constants';
import CustomMainButton from '../util/CustomMainButton';
import { ImageConstants } from '../assets/ImageConstants';
import CountDown from 'react-native-countdown-component';
import { RecipeData, Data } from './MockData';
import Voice from 'react-native-voice';

export default class RecipeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishSelected: '',
      step: 1,
      countDownStart: 3,
      timerStart: false,
      totalDuration: 900,
      timerReset: false,
      currentIngStep: 0,
      currentRecStep: 0,
    };
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
    const question = latestArray
      .substring(-1, latestArray.length)
      .toLowerCase();
    // Action to play/pause the timer.
    if (
      question.includes(Texts.play) ||
      question.includes(Texts.pause) ||
      question.includes(Texts.stop)
    ) {
      this.toggleTimer();
      this.destroyRecognizer();
      // Action to reset timer
    } else if (question.includes(Texts.reset)) {
      this.resetTimer();
      this.destroyRecognizer();
      // Action to next step
    } else if (question.includes(Texts.next)) {
      this.nextStep();
      this.destroyRecognizer();
      // Action to previous step
    } else if (question.includes(Texts.previous)) {
      this.previousStep();
      this.destroyRecognizer();
      // Move to home screen
    } else if (
      question.includes(Texts.mainMenu) ||
      question.includes(Texts.homeScreen)
    ) {
      this.props.navigation.goBack();
      this.destroyRecognizer();
      // default action
    } else {
      console.log('Not recognized');
    }
  };

  toggleTimer = () => {
    this.setState({
      timerStart: !this.state.timerStart,
      // timerReset: false,
    });
  };

  resetTimer = () => {
    this.setState({ timerReset: !this.state.timerReset, timerStart: true });
  };

  getFormattedTime = (time) => {
    this.currentTime = time;
  };

  previousStep = () => {
    console.log('Back');
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
    } else if (this.state.step === Enums.three) {
      this.state.currentRecStep === 0
        ? this.setState({
            currentIngStep: 0,
            step: Enums.two,
          })
        : this.setState({
            currentRecStep: this.state.currentRecStep - 1,
          });
      // if at last step then move to recipe step
    } else {
      this.setState({
        currentRecStep: 0,
        step: Enums.three,
      });
    }
  };

  nextStep = () => {
    console.log('forw');
    // if at step 0 will again be at step 0
    if (this.state.step === Enums.one) {
      this.setState({
        step: Enums.two,
      });
    } else if (this.state.step === Enums.two) {
      this.state.currentIngStep === RecipeData.ingred.length - 1
        ? this.setState({
            currentRecStep: 0,
            step: Enums.three,
          })
        : this.setState({
            currentIngStep: this.state.currentIngStep + 1,
          });
    } else if (this.state.step === Enums.three) {
      this.state.currentRecStep === RecipeData.recipe.length - 1
        ? this.setState({
            step: Enums.three + 1,
          })
        : this.setState({
            currentRecStep: this.state.currentRecStep + 1,
          });
      // if at last step then do nothing
    } else {
      null;
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{Texts.letsPrepare}</Text>
          <Text
            style={{
              ...styles.headingText,
              ...styles.subHeadingText,
            }}
          >
            {this.props.route.params.value}
          </Text>
          <View style={styles.micContainer}>
            <TouchableOpacity
              onPress={() => {
                Voice.onSpeechStart = this.onSpeechStart;
                Voice.onSpeechRecognized = this.onSpeechRecognized;
                Voice.onSpeechEnd = this.onSpeechEnd;
                Voice.onSpeechError = this.onSpeechError;
                Voice.onSpeechResults = this.onSpeechResults;
                Voice.onSpeechPartialResults = this.onSpeechPartialResults;
                Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
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
          onPress={() => this.resetTimer()}
          digitStyle={styles.stopwatchContainer}
          digitTxtStyle={styles.stopwatchText}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{ h: null, m: null, s: null }}
          size={20}
          running={this.state.timerStart}
          showSeparator
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
  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState((prevState) => ({
          countDownStart: prevState.countDownStart - 1,
        })),
      1500
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.countDownStart === 0) {
      clearInterval(this.interval);
    }
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
      if (this.state.countDownStart === 0) {
        this.setState({
          step: Enums.two,
        });
        this.toggleTimer();
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
