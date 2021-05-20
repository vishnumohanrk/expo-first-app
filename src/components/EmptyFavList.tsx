import * as React from 'react';
import { StyleSheet } from 'react-native';

import { appColors } from '../utils';
import { AppText } from './helper/AppText';

export const EmptyFavList = () => (
  <AppText style={styles.fallbackText}>
    No Saved Articles.
    {'\n'}
    Tap ♥ to add
  </AppText>
);

const styles = StyleSheet.create({
  fallbackText: {
    color: appColors.secondaryText,
    fontSize: 36,
  },
});
