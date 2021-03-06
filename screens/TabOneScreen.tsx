import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Movies from "../Movies.json"
import MovieList from '../components/MovieList.js';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Recommended for You</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <MovieList/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: "center" 
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
