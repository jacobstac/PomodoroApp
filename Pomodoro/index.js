/**
 * Pomodoro App by Jacob Stachowicz
 * https://github.com/jacobstac/PomodoroApp
 */

import React, { Component } from 'react';
import { AppRegistry, View, FlatList, Text } from 'react-native';
import Header from './src/components/Header.js';
import PomoList from './src/components/PomoList';
import axios from 'axios';

//state = { pomos: []} // initial base/empty state
// Create a component
const App = () => (
  <View >
    <Header infoTillHeader={'POMODORO'} />
    <PomoList />
    {/*Add New pomodoro buttom*/}
  </View>

);


// Register to device
AppRegistry.registerComponent('Pomodoro', () => App);
