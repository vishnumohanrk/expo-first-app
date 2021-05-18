import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';

type AppTextProps = Omit<TextProps, 'style' | 'ellipsizeMode'> & {
  children: string;
  style: StyleProp<Omit<TextStyle, 'fontFamily'>>;
};

export const AppText = ({ children, style, ...props }: AppTextProps) => (
  <Text ellipsizeMode="tail" style={[styles.txt, style]} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'Roboto',
  },
});
