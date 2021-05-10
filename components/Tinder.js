import {StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder} from 'react-native';
import * as React from 'react';
import {Component} from 'react';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const imageSource = [
    {id: 1, uri: require("../assets/images/manofsteel.jpg")},
    {id: 2, uri: require("../assets/images/endgame.jpg")},
    {id: 3, uri: require("../assets/images/ritual.jpg")},
    {id: 4, uri: require("../assets/images/mortalkombat.jpg")},
    {id: 5, uri: require("../assets/images/jumanji.jpg")},
    {id: 6, uri: require('../assets/images/demonslayer.jpg')},
    {id: 7, uri: require("../assets/images/traintobusan.jpg")},
    {id: 8, uri: require("../assets/images/joker.jpg")},
    {id: 9, uri: require("../assets/images/themummy.jpg")},
    {id: 10, uri: require("../assets/images/harrypotter.jpg")},
  

]

class Tinder extends Component {

  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH /2 ,0, SCREEN_WIDTH /2],
      outputRange: ['-30deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

  }
  UNSAFE_componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  renderMovies = () => {

    return imageSource.map((item, i) => {


      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} 
            style={[this.rotateAndTranslate, 
            { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH - 1000, 
            padding: 5, position: 'absolute'}]}>
            <Animated.View 
            style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text 
              style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 5 }}>
                  LIKE</Text>

            </Animated.View>

            <Animated.View 
            style={{ opacity: this.dislikeOpacity,
             transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 150, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 5 }}>
                  NOPE</Text>

            </Animated.View>

            <Image
              style={{ flex: 1, height: "100%", width: "75%", resizeMode: 'cover', borderRadius: 10 }}
              source={item.uri} />

          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View

            key={item.id} style={[{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
              height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH - 1000, padding: 10, position: 'absolute'
            }]}>
            <Animated.View 
            style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text 
              style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 5 }}>
                  LIKE</Text>

            </Animated.View>

            <Animated.View 
            style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 150, zIndex: 1000 }}>
              <Text 
              style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 5 }}>
                  NOPE</Text>

            </Animated.View>

            <Image
              style={{ flex: 1, height: "100%", width: "75%", resizeMode: 'cover', borderRadius: 10 }}
              source={item.uri} />

          </Animated.View>
        )
      }
    }).reverse()
  }

  render() {
    return (
      <View style={{ flex: 1}}>
       
        <View style={{ flex: 10, alignItems: 'center' }}>
          {this.renderMovies()}
        </View>
    
          </View>

    );
  }
}

export default Tinder;