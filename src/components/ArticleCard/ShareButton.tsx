import * as React from 'react';
import { Share } from 'react-native';

import { appColors } from '../../utils';
import { IconButton } from '../helper/IconButton';

export const ShareButton = ({ url }: { url: string }) => {
  const handlePress = () => {
    Share.share({ message: url }, { dialogTitle: 'Share' });
  };

  return (
    <IconButton
      color={appColors.secondaryText}
      name="share"
      label="Share Article"
      onPress={handlePress}
    />
  );
};
