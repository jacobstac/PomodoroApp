import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/Styles.js'

const ListCard = (props) => {
    const { textStyle24, viewStyle, cardContainerStyle } = styles;
    return (
    <View style = { cardContainerStyle }>
        <Text style = { textStyle24 } >{props.toListCard.title} </Text>
        <Text >{props.toListCard.total} </Text>
        <Text >{props.toListCard.total} </Text>

    </View>
    );

};



export default ListCard;