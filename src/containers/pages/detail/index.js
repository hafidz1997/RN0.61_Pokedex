import React, {Component} from 'react';
import {ActivityIndicator,View, ScrollView, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Stat from '../../../components/atoms/stat';
import axios from 'axios';
import Loader from '../../../components/atoms/loader';

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#8BC34A'
    },
    navbar: {
        height: hp('5%'),
        // justifyContent: 'center',
        flexDirection: 'row',
        // padding: wp('5%'),
        margin: wp('5%')
    },
    title: {
        color:'white', 
        fontSize:wp('6%'), 
        fontFamily:'Roboto',
        fontWeight: 'bold',
        textAlign:'left'
    },
    icon: {
        marginLeft:wp('1%'),
        marginRight:wp('5%')
    },
    no: {
        color:'white',
        fontSize:wp('5%'), 
        fontFamily:'Roboto',
        fontWeight: 'bold',
        textAlign:'right',
        flex: 1
    },
    card: {
        backgroundColor: '#F4F7FA',
        flex: 1,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        padding:hp('2%')
    },
    gambar: {
        width: wp('35%'),
        height: wp('35%'),
        alignSelf: 'center',
        marginTop: hp('6%'),
        marginBottom: hp('4%'),
        borderRadius: 100
    },
    judul: {
        color: '#7E94B3',
        fontWeight: 'bold',
        fontSize: wp('6%'),
        marginBottom: wp('3%')
    },
    isi: {
        color: '#1D3962',
        fontSize: wp('5%'),
        marginBottom: wp('5%'),
        flexDirection: 'row'
    },
    garis: {
        borderBottomColor: '#EAEFF7',
        borderBottomWidth: 1,
        marginBottom: wp('10%')
    },
    evo: {
        backgroundColor: '#E0E8F3',
        borderRadius: 8,
        width: '100%',
        height: hp('20%'),
        flexDirection: 'row',
        padding: wp('5%'),
        marginBottom: wp('4%')
    },
    stat: {
        flexDirection: 'row',
    },
    evoGambar: {
        marginRight: wp('4%'),
        width: wp('20%'),
        height: wp('20%'),
        borderRadius: 100
    },
    evoNama: {
        fontSize: wp('5%'),
        color: '#1D3962',
        marginBottom: wp('3%')
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    }

})

class Detail extends Component {

    constructor(props){
        super(props);
        this.state={
            pokemons:[],
            loading:true
        }
    }

    componentDidMount(){
        this.apiCall();
    }

    async apiCall(){
        let id = this.props.navigation.getParam('id', 0);
        let result =await axios({
            method: "POST",
            url: 'https://graphql-pokemon.now.sh/',
            data: {
                query: `{
                    pokemon(id: "${id}") {
                        id
                        number
                        name
                        image
                        types
                        classification
                        resistant
                        evolutions {
                            id
                            number
                            name
                            image
                            types
                        }
                    }
                }`
            }
        });
        // console.warn(result);
        this.setState({
            pokemons:result.data.data.pokemon,
            loading:false
        });
        // let dt = this.state.pokemons;
        // console.warn(dt.name);
        // console.warn(this.state.pokemons);
      }



    render(){
        let dt = this.state.pokemons;
        if (this.state.loading) {
            return (
                <Loader/>
            );
          }
        return(
        <>
            <View style={style.container}>
            <View style={style.navbar}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Icon style={style.icon} name='ios-arrow-back' size={wp('8%')} color='white' />
            </TouchableOpacity>
            <Text style={style.title}>{dt.name}</Text>
            <Text style={style.no}>#{dt.number}</Text>
            </View>
            <View style={style.card}>
                <ScrollView>
                <Image style={style.gambar} source={{uri: dt.image}}/>
                
                <Text style={style.judul}>Types</Text>
                <View style={{flexDirection: 'row'}}>
                {dt.types.map((type,i) => 
                (i==(dt.types.length-1))?
                <Text key={i} style={style.isi}>{type}</Text>:
                <Text key={i} style={style.isi}>{type}, </Text>
                )}
                </View>
                <View style={style.garis} />

                <Text style={style.judul}>Classification</Text>
                <Text style={style.isi}>{dt.classification}</Text>
                <View style={style.garis} />

                <Text style={style.judul}>Resistant</Text>
                <View style={{flexDirection: 'row'}}>
                {dt.resistant.map((resist,i) => 
                (i==(dt.resistant.length-1))?
                <Text key={i} style={style.isi}>{resist}</Text>:
                <Text key={i} style={style.isi}>{resist}, </Text>
                )}
                </View>
                <View style={style.garis} />
                
                <Text style={style.judul}>Evolution</Text>
                {dt.evolutions?dt.evolutions.map((evo,i)=>
                    <TouchableOpacity 
                    key={i} 
                    style={style.evo}
                    onPress={()=>this.props.navigation.push('Detail',{id:evo.id})}
                    >
                    <Image style={style.evoGambar} source={{uri: evo.image}}/>
                    <View style={{flex:1}}>
                    <Text style={style.evoNama}>#{evo.number}-{evo.name}</Text>
                    <View style={style.stat}>
                        {evo.types.map((type,j)=>
                            {
                                if(type=='Grass'){
                                return (<Stat key={j} color='#8BC34A' stat={type}/>);
                                }
                                else if(type=='Poison'){
                                return (<Stat key={j} color='#AA22B0' stat={type}/>);    
                                }
                                else if(type=='Fire'){
                                return (<Stat key={j} color='#FF7A00' stat={type}/>);    
                                }
                                else if(type=='Flying'){
                                return (<Stat key={j} color='#CC9CF7' stat={type}/>);    
                                }
                                else if(type=='Water'){
                                return (<Stat key={j} color='#2BC3FF' stat={type}/>);    
                                }
                                else if(type=='Bug'){
                                return (<Stat key={j} color='#9EB541' stat={type}/>);    
                                }
                                else if(type=='Normal'){
                                return (<Stat key={j} color='#A8A77A' stat={type}/>);    
                                }
                                else if(type=='Electric'){
                                return (<Stat key={j} color='#F7D02C' stat={type}/>);    
                                }
                                else if(type=='Ground'){
                                return (<Stat key={j} color='#E2BF65' stat={type}/>);    
                                }
                                else if(type=='Rock'){
                                return (<Stat key={j} color='#B6A136' stat={type}/>);    
                                }
                                else if(type=='Ghost'){
                                return (<Stat key={j} color='#735797' stat={type}/>);    
                                }
                                else if(type=='Dragon'){
                                return (<Stat key={j} color='#6F35FC' stat={type}/>);    
                                }
                                else if(type=='Psychic'){
                                return (<Stat key={j} color='#F95587' stat={type}/>);    
                                }
                                else if(type=='Fighting'){
                                return (<Stat key={j} color='#C22E28' stat={type}/>);    
                                }
                                else if(type=='Ice'){
                                return (<Stat key={j} color='#96D9D6' stat={type}/>);    
                                }
                                else if(type=='Fairy'){
                                return (<Stat key={j} color='#D685AD' stat={type}/>);    
                                }
                                else if(type=='Steel'){
                                return (<Stat key={j} color='#B7B7CE' stat={type}/>);    
                                }
                                else{
                                return (<Stat key={j} color='#000000' stat={type}/>);
                                }
                            }
                        )} 
                    </View>
                    </View>
                    </TouchableOpacity>
                ):
                <Text style={style.isi}>No Evolution</Text>
                }
                </ScrollView>
            </View>
            </View>
        </>
        )
    }
}
export default Detail;