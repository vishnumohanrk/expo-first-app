import { MaterialIcons as MdIcon } from '@expo/vector-icons';
import * as React from 'react';

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

export const ArticlesPageIcon = (props: TabBarIconProps) => (
  <MdIcon {...props} name="explore" />
);

export const BookmarksPageIcon = ({ focused, ...rest }: TabBarIconProps) => (
  <MdIcon {...rest} name={focused ? 'bookmark' : 'bookmark-outline'} />
);
