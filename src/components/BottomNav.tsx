import { MaterialIcons as MdIcon } from '@expo/vector-icons';
import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import * as React from 'react';

import { appColors } from '../utils';

export const bottomBarOptions: BottomTabBarOptions = {
  activeTintColor: appColors.accent,
  style: {
    height: 56,
    paddingTop: 6,
    backgroundColor: appColors.secondaryBg,
  },
  labelStyle: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '700',
    paddingBottom: 6,
  },
};

type TBottomNav = (props: {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: unknown;
}) => BottomTabNavigationOptions;

export const BottomNav: TBottomNav = ({ route }) => ({
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ color, size, focused }) => {
    let iconName: 'explore' | 'bookmark' | 'bookmark-outline' = 'explore';

    if (route.name === 'Discover') {
      iconName = 'explore';
    } else if (route.name === 'Collections') {
      iconName = focused ? 'bookmark' : 'bookmark-outline';
    }

    return <MdIcon name={iconName} size={size} color={color} />;
  },
});
