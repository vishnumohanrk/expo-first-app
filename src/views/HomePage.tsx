import * as React from 'react';
import { RefreshControl } from 'react-native';
import { useQuery } from 'react-query';

import { ArticleList } from '../components/ArticleList';
import { getArticles } from '../utils';

export const HomePage = () => {
  const { data, refetch, isLoading } = useQuery(
    'articleList',
    () => getArticles(1),
    { refetchOnWindowFocus: false },
  );

  return (
    <ArticleList
      data={data}
      refreshControl={
        <RefreshControl onRefresh={refetch} refreshing={isLoading} />
      }
    />
  );
};
