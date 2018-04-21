import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './PomoDetail';


class PomoList extends Component {

    // class level property
    state = { pomos: [] } // initial base/empty state

    /* componentWillMount utförs is samma stund som PomoList ska läggas på skärmen.
    Detta är bra när man t.ex ska hämta data */
    componentWillMount() {
        axios.get('https://raw.githubusercontent.com/jacobstac/PomodoroApp/cards/pomos.json')     //axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ pomos: response.data }));
    }
    render() {
        //console.log(this.state)
        return (
            
            <FlatList
                data={this.state.pomos}
                keyExtractor={(x, index) => x.title}
                renderItem={({ item }) => 
                <Text >
                    <Text >{item.title} </Text>
                    <Text >{item.total} </Text>
 
                </Text>}
            />
        );
    }
}

const styles = {
    container: {
        marginTop: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default PomoList



