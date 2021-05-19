import * as React from 'react';

import { useStoredArticles } from '../../hooks/useStoredArticles';
import { appColors, TArticle } from '../../utils';
import { IconButton } from '../helper/IconButton';

export const SaveButton = (props: TArticle) => {
  const { id } = props;

  const { addNew, deleteOne, isSaved, allSaved } = useStoredArticles();
  const [isLiked, setIsLiked] = React.useState(false);

  React.useEffect(() => {
    setIsLiked(isSaved(id));
  }, [allSaved, id, isSaved]);

  const handlePress = () => {
    setIsLiked(c => !c);
    if (isLiked) deleteOne(id);
    else addNew(props);
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
