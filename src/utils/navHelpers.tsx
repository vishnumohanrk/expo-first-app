import { MaterialIcons as MdIcon } from '@expo/vector-icons';
import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { DarkTheme, Theme } from '@react-navigation/native';
import * as React from 'react';

import { appColors } from '.';

export const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: appColors.accent,
  style: {
    height: 56,
    backgroundColor: appColors.secondaryBg,
  },
  labelStyle: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 15,
  },
  labelPosition: 'beside-icon',
};

export const navTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    background: appColors.primaryBg,
  },
};

export const exploreTabItemOption: BottomTabNavigationOptions = {
  tabBarIcon: props => <MdIcon {...props} name="explore" />,
};

export const bookmarkTabItemOption: BottomTabNavigationOptions = {
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ focused, ...rest }) => (
    <MdIcon {...rest} name={focused ? 'bookmark' : 'bookmark-outline'} />
  ),
};
