import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

// just functional not component level state
const PomoDetail = (props) => {
    return (
        <Card>
            <Text>{ props.pomoToDetails.title }</Text>
        </Card>
    );

};

export default PomoDetail;