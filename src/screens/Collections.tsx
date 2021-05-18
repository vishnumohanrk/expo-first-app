import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { AppText } from '../components/AppText';
import { ArticleCard } from '../components/ArticleCard';
import { Divider } from '../components/Divider';
import { appColors } from '../utils/constants';

export const CollectionsPage = () => {
  const ListHeader = () => <AppHeader text="Saved" />;
  const ListFooter = () => <View style={{ height: 36 }} />;

  const ListEmpty = () => (
    <AppText style={styles.fallbackText}>
      No Saved Articles.
      {'\n'}
      Tap ♥ to add to collections
    </AppText>
  );

  return (
    <FlatList
      style={{ paddingHorizontal: 16 }}
      data={[]}
      renderItem={() => <ArticleCard />}
      ItemSeparatorComponent={Divider}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={ListFooter}
      ListEmptyComponent={ListEmpty}
      keyExtractor={i => i}
    />
  );
};

const styles = StyleSheet.create({
  fallbackText: {
    color: appColors.secondaryText,
    fontSize: 36,
  },
});
