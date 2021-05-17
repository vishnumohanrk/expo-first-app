import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const AppCard = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Michael Scott</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 32,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#4338CA',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 32,
  },
});
