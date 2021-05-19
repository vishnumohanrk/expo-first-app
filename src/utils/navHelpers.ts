import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import { ArticlesPageIcon, BookmarksPageIcon } from '../components/TabBar';
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

export const tabItemOptions: Record<
  'articles' | 'bookmarks',
  BottomTabNavigationOptions
> = {
  articles: {
    tabBarIcon: ArticlesPageIcon,
  },
  bookmarks: {
    tabBarIcon: BookmarksPageIcon,
  },
};
