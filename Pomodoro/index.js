/**
 * Pomodoro App by Jacob Stachowicz
 * https://github.com/jacobstac/PomodoroApp
 */

import React, { Component } from 'react';
import { AppRegistry, View, FlatList, Text, Image } from 'react-native';
import Header from './src/components/Header.js';
import PomoList from './src/components/PomoList';
import axios from 'axios';

//state = { pomos: []} // initial base/empty state
// Create a component
const App = () => (
  <View style={{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#26C281"
  }} >

    <View style={{ flex: 10 }}>
      <Header infoTillHeader={'POMODORO HERO'} />
      <PomoList />
    </View>
    {/*Add New pomodoro buttom*/}
    <Header style={{ justifyContent: 'flex-end' }} infoTillHeader={'Menu items'} />
  </View>

);

// Register to device
AppRegistry.registerComponent('Pomodoro', () => App);
