import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    console.log(props.children);
    return ( 
        <View style={ styles.containerStyle } >
            { props.children /*skickar en hel komponent med props, tror jag*/} 
        </View>
    );
};

const styles = {
    containerStyle: {
        //borderWidth: 1,
        borderRadius: 5, //rundade kanter
       // borderColor: '#cc0000',
        borderBottomWidth: 0,
        shadowColor: '#b30047',
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 1,
        marginLeft: 5,  //pace spacing between components
        marginRight: 5,
        marginTop: 30,
        backgroundColor: '#ff0066'


    }
};

export default Card;