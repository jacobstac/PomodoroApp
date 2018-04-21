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
class App extends Component {

  state = { pomos: []}

  componentWillMount() {
      axios.get('https://raw.githubusercontent.com/jacobstac/PomodoroApp/cards/pomos.json')     //axios.get('https://rallycoding.herokuapp.com/api/music_albums')
          .then(response => this.setState({ pomos: response.data }));
  }
  

  render() {
    return (
      <View style = { styles.container }>
      <Header infoTillHeader = {'POMODORO'}/>
      <FlatList
        data = { this.state.pomos } 
        keyExtractor = { (x, index) => x.title}
        renderItem = { ({item}) => <Text>{item.title}</Text> }
      />
      {/*<PomoList /> */}
    </View>
    );


  }

}

const styles = {
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',

  }
}
// Register to device
 AppRegistry.registerComponent('Pomodoro', () => App);
