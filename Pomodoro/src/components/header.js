// import libaries for making this component
import React from 'react';
import { Text, View } from 'react-native';

// make the component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.infoTillHeader}</Text>
    </View>
  );
};

const styles = {

    viewStyle: {
      backgroundColor: '#ff0066',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
      shadowColor: '#b30047',
      shadowOffset: { width: 0, height: 4},
      shadowOpacity: 0.8,
      elevation: 2,

      position: 'relative'
      // height: 60

    },

    textStyle: {
        fontSize: 60,
        color: '#FF0'
        //,textAlign: 'center'
        
    }

};

// make the component aviable to other parts of the app
export default Header;
