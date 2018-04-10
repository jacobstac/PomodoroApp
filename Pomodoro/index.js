/**
 * Pomodoro App by Jacob
 * https://github.com/jacobstac/PomodoroApp
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry
} from 'react-native';

// Create a component
const App = () => {
    return (
      <Text>Pomodoro</Text>
    );
}
// Register to device
 AppRegistry.registerComponent('Pomodoro', () => App);
