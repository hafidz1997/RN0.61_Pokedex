import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Stat from '../../atoms/stat';

const style = StyleSheet.create({
    tengah:{
        alignItems:'center'
    },
    kotak: {
        backgroundColor: '#FFFFFF',
        width: wp('30%'),
        height: wp('30%'),
        borderRadius: 8,
        margin: wp('1%'),
        padding: wp('2%')
    },
    nomor: {
        color: '#7E94B3',
        fontSize: wp('3%')
    },
    gambar: {
        width: wp('12%'),
        height: wp('12%'),
    },
    nama: {
        color: '#1D3962',
        fontSize: wp('4%')
    },
    stat: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

const Kotak = (props) => {
    return (
        <TouchableOpacity style={style.kotak} onPress={props.onPress}>
            <Text style={style.nomor}>#{props.no}</Text>
            <View style={style.tengah}>
                <Image style={style.gambar} source={props.gambar}/>
                <Text style={style.nama}>{props.name}</Text>
            </View>
            <View style={style.stat}>
            {props.types.map((type,i)=>
            {
                if(type=='Grass'){
                return (<Stat key={i} color='#8BC34A' stat={type}/>);
                }
                else if(type=='Poison'){
                return (<Stat key={i} color='#AA22B0' stat={type}/>);    
                }
                else if(type=='Fire'){
                return (<Stat key={i} color='#FF7A00' stat={type}/>);    
                }
                else if(type=='Flying'){
                return (<Stat key={i} color='#CC9CF7' stat={type}/>);    
                }
                else if(type=='Water'){
                return (<Stat key={i} color='#2BC3FF' stat={type}/>);    
                }
                else if(type=='Bug'){
                return (<Stat key={i} color='#9EB541' stat={type}/>);    
                }
                else if(type=='Normal'){
                return (<Stat key={i} color='#A8A77A' stat={type}/>);    
                }
                else if(type=='Electric'){
                return (<Stat key={i} color='#F7D02C' stat={type}/>);    
                }
                else if(type=='Ground'){
                return (<Stat key={i} color='#E2BF65' stat={type}/>);    
                }
                else if(type=='Rock'){
                return (<Stat key={i} color='#B6A136' stat={type}/>);    
                }
                else if(type=='Ghost'){
                return (<Stat key={i} color='#735797' stat={type}/>);    
                }
                else if(type=='Dragon'){
                return (<Stat key={i} color='#6F35FC' stat={type}/>);    
                }
                else if(type=='Psychic'){
                return (<Stat key={i} color='#F95587' stat={type}/>);    
                }
                else if(type=='Fighting'){
                return (<Stat key={i} color='#C22E28' stat={type}/>);    
                }
                else if(type=='Ice'){
                return (<Stat key={i} color='#96D9D6' stat={type}/>);    
                }
                else if(type=='Fairy'){
                return (<Stat key={i} color='#D685AD' stat={type}/>);    
                }
                else if(type=='Steel'){
                return (<Stat key={i} color='#B7B7CE' stat={type}/>);    
                }
                else{
                return (<Stat key={i} color='#000000' stat={type}/>);
                }
            }
            )} 
            </View>
        </TouchableOpacity>
    )
}

export default Kotak;