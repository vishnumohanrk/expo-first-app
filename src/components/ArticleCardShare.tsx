import * as React from 'react';
import { Share } from 'react-native';

import { appColors } from '../utils';
import { ArticleCardBtn } from './ArticleCardBtn';

export const ArticleCardShare = ({ url }: { url: string }) => {
  const handlePress = () => {
    Share.share({ message: url }, { dialogTitle: 'Share' });
  };

  return (
    <ArticleCardBtn
      color={appColors.secondaryText}
      icoName="share"
      label="Share Article"
      onPress={handlePress}
    />
  );
};
