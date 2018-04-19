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
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: "#ddd",
        position: 'relative'

    }
};

export default CardItem;




