import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

// just functional not component level state
const PomoDetail = (props) => {
    return (
        <Card>
            <CardItem>
            <Text>{ props.pomoToDetails.title }</Text>
            </CardItem>
            <CardItem>
            <Text>{ props.pomoToDetails.total }</Text>
            </CardItem>
            <CardItem>
            <Text>{ props.pomoToDetails.color }</Text>
            </CardItem>
        </Card>
    );

};

export default PomoDetail;