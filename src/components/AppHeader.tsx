import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { appColors } from '../utils';
import { AppText } from './helper/AppText';
import { IconButton } from './helper/IconButton';

export const AppHeader = () => (
  <View style={styles.container}>
    <AppText style={styles.text}>Dev.to Articles</AppText>
    <IconButton
      label="Bookmarks"
      onPress={() => {}}
      name="bookmark-outline"
      color={appColors.secondaryText}
      style={styles.icon}
      size={24}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.secondaryBg,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    zIndex: 99,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: appColors.primaryText,
  },
  icon: {
    padding: 16,
  },
});
