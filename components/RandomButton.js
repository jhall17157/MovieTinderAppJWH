



//<Image source={require('../images/demonslayer.jpg')} style={{ resizeMode: 'cover', width: '25%', height: '100%' }}/>
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Button
} from 'react-native';
import Movies from '../Movies.json';

const imageSource = [
    require('../assets/images/demonslayer.jpg'),
    require("../assets/images/endgame.jpg"),
    require("../assets/images/harrypotter.jpg"),
    require("../assets/images/joker.jpg"),
    require("../assets/images/jumanji.jpg"),
    require("../assets/images/manofsteel.jpg"),
    require("../assets/images/mortalkombat.jpg"),
    require("../assets/images/ritual.jpg"),
    require("../assets/images/themummy.jpg"),
    require("../assets/images/traintobusan.jpg"),

]


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      img: "yes"
    }
  }

  getRandomImage = () => {
    
        const random = Math.floor(Math.random() * imageSource.length)
        this.setState({
            img: imageSource[random]
        }, () => {console.log(this.state.img)})
      
    //MyApp\images\harrypotter.jpg
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state ?
          <Image
            style={styles.image}
            source= {this.state.img}
          />
          : null
        }
        <Button title="Choose for me" onPress={this.getRandomImage}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: '300px',
    height: '75%',
    margin: 40,
  }
});