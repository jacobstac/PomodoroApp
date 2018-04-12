/**
 * Pomodoro App by Jacob
 * https://github.com/jacobstac/PomodoroApp
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header.js';
import PomoList from './src/components/PomoList';

// Create a component
const App = () => (
  <View>
    <Header infoTillHeader = {'POMODORO'}/>
    <PomoList />
  </View>
);

// Register to device
 AppRegistry.registerComponent('Pomodoro', () => App);
