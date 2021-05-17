import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { AppCard } from './components/AppCard';

export const AppMain = () => (
  <View style={styles.root}>
    <AppCard />
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
});
