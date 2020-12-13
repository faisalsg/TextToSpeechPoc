# Introduction

Clove which is a React-Native PoC app has been made to make the cooking process more easy and efficient. This is being facilitated through voice-based command which solves a common problem of touching the phone with messy hands.

# Table of Contents

1.  Installation
2.  Dependencies
3.  How it works

### Installation

Simply Clone the project from clove app repository and open in Text Editor of choice. To run the React Native App you need to have react native setup on your system.

### Dependencies

These are the three libraries that have been used:
Install the libraries using yarn package installer

> "@react-native-community/voice": "1.1.9"
> "react-native-tts": "3.2.0"
> "react-native-countdown-component": "2.7.1"

### How it works

The voice-assistant gets activated when a person says "hey app" and when it gets invoked we can perform the following activities

1. To select the dish
   > eg - 'hey app I want to have honey and macadamia loaf'
2. Action to answer quantity related requirements.
   > eg - 'hey app how much quantity of honey is required'
3. Action to play/pause the timer.
   > eg - 'hey app play'
4. Action to rest the timer.
   > eg - 'hey app reset'
5. Action to go to next step.
   > eg - 'hey app next'
6. Action to go to previous step
   > eg - 'hey app previous'
7. Action to know required temperature.
   > eg - 'hey app what should be the temperature of oven'
8. Action to check how much time is left.
   > eg - 'hey app how much time is left'
9. Action to go to home screen.
   > eg - 'hey app main menu/home screen'

Basically the app gets confused when both app and human speaks so the mic button is there to invoke the listener for app if in any case fails.
