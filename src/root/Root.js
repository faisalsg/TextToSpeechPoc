import 'react-native-gesture-handler';
import * as React from 'react';
import VoiceTest from '../components/VoiceTest';
import HomeScreen from '../components/HomeScreen';
import RecipeScreen from '../components/RecipeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationConstants } from '../util/constants/Constants';

const Stack = createStackNavigator();

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator initialRouteName={NavigationConstants.HomeScreen}>
        <Stack.Screen
          name={NavigationConstants.VoiceTest}
          component={VoiceTest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationConstants.HomeScreen}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationConstants.RecipeScreen}
          component={RecipeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}
