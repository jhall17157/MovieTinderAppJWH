import * as React from 'react';
import { StyleSheet } from 'react-native';
import {Image} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import MovieList from '../components/MovieList';
import { Text, View } from '../components/Themed';
import RandomButton from '../components/RandomButton'

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <RandomButton/>
      
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
