import * as React from 'react';

import { ArticleList } from '../components/ArticleList';
import { EmptyFavList } from '../components/EmptyFavList';

export const BookmarksPage = () => (
  <ArticleList title="Saved" data={[]} ListEmptyComponent={EmptyFavList} />
);
