import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/stylesCard.js'

const ListCard = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
    <Text >
        <Text style = { textStyle } >{props.toListCard.title} </Text>
        <Text >{props.toListCard.total} </Text>
        <Text >{props.toListCard.total} </Text>

    </Text>
    );

};


export default ListCard;