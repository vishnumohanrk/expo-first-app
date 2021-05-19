import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import { appColors } from './utils';
import { ArticlesPage } from './views/ArticlesPage';

const queryClient = new QueryClient();

export const AppMain = () => (
  <View style={styles.root}>
    <QueryClientProvider client={queryClient}>
      <ArticlesPage />
    </QueryClientProvider>

    <StatusBar style="auto" backgroundColor="#20212499" />
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: appColors.primaryBg,
  },
});
