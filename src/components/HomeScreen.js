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
} from 'react-native';
import { Texts } from '../util/constants/Strings';
import { Colors, NavigationConstants } from '../util/constants/Constants';
import CustomMainButton from '../util/CustomMainButton';
import { Data } from './MockData';
import { ImageConstants } from '../assets/ImageConstants';

const { GoogleSpeechManager } = NativeModules;

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishSelected: '',
    };
  }

  async componentDidMount() {
    // This will start recording
    this.startRecognizing();
  }

  async componentWillUnmount() {
    subscription.remove();
  }

  buttonPressed = async (title) => {
    this.setState({ dishSelected: title });
    setTimeout(() => {
      this.props.navigation.navigate(NavigationConstants.RecipeScreen, {
        value: title,
      });
    }, 500);
  };

  async startRecognizing() {
    GoogleSpeechManager.startRecording('', (response) => {
      console.warn('Created start response', response);
      this.setState({
        results: ' ',
      });
      this.displayResults(response);
    });
  }

  displayResults = (response) => {
    if (typeof response !== 'undefined' && response.length > 0) {
      this.setState({
        results: response[0][0].transcript.toLowerCase(),
      });
      this.onSpeechResults(response[0][0].transcript.toLowerCase());
    }
  };

  onSpeechResults = (e) => {
    if (e.includes('hello app') || e.includes('hello App')) {
      const question = e.toLowerCase();
      if (question.includes(Data[0].title.toLowerCase())) {
        this.buttonPressed(Data[0].title);
      } else if (question.includes(Data[1].title.toLowerCase())) {
        this.buttonPressed(Data[1].title);
      } else if (question.includes(Data[2].title.toLowerCase())) {
        this.buttonPressed(Data[2].title);
      } else if (question.includes('home screen')) {
        setTimeout(() => {
          this.props.navigation.navigate(NavigationConstants.TestScreen);
        }, 500);
      } else {
        console.log('Not recognized');
      }
    }
    this.startRecognizing();
  };

  render() {
    return (
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{Texts.clove}</Text>
          <Text>{this.state.results}</Text>
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
