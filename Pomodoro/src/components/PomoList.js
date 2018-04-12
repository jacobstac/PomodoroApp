import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class PomoList extends Component {
    /* componentWillMount utförs is samma stund som PomoList ska läggas på skärmen.
    Detta är bra när man t.ex ska hämta data */
    componentWillMount () {
        console.log('tjenare');
    }

    render() {
        return (
            <View>
                <Text>Ämnen!</Text>
            </View>
        );
    }
}

export default PomoList


