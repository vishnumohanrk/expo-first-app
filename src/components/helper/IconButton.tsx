import { MaterialIcons as MdIcon } from '@expo/vector-icons';
import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { rippleConfig } from '../../utils';

type ActionBtnProps = {
  label: string;
  color: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icoName: any;
  onPress: () => void;
};

export const IconButton = (props: ActionBtnProps) => {
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
