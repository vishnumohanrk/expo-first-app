import * as React from 'react';

import { appColors } from '../utils';
import { TArticle } from '../utils/types';
import { ArticleCardBtn } from './ArticleCardBtn';

export const ArticleCardSave = (props: TArticle) => {
  const { id } = props;

  const [isLiked, setIsLiked] = React.useState(false);

  const handlePress = () => {
    setIsLiked(c => !c);
  };

  return (
    <ArticleCardBtn
      color={isLiked ? '#F18A82' : appColors.secondaryText}
      icoName={isLiked ? 'favorite' : 'favorite-outline'}
      label="Add to Collections"
      onPress={handlePress}
    />
  );
};
