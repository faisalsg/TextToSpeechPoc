// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Texts } from '../util/constants/Strings';
// import Voice from '@react-native-community/voice';

// let qusOne = Texts.qusOne;
// let qusTwo = Texts.qusTwo;
// let qusThree = Texts.qusThree;

// class VoiceTest extends Component {
//   state = {
//     results: '',
//   };

//   constructor(props) {
//     super(props);
//     Voice.onSpeechStart = this.onSpeechStart;
//     Voice.onSpeechRecognized = this.onSpeechRecognized;
//     Voice.onSpeechEnd = this.onSpeechEnd;
//     Voice.onSpeechError = this.onSpeechError;
//     Voice.onSpeechResults = this.onSpeechResults;
//   }

//   async componentDidMount() {
//     this.startRecognizing();
//   }

//   async componentWillUnmount() {
//     this.destroyRecognizer();
//     Voice.destroy().then(Voice.removeAllListeners);
//   }

//   async startRecognizing() {
//     this.setState({
//       result: ' ',
//     });

//     try {
//       await Voice.start('en-US');
//     } catch (e) {
//       console.error(e);
//     }
//   }

//   async destroyRecognizer() {
//     try {
//       await Voice.destroy();
//     } catch (e) {
//       console.error(e);
//     }
//     this.setState({
//       results: ' ',
//     });
//   }

//   onSpeechStart = (e) => {
//     console.log('onSpeechStart');
//   };

//   onSpeechRecognized = (e) => {
//     console.log('onSpeechRecognized');
//   };

//   onSpeechEnd = (e) => {
//     console.log('onSpeechEnd');
//     this.startRecognizing();
//   };

//   onSpeechError = (e) => {
//     console.log('onSpeechError');
//   };

//   onSpeechResults = (e) => {
//     console.log('onSpeechResults', e);
//     const latestArray = e.value[e.value.length - 1];
//     const indexOfTrigger = latestArray.lastIndexOf('hey studio');
//     const question = latestArray.substring(
//       indexOfTrigger + 10,
//       latestArray.length
//     );
//     if (question.includes(qusOne)) {
//       this.setState({ result: 'My name is Studio Graphene' });
//     } else if (question.includes(qusTwo)) {
//       this.setState({ result: 'I am from London United Kingdom' });
//     } else if (question.includes(qusThree)) {
//       this.setState({
//         result:
//           'We’re a digital studio that works with both start-up founders and innovation teams to bring new ideas to life.',
//       });
//     } else {
//       this.setState({
//         result: "Sorry couldn't get you, that was your question: " + question,
//       });
//     }
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.instructions}> Ask question for given list </Text>
//         <Text style={styles.stat}>Results</Text>
//         <Text style={styles.ans}>{this.state.result}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   button: {
//     width: 50,
//     height: 50,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   stat: {
//     textAlign: 'center',
//     color: '#B0171F',
//     marginBottom: 1,
//   },
//   ans: {
//     textAlign: 'center',
//     color: '#000',
//     marginBottom: 1,
//   },
// });

// export default VoiceTest;
