import { MaterialIcons as MdIcon } from '@expo/vector-icons';
import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { rippleConfig } from '../../utils';

type IconButtonProps = React.ComponentProps<typeof MdIcon> & {
  label: string;
  onPress: () => void;
};

export const IconButton = ({ label, onPress, ...rest }: IconButtonProps) => (
  <Pressable
    onPress={onPress}
    android_ripple={rippleConfig}
    accessibilityLabel={label}
  >
    <MdIcon
      size={22}
      {...rest}
      style={rest.style ? rest.style : styles.icoContainer}
    />
  </Pressable>
);

const styles = StyleSheet.create({
  icoContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
});
