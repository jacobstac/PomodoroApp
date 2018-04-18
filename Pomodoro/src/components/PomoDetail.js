import React from 'react';
import { View, Text } from 'react-native';

// just functional not component level state
const PomoDetail = (props) => {
    return (
        <View>
            <Text>{ props.pomoToDetails.title }</Text>
        </View>
    );

};

export default PomoDetail;