import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PomoDetail from './PomoDetail';


class PomoList extends Component {

    // class level property
    state = { pomos: []} // initial base/empty state

    /* componentWillMount utförs is samma stund som PomoList ska läggas på skärmen.
    Detta är bra när man t.ex ska hämta data */
    componentWillMount () {
        axios.get('https://raw.githubusercontent.com/jacobstac/PomodoroApp/cards/pomos.json')     //axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ pomos: response.data }));
    }

    renderPomos() {
        console.log('renderPomos');
        return this.state.pomos.map(pomos => // map gör en lista av json objektet typ om jag fattat det rätt
        <PomoDetail key = {pomos.title} pomoToDetails={ pomos }/>) //här blir typ pomos.title primary key
    }

    render() {
        console.log(this.state)
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



