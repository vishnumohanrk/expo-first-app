import * as React from 'react';

import { ArticleList } from '../components/ArticleList';
import { EmptyFavList } from '../components/EmptyFavList';
import { useStoredArticles } from '../hooks/useStoredArticles';

export const BookmarksPage = () => {
  const { allSaved } = useStoredArticles();

  return (
    <ArticleList
      title="Saved"
      data={allSaved}
      ListEmptyComponent={EmptyFavList}
    />
  );
};
