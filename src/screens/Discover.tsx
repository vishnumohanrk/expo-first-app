import * as React from 'react';
import { FlatList, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { ArticleCard } from '../components/ArticleCard';
import { Divider } from '../components/Divider';

export const DiscoverPage = () => {
  const ListHeader = () => <AppHeader text="Articles" />;

  return (
    <FlatList
      style={{ paddingHorizontal: 16 }}
      data={['1', '2', '3', '4', '5', '6']}
      renderItem={() => <ArticleCard />}
      ItemSeparatorComponent={Divider}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={() => <View style={{ height: 36 }} />}
      keyExtractor={i => i}
    />
  );
};
