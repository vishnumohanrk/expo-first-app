import * as React from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { useQuery } from 'react-query';

import { ArticleCard } from '../components/ArticleCard';
import { ListDivider } from '../components/helper/ListDivider';
import { Spinner } from '../components/helper/Spinner';
import { getArticles } from '../utils';

export const HomePage = () => {
  const { data, refetch, isLoading } = useQuery(
    'articleList',
    () => getArticles(1),
    { refetchOnWindowFocus: false },
  );

  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={i => i.id}
      renderItem={({ item }) => <ArticleCard {...item} />}
      ItemSeparatorComponent={ListDivider}
      ListFooterComponent={View}
      ListFooterComponentStyle={styles.footer}
      ListEmptyComponent={Spinner}
      refreshControl={
        <RefreshControl onRefresh={refetch} refreshing={isLoading} />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  footer: {
    height: 64,
  },
});
