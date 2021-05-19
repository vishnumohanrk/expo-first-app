import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { appColors } from '../utils';
import { AppText } from './helper/AppText';

export const AppHeader = () => (
  <View style={styles.container}>
    <AppText style={styles.text}>Dev.to Articles</AppText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: appColors.secondaryBg,
    position: 'relative',
    zIndex: 99,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: appColors.primaryText,
  },
});
