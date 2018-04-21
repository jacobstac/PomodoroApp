/**
 * Pomodoro App by Jacob Stachowicz
 * https://github.com/jacobstac/PomodoroApp
 */

import React, { Component } from 'react';
import { AppRegistry, View, FlatList, Text } from 'react-native';
import Header from './src/components/header.js';
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

const styles = {
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  }
}

// Register to device
AppRegistry.registerComponent('Pomodoro', () => App);
