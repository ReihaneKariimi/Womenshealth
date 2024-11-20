import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>سلام</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#436FF2',
  },
});
