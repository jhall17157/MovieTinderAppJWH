import movies from '../Movies.json';
import { Component} from 'react';
import * as React from'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { isLoaded, isLoading } from 'expo-font';
import { divide } from 'react-native-reanimated';
import {  ListItem} from 'react-native-elements';

const movieList = movies.movies;
const imageSource = [
    require("../assets/images/manofsteel.jpg"),
    require("../assets/images/endgame.jpg"),
    require("../assets/images/ritual.jpg"),
    require("../assets/images/mortalkombat.jpg"),
    require("../assets/images/jumanji.jpg"),
    require('../assets/images/demonslayer.jpg'),
    require("../assets/images/traintobusan.jpg"),
    require("../assets/images/joker.jpg"),
    require("../assets/images/themummy.jpg"),
    require("../assets/images/harrypotter.jpg"),
]

class MovieList extends Component {
    constructor(props){
        super (props);
        this.state ={
            isLoading: true,
            dataSource: []
        }
    }
    componentDidMount(){
    return (
      this.setState({
        isLoading: false,
        dataSource: movieList
      })
    )
}
renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          marginLeft: "0%"
        }}
      />
    );
  };

render() {
 
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
  
 
    return (
 
<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

       <FlatList
       
          data={ this.state.dataSource }
          
          renderItem={({ item }) => (
        <View>
            <Text style ={{alignItems:"center", justifyContent: "center",  fontSize: 30,
    fontWeight: 'bold',}}
            
            > <Image source={imageSource[item.id - 1]} style={styles.image}></Image>{item.title}</Text>
        </View>
            )}
 
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
         />

    
    
</View>
            
    );
      
    
}}
const styles = StyleSheet.create({
    container: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    image: {
      width: '75px',
      height: '75px',
      margin: 5,
    }
  });
export default MovieList
