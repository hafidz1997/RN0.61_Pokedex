import React, {Component} from 'react';
import {ActivityIndicator, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import Kotak from '../../../components/molecules/kotak';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { withNavigation } from 'react-navigation';
import axios from 'axios';
import Loader from '../../../components/atoms/loader';
import Search from '../../../components/atoms/search';

const style = StyleSheet.create({
    row: {
        flexDirection: 'column'
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    }
})

class List extends Component{
    constructor(props){
        super(props);
        this.state={
            pokemons:[],
            // pokesearch:[],
            loading:true,
            // search: ''
        }
        this.arrayholder = [];
    }

    componentDidMount(){
        this.apiCall();
    }

    async apiCall(){
        let result =await axios({
            method: "POST",
            url: 'https://graphql-pokemon.now.sh/',
            data: {
                query: `query PokemonList {
                    pokemons(first: 152) {
                      id
                      number
                      name
                      image
                      types
                    }
                  }`
            }
        });
        // console.warn(result.data.data.pokemons)
        this.setState({
            pokemons:result.data.data.pokemons,
            loading:false
        });
        this.arrayholder = result.data.data.pokemons;  
        // console.warn(this.state.pokemons);
      }


    render(){
        // console.warn(this.state.pokemons.data)
        if (this.state.loading) {
            return (
                <Loader/>
            );
          }
        return(
            <>
                <Search
                    onChangeText={(text) => this.search(text)}
                />
                <FlatList
                    contentContainerStyle={style.row}
                    numColumns={3}
                    data={this.state.pokemons}
                    // extraData={this.state.pokesearch}
                    renderItem={({item})=>
                    <Kotak name={item.name} 
                    no={item.number} 
                    gambar={{uri: item.image}}
                    types={item.types}
                    onPress={()=>this.props.navigation.navigate('Detail',{id:item.id})}
                    />
                    }
                    keyExtractor={(item) => item.id.toString()} 
                />
            </>
        )
    }

    search = text => {  
        const newData = this.arrayholder.filter(item => {      
          const itemData = `${item.name.toUpperCase()}`;
          
           const textData = text.toUpperCase();
            
           return itemData.indexOf(textData) > -1;    
        });
        
        this.setState({ pokemons: newData});  
      };
}

export default withNavigation(List);