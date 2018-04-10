/**
 * Pomodoro App by Jacob
 * https://github.com/jacobstac/PomodoroApp
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header.js';

// Create a component
const App = () => (
      <Header />
    );

// Register to device
 AppRegistry.registerComponent('Pomodoro', () => App);
