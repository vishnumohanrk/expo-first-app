import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { bottomBarOptions, BottomNav } from './components/BottomNav';
import { DiscoverPage } from './screens/Discover';
import { appColors } from './utils/constants';

const Tab = createBottomTabNavigator();

export const AppMain = () => (
  <NavigationContainer theme={DarkTheme}>
    <Tab.Navigator
      sceneContainerStyle={styles.root}
      tabBarOptions={bottomBarOptions}
      screenOptions={BottomNav}
    >
      <Tab.Screen name="Discover" component={DiscoverPage} />
      <Tab.Screen name="Collections" component={DiscoverPage} />
    </Tab.Navigator>
    <StatusBar style="auto" backgroundColor="#20212499" />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: appColors.primaryBg,
  },
});
