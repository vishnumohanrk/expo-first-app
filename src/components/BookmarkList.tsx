import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { appColors } from '../utils';
import { AppHeader } from './AppHeader';
import { AppText } from './AppText';

export const ListHeader = () => <AppHeader text="Saved" />;

export const ListFooter = () => <View style={styles.footer} />;

export const ListEmpty = () => (
  <AppText style={styles.fallbackText}>
    No Saved Articles.
    {'\n'}
    Tap ♥ to add to collections
  </AppText>
);

const styles = StyleSheet.create({
  fallbackText: {
    color: appColors.secondaryText,
    fontSize: 36,
  },
  footer: {
    height: 36,
  },
});
