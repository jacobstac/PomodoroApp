import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

// just functional not component level state
const PomoDetail = (props) => { //props här är det som tas emot från pomolist, d.v.s pomoToDetails={ pomos }
    return (
        <Card>
            <CardItem>
                <View style = { styles.headerTextStyle }>
                    <Text style = { styles.textTitleStyle }>{ props.pomoToDetails.title /* Detta skickas som props till CardItem*/}</Text> 
                </View>
                <View></View>
                <View>
                    <Text style = { styles.textOtherStyle }>{ "Total: "+ props.pomoToDetails.total /* Detta skickas som props till CardItem*/}</Text> 
                    <Text style = { styles.textOtherStyle }>{ "Today: "+ props.pomoToDetails.today /* Detta skickas som props till CardItem*/}</Text> 
                </View>
            
            </CardItem>

        </Card>
    );

};

const styles = {

    viewStyle: {
      backgroundColor: '#ff0066',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
      shadowColor: '#b30047',
      shadowOffset: { width: 0, height: 5},
      shadowOpacity: 0.2,
      elevation: 2,

      position: 'relative'
      // height: 60

    },

    headerTextStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    textTitleStyle: {
        fontSize: 24,
        color: '#FF0'
        //,textAlign: 'center'
        
    },

    textOtherStyle: {
        fontSize: 12,
        color: '#FF0'
        //,textAlign: 'center'
        
    }

};

export default PomoDetail;