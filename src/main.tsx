import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import {
  bookmarkTabItemOption,
  exploreTabItemOption,
  navTheme,
  tabBarOptions,
} from './utils/navHelpers';
import { ArticlesPage } from './views/ArticlesPage';
import { BookmarksPage } from './views/BookmarksPage';

const queryClient = new QueryClient();
const Tab = createBottomTabNavigator();

export const AppMain = () => (
  <NavigationContainer theme={navTheme}>
    <QueryClientProvider client={queryClient}>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
          name="Explore"
          options={exploreTabItemOption}
          component={ArticlesPage}
        />
        <Tab.Screen
          name="Bookmarks"
          options={bookmarkTabItemOption}
          component={BookmarksPage}
        />
      </Tab.Navigator>
    </QueryClientProvider>
  </NavigationContainer>
);
