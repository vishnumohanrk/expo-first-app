import * as React from 'react';
import { FlatList } from 'react-native';

import { ArticleCard } from '../components/ArticleCard';
import { ListEmpty, ListFooter, ListHeader } from '../components/BookmarkList';
import { Divider } from '../components/Divider';
import { defData } from '../utils/types';

export const CollectionsPage = () => {
  return (
    <FlatList
      style={{ paddingHorizontal: 16 }}
      data={[]}
      renderItem={() => <ArticleCard {...defData} />}
      ItemSeparatorComponent={Divider}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={ListFooter}
      ListEmptyComponent={ListEmpty}
      keyExtractor={i => i}
    />
  );
};
