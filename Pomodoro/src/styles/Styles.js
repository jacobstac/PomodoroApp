import { StyleSheet } from 'react-native';

export default StyleSheet.create({

// HEADER in main App
  viewStyle: {
    backgroundColor: '#2ABB9B',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    shadowColor: '#b30047',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    // height: 60
  },

  textStyle: {
    fontSize: 60,
    color: '#F9BF3B',
    //textAlign: 'center',
  },

  textStyle24: {
    fontSize: 24,
    color: '#F9BF3B',
    //fontWeight: 'bold'
    textAlign: 'justify',
  },

  cardContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'center', // 'space-around'
    flexDirection: 'column', //flexa vertikalt, 'row' om horizontellt
    borderColor: "#00B16A",
    position: 'relative',
},


});