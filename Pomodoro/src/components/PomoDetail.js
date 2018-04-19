import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

// just functional not component level state
const PomoDetail = (props) => { //props här är det som tas emot från pomolist, d.v.s pomoToDetails={ pomos }
    return (
        <Card>
            <CardItem>
            <Text>{ props.pomoToDetails.title /* Detta skickas som props till CardItem*/}</Text> 
            </CardItem>

        </Card>
    );

};

export default PomoDetail;