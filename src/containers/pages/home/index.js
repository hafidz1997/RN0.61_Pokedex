import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import List from '../../organisms/list';



const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#E51C23'
    },
    navbar: {
        height: 60,
        justifyContent: 'center'
    },
    title: {
        color:'white', 
        fontSize:20, 
        fontFamily:'Roboto',
        fontWeight: 'bold',
        textAlign:'left',
        margin: 15,
    },    
    card: {
        backgroundColor: '#F4F7FA',
        flex: 1,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        padding:hp('1%')
    },
})

class Home extends Component {

    render(){
        return(
        <>
            <View style={style.container}>
            <View style={style.navbar}>
            <Text style={style.title}>Pokedex</Text>
            </View>
            <View style={style.card}>
                <List/>
            </View>
            </View>
        </>
        )
    }
}
export default Home;