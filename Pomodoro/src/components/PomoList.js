import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './PomoDetail';

class PomoList extends Component {

    // class level property
    state = { pomos: []} // initial base/empty state

    /* componentWillMount utförs is samma stund som PomoList ska läggas på skärmen.
    Detta är bra när man t.ex ska hämta data */
    componentWillMount () {
        axios.get('https://raw.githubusercontent.com/jacobstac/PomodoroApp/albums/Pomodoro/src/pomos.json')     //axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ pomos: response.data }));
    }

    renderPomos() {
        return this.state.pomos.map(pomos => 
        <AlbumDetail key = {pomos.title} pomoToDetails={pomos}/>)
    }

    render() {
        //console.log(this.state)
        return (
            // <View Style = { pomoStyle }>
            <View>
                { this.renderPomos() }
            </View>
        );
    }

    /* const styles = {
        pomoStyle : {
            justifyContent: 'center'
        }
    }; */
}


export default PomoList



