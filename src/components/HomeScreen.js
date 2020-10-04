import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Texts } from '../util/constants/Strings';
import { Colors, NavigationConstants } from '../util/constants/Constants';
import CustomMainButton from '../util/CustomMainButton';
import { Data } from './MockData';
import Voice from 'react-native-voice';
import { ImageConstants } from '../assets/ImageConstants';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishSelected: '',
    };
  }

  buttonPressed = (title) => {
    this.setState({
      dishSelected: title,
    });
    this.destroyRecognizer();
    this.props.navigation.navigate(NavigationConstants.RecipeScreen, {
      value: title,
    });
  };
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
    const indexOfTrigger = latestArray.lastIndexOf('Hey');
    const question = latestArray
      .substring(indexOfTrigger + 3, latestArray.length)
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
  };

  render() {
    return (
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{Texts.clove}</Text>
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
              <Image style={styles.img} source={ImageConstants.micIcon} />
            </TouchableOpacity>
          </View>
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
  micContainer: {
    alignContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
  },
});
