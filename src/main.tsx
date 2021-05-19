import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AppHeader } from './components/AppHeader';
import { appColors } from './utils';
import { HomePage } from './views/HomePage';

const queryClient = new QueryClient();

export const AppMain = () => (
  <SafeAreaView style={styles.root}>
    <AppHeader />

    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>

    <StatusBar style="auto" backgroundColor={appColors.primaryBg} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: appColors.primaryBg,
  },
});
