import { MaterialIcons as MdIcon } from '@expo/vector-icons';
import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { rippleConfig } from '../utils';

type ArticleCardBtnProps = {
  label: string;
  color: string;
  icoName: 'favorite' | 'favorite-outline' | 'share';
  onPress: () => void;
};

export const ArticleCardBtn = (props: ArticleCardBtnProps) => {
  const { color, icoName, label, onPress } = props;

  return (
    <Pressable
      onPress={onPress}
      android_ripple={rippleConfig}
      accessibilityLabel={label}
    >
      <MdIcon
        style={styles.icoContainer}
        color={color}
        name={icoName}
        size={22}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icoContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
});
