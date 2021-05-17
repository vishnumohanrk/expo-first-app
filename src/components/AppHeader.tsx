import * as React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { appColors } from '../utils/constants';
import { AppText } from './AppText';

export const AppHeader = () => (
  <AppText style={styles.header}>Articles</AppText>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 48,
    textAlign: 'center',
    color: appColors.primaryText,
    marginVertical: (StatusBar.currentHeight || 0) + 32,
  },
});
