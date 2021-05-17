import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';

type AppTextProps = Omit<TextProps, 'style'> & {
  children: string;
  style: StyleProp<Omit<TextStyle, 'fontFamily'>>;
};

export const AppText = ({ children, style, ...props }: AppTextProps) => (
  <Text style={[styles.txt, style]} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'Roboto',
  },
});
