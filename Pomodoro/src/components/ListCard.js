
import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles/Styles.js'

const ListCard = (props) => {
    
    const { textStyle24, viewStyle, cardContainerStyle } = styles;
    return (
    <View style = { cardContainerStyle }>
        <Text style = { textStyle24 } >{props.toListCard.title} </Text>
        <Text >Total: {props.toListCard.total} </Text>
        <Text >Today: {props.toListCard.today} </Text>
        <Image style={{width: 50, height: 50, resizeMode: 'contain'}}
          source={{uri: 'https://raw.githubusercontent.com/jacobstac/PomodoroApp/dynamic/pomo.png'}}
        />

    </View>
    );

};



export default ListCard;