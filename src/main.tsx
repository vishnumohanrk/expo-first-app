import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { AppHeader } from './components/AppHeader';
import { ArticleCard } from './components/ArticleCard';
import { appColors } from './utils/constants';

export const AppMain = () => (
  <View style={styles.root}>
    <FlatList
      style={{ paddingHorizontal: 16 }}
      data={['1', '2', '3', '4', '5', '6']}
      renderItem={() => <ArticleCard />}
      ItemSeparatorComponent={() => <View style={{ height: 22 }} />}
      ListHeaderComponent={() => <AppHeader />}
      ListFooterComponent={() => <View style={{ height: 64 }} />}
      keyExtractor={i => i}
    />

    <StatusBar style="auto" backgroundColor="rgba(32, 33, 36, 0.6)" />
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: appColors.primaryBg,
  },
});
