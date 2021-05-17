import { MaterialIcons as MdIcons } from '@expo/vector-icons';
import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { appColors, rippleConfig } from '../utils/constants';

type ArticleCardActionProps = {
  children: React.ReactNode;
  onPress: () => void;
};

const ArticleCardAction = ({ children, onPress }: ArticleCardActionProps) => (
  <Pressable onPress={onPress} android_ripple={rippleConfig}>
    {children}
  </Pressable>
);

export const Share = () => (
  <ArticleCardAction onPress={() => {}}>
    <MdIcons
      style={styles.iconContainer}
      color={appColors.secondaryText}
      name="share"
      size={22}
    />
  </ArticleCardAction>
);

export const Save = () => {
  const [isLiked, setIsLiked] = React.useState(false);

  const handlePress = () => setIsLiked(c => !c);

  return (
    <ArticleCardAction onPress={handlePress}>
      <MdIcons
        style={styles.iconContainer}
        color={isLiked ? '#F18A82' : appColors.secondaryText}
        name={isLiked ? 'favorite' : 'favorite-outline'}
        size={22}
      />
    </ArticleCardAction>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
});
