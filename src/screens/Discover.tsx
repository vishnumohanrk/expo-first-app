import * as React from 'react';
import { FlatList, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { ArticleCard } from '../components/ArticleCard';

export const DiscoverPage = () => (
  <FlatList
    style={{ paddingHorizontal: 16 }}
    data={['1', '2', '3', '4', '5', '6']}
    renderItem={() => <ArticleCard />}
    ItemSeparatorComponent={() => <View style={{ height: 22 }} />}
    ListHeaderComponent={() => <AppHeader />}
    ListFooterComponent={() => <View style={{ height: 64 }} />}
    keyExtractor={i => i}
  />
);
