import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const style = StyleSheet.create({
    statRound: {
        // backgroundColor: '#8BC34A',
        margin: wp('1%'),
        paddingLeft: wp('2%'),
        paddingRight: wp('2%'),
        borderRadius: wp('5%')
    },
    statText: {
        fontSize: wp('3%'),
        color:'white'
    }
})

const Stat = (props) => {
    return (
            <View style={[style.statRound,{backgroundColor:props.color}]}>
                <Text style={style.statText}>{props.stat}</Text>
            </View>
    )
}

export default Stat;