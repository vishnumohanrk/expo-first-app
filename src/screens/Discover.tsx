import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View,
} from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { ArticleCard } from '../components/ArticleCard';
import { Divider } from '../components/Divider';
import { useArticles } from '../hooks/useArticles';
import { appColors } from '../utils';

export const DiscoverPage = () => {
  const { articles, isLoading, update } = useArticles();

  const ListHeader = () => <AppHeader text="Articles" />;

  const Spinner = () => (
    <ActivityIndicator size="large" color={appColors.accent} />
  );

  return (
    <FlatList
      style={{ paddingHorizontal: 16 }}
      data={articles}
      keyExtractor={i => i.id}
      renderItem={({ item }) => <ArticleCard {...item} />}
      ItemSeparatorComponent={Divider}
      ListHeaderComponent={ListHeader}
      ListEmptyComponent={Spinner}
      ListFooterComponent={View}
      ListFooterComponentStyle={{ height: 36 }}
      refreshControl={
        <RefreshControl
          onRefresh={update}
          refreshing={isLoading}
          progressViewOffset={36}
        />
      }
    />
  );
};
