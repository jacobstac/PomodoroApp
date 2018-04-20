import React from 'react';
import { View } from 'react-native';

const CardItem = (props) => {
    console.log( props.children )
    return (
        <View style ={ styles.containerStyle }>
        { props.children }
        </View>
    );
};


const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#ff4d94',
        justifyContent: 'center', // 'space-around'
        flexDirection: 'column', //flexa vertikalt, 'row' om horizontellt
        borderColor: "#ddd",
        position: 'relative'

    }
};

export default CardItem;




