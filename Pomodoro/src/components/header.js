// import libaries for making this component
import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/Styles.js'

// make the component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.infoTillHeader}</Text>
    </View>
  );
};


// make the component aviable to other parts of the app
export default Header;
