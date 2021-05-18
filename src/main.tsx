import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppHeader } from './components/AppHeader';
import { ArticleCard } from './components/ArticleCard';
import { ListDivider } from './components/helper/ListDivider';
import { appColors, sampleData } from './utils';

export const AppMain = () => (
  <SafeAreaView style={styles.root}>
    <AppHeader />

    <FlatList
      style={{ paddingHorizontal: 16, paddingVertical: 24 }}
      data={['1', '2', '3', '4', '5', '6', '7', '8', '9']}
      keyExtractor={i => i}
      renderItem={() => <ArticleCard {...sampleData} />}
      ItemSeparatorComponent={ListDivider}
      ListFooterComponent={View}
      ListFooterComponentStyle={{ height: 64 }}
    />

    <StatusBar style="auto" backgroundColor="#20212499" />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: appColors.primaryBg,
  },
});
