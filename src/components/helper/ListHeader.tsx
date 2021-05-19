import * as React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { appColors } from '../../utils';
import { AppText } from './AppText';

export const AppHeader = ({ text }: { text: string }) => (
  <AppText style={styles.header}>{text}</AppText>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 48,
    textAlign: 'center',
    color: appColors.primaryText,
    marginTop: (StatusBar.currentHeight || 0) + 48,
    marginBottom: 64,
  },
});
