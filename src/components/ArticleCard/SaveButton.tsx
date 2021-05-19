import * as React from 'react';

import { appColors, TArticle } from '../../utils';
import { IconButton } from '../helper/IconButton';

export const SaveButton = (props: TArticle) => {
  const { id } = props;

  const [isLiked, setIsLiked] = React.useState(false);

  const handlePress = () => {
    setIsLiked(c => !c);
  };

  return (
    <IconButton
      color={isLiked ? '#F18A82' : appColors.secondaryText}
      name={isLiked ? 'favorite' : 'favorite-outline'}
      label="Add to Bookmarks"
      onPress={handlePress}
    />
  );
};
