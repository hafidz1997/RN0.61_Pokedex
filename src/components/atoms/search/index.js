import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const style = StyleSheet.create({
    searchBar: {
        width: wp('80%'),
        height: hp('8%'),
        marginBottom: wp('5%'),
        marginTop: wp('5%'),
        borderRadius: 100,
        backgroundColor: 'white',
        borderWidth: 1,
    },
    input: {
        padding: wp('2%'),
        paddingLeft: wp('12%'),
        color: 'black',
        borderRadius: 100,
        flex: 1

    },  icon: {
        marginLeft:wp('1%'),
        marginRight:wp('5%'),
        position: 'absolute',
        left: wp('1%'),
        top: wp('3%'),
        bottom: wp('3%'),
        alignSelf: 'center'
    }
  })

const Search = (props) => {
    return(
        <View style={{alignItems:'center'}}>
        <View style={style.searchBar}>
        <Icon style={style.icon} name='md-search' size={wp('8%')} color='grey' />
        <TextInput placeholder="Search Pokemon" style={style.input} 
        onChangeText={props.onChangeText}
        value={props.value}>
        </TextInput>
        </View>
        </View>
    )
}

export default Search;