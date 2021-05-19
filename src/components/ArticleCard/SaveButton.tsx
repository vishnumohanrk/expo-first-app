import { useRoute } from '@react-navigation/native';
import * as React from 'react';

import { useStoredArticles } from '../../hooks/useStoredArticles';
import { appColors, TArticle } from '../../utils';
import { IconButton } from '../helper/IconButton';

export const SaveButton = (props: TArticle) => {
  const { id } = props;

  const { addOne, deleteOne, isSaved } = useStoredArticles();
  const [isLiked, setIsLiked] = React.useState(false);

  const route = useRoute();

  React.useEffect(() => {
    setIsLiked(isSaved(id));
  }, [isSaved, id]);

  const handlePress = () => {
    setIsLiked(c => !c);
    if (isLiked) deleteOne(id);
    else addOne(props);
  };

  return (
    <>
      {route.name === 'Explore' ? (
        <IconButton
          color={isLiked ? '#F18A82' : appColors.secondaryText}
          name={isLiked ? 'favorite' : 'favorite-outline'}
          label="Add to Bookmarks"
          onPress={handlePress}
        />
      ) : null}
    </>
  );
};
