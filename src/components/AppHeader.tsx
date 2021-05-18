import * as React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { appColors } from '../utils/constants';
import { AppText } from './AppText';

export const AppHeader = ({ text }: { text: string }) => (
  <AppText style={styles.header}>{text}</AppText>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    textAlign: 'center',
    color: appColors.primaryText,
    marginVertical: (StatusBar.currentHeight || 0) + 36,
  },
});
