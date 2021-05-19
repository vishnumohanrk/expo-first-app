import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { navTheme } from './utils';
import { BookmarksPage } from './views/BookmarksPage';
import { HomePage } from './views/HomePage';

const queryClient = new QueryClient();
const Stack = createStackNavigator();

export const AppMain = () => (
  <NavigationContainer theme={navTheme}>
    <QueryClientProvider client={queryClient}>
      <Stack.Navigator>
        <Stack.Screen name="Articles" component={HomePage} />
        <Stack.Screen name="Saved" component={BookmarksPage} />
      </Stack.Navigator>
    </QueryClientProvider>
  </NavigationContainer>
);
