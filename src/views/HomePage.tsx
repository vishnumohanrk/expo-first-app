import * as React from 'react';
import { RefreshControl } from 'react-native';
import { useInfiniteQuery } from 'react-query';

import { ArticleList } from '../components/ArticleList';
import { getArticles } from '../utils';

export const HomePage = () => {
  const { data, refetch, isLoading, fetchNextPage } = useInfiniteQuery(
    'articleList',
    getArticles,
    {
      getNextPageParam: (_, allPages) =>
        allPages.length !== 5 ? allPages.length + 1 : undefined,
    },
  );

  const results = React.useMemo(
    () => data?.pages.reduce((acc, val) => acc.concat(val)),
    [data?.pages],
  );

  const fetchMore = () => {
    fetchNextPage();
  };

  return (
    <ArticleList
      data={results}
      onEndReached={fetchMore}
      refreshControl={
        <RefreshControl onRefresh={refetch} refreshing={isLoading} />
      }
    />
  );
};
