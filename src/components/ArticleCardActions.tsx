import { MaterialIcons as MdIcons } from '@expo/vector-icons';
import * as React from 'react';
import { Pressable, View } from 'react-native';

import { appColors, rippleConfig } from '../utils/constants';

type ArticleCardActionProps = {
  icoName: 'share' | 'favorite-outline';
  onPress: () => void;
};

const ArticleCardAction = (props: ArticleCardActionProps) => {
  const { icoName, onPress } = props;

  return (
    <View>
      <Pressable onPress={onPress} android_ripple={rippleConfig}>
        <MdIcons color={appColors.secondaryText} size={22} name={icoName} />
      </Pressable>
    </View>
  );
};

export const Share = () => (
  <ArticleCardAction icoName="share" onPress={() => {}} />
);

export const Save = () => (
  <ArticleCardAction icoName="favorite-outline" onPress={() => {}} />
);
