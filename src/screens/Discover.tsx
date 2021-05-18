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
import { appColors } from '../utils/constants';
import { defData } from '../utils/types';

export const DiscoverPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const ListHeader = () => <AppHeader text="Articles" />;

  const Spinner = () => (
    <ActivityIndicator size="large" color={appColors.accent} />
  );

  return (
    <FlatList
      style={{ paddingHorizontal: 16 }}
      data={['1', '2', '3', '4', '5', '6', '7']}
      renderItem={() => <ArticleCard {...defData} />}
      ItemSeparatorComponent={Divider}
      ListHeaderComponent={ListHeader}
      ListEmptyComponent={Spinner}
      ListFooterComponent={() => <View style={{ height: 36 }} />}
      keyExtractor={i => i}
      refreshing={isLoading}
      refreshControl={
        <RefreshControl
          onRefresh={() => {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 5000);
          }}
          refreshing={isLoading}
          progressViewOffset={36}
        />
      }
    />
  );
};
